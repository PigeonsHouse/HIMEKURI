import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css"
import { DATE_KEY, DAY_OF_WEEK_STRING, HEISEI_OFFSET, JAPANESE_MONTH, JIKKAN, JUNISHI, MILLISECOND_OF_ONE_DAY, REIWA_OFFSET, SHOWA_OFFSET } from "./constants";
import { getHoliday } from "./holiday";

type CalendarCardProps = Readonly<{
  className?: string;
  calendarDate: Date,
  onClick?: () => void;
}>

const CalendarCard: React.FC<CalendarCardProps> = ({
  className,
  calendarDate,
  onClick,
}) => {
  const holidayInfo = useMemo(() => {
    return getHoliday(calendarDate);
  }, [calendarDate]);
  const primaryInfo = useMemo(() => {
    const className = "primary-info";
    switch (calendarDate.getDay()) {
      case 6:
        return `${className} saturday`;
      case 0:
        return `${className} sunday`;
      default:
        if (holidayInfo) {
          return `${className} sunday`;
        }
        return className;
    }
  }, [calendarDate, holidayInfo]);
  const rokujikkanshiIndex = useMemo(() => {
    return (Math.floor((calendarDate.valueOf() + 1000*3600*9) / MILLISECOND_OF_ONE_DAY)+17) % 60;
  }, [calendarDate]);
  const jikkan = useMemo(() => {
    const jikkanIndex = rokujikkanshiIndex % 10;
    return JIKKAN[jikkanIndex];
  }, [rokujikkanshiIndex]);
  const junishi = useMemo(() => {
    const junisiIndex = rokujikkanshiIndex % 12;
    return JUNISHI[junisiIndex];
  }, [rokujikkanshiIndex]);

  const onClickCalendar = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick === undefined) return;
    if ((e.target as HTMLElement).tagName === 'A') return;
    onClick();
  }, [onClick]);

  return (
    <div className={`card-parent ${className}`} onClick={onClickCalendar}>
      <div className="secondary-info">
        <div className="year-and-japanese-month">
          <div className="year">{calendarDate.getFullYear()}</div>
          <div className="japanese-month">{JAPANESE_MONTH[calendarDate.getMonth()]}</div>
        </div>
        <div className="month"><span>{calendarDate.getMonth()+1}</span>月</div>
        <div className="japanese-year">
          <div className="reiwa-year">令和{calendarDate.getFullYear()-REIWA_OFFSET}年</div>
          <div className="old-japanese-year">平{calendarDate.getFullYear()-HEISEI_OFFSET}年･昭{calendarDate.getFullYear()-SHOWA_OFFSET}年</div>
        </div>
      </div>
      <div className={primaryInfo}>
        <div className="date">
          {calendarDate.getDate()}
        </div>
        <div className="day-of-week">
          {DAY_OF_WEEK_STRING[calendarDate.getDay()]}曜
        </div>
        {
          holidayInfo !== null ? (
            <div className="holiday">
              {holidayInfo.name}
            </div>
          ) : null
        }
      </div>
      <div className="tertiary-info">
        <div>{jikkan} {junishi}</div>
        <div className="credit">制作：<a href="https://twitter.com/PigeonsHouse">鳩屋敷</a></div>
      </div>
    </div>
  )
}

const App = () => {
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // initialize date
  useEffect(() => {
    const dateStr = localStorage.getItem(DATE_KEY);
    if (dateStr === null) {
      const dateNum = Date.now();
      localStorage.setItem(DATE_KEY, dateNum.toString())
      setCalendarDate(new Date(dateNum));
    } else {
      setCalendarDate(new Date(parseFloat(dateStr)));
    }
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const onClick = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);

    const date = new Date(calendarDate.getTime() + MILLISECOND_OF_ONE_DAY);
    setCalendarDate(date);
    localStorage.setItem(DATE_KEY, date.getTime().toString())
  }, [isLoading, calendarDate, setCalendarDate]);

  return (
    <div className="window-wrapper">
      <div className="main-container">
        <CalendarCard calendarDate={calendarDate} onClick={onClick}/>
        {
          isLoading ? (
            <CalendarCard className="fade-out" calendarDate={new Date(calendarDate.valueOf() - MILLISECOND_OF_ONE_DAY)} />
          ) : null
        }
        <div className="header">HIMEKURI CALENDAR</div>
      </div>
    </div>
  );
}

export default App;
