import "./App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import DatePicker from "react-datepicker";

function App() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div></div>
    </div>
  );
}

export default App;
