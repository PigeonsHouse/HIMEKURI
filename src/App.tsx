import React, { useCallback, useEffect, useState } from "react";
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

type CalendarCardProps = Readonly<{
  calendarDate: Date,
  onClick?: () => void;
}>

const CalendarCard: React.FC<CalendarCardProps> = ({
  calendarDate,
  onClick,
}) => {

  console.log(calendarDate)

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
      <div className="primary-info">
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
    const date = calendarDate;
    date.setDate(date.getDate() + 1);
    setCalendarDate(date);
  }, [calendarDate, setCalendarDate]);

  return (
    <div className="window-wrapper">
      <CalendarCard calendarDate={calendarDate} onClick={onClick}/>
      <div className="header">HIMEKURI CALENDAR</div>
    </div>
  );
}

export default App;
