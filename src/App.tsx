import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css"

const DATE_KEY = "calendarDate";
const JAPANESE_MONTH = [
  "睦月",
  "如月",
  "弥生",
  "卯月",
  "皐月",
  "水無月",
  "文月",
  "葉月",
  "長月",
  "神無月",
  "霜月",
  "師走",
];
const DAY_OF_WEEK_STRING = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土"
];
const REIWA_OFFSET = 2018;
const HEISEI_OFFSET = 1988;
const SHOWA_OFFSET = 1925;
const MILLISECOND_OF_ONE_DAY = 1000 * 60 * 60 * 24;

type CalendarCardProps = Readonly<{
  calendarDate: Date,
  onClick?: () => void;
}>

const CalendarCard: React.FC<CalendarCardProps> = ({
  calendarDate,
  onClick,
}) => {
  const primaryInfo = useMemo(() => {
    const className = "primary-info";
    switch (calendarDate.getDay()) {
      case 6:
        return `${className} saturday`;
      case 0:
        return `${className} sunday`;
      default:
        return className;
    }
  }, [calendarDate]);

  return (
    <div className="main-container" onClick={onClick}>
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
      </div>
      <div className="tertiary-info">制作：鳩屋敷</div>
    </div>
  )
}

const App = () => {
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  
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

  const onClick = useCallback(() => {
    const date = new Date(calendarDate.getTime() + MILLISECOND_OF_ONE_DAY);
    setCalendarDate(date);
    localStorage.setItem(DATE_KEY, date.getTime().toString())
  }, [calendarDate, setCalendarDate]);

  return (
    <div className="window-wrapper">
      <CalendarCard calendarDate={calendarDate} onClick={onClick}/>
      <div className="header">HIMEKURI CALENDAR</div>
    </div>
  );
}

export default App;
