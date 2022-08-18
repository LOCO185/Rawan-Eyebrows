import "./App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// locales need to be fixed to IL
// const locales = {
//   "he-IL": requestAnimationFrame("date-fns/locale/he-IL"),
// };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  // locales,
});

const events = [
  {
    title: "first",
    start: new Date(2022, 8, 0),
    end: new Date(2022, 8, 0),
  },
  {
    title: "second",
    start: new Date(2022, 8, 0),
    end: new Date(2022, 8, 0),
  },
  {
    title: "third",
    start: new Date(2022, 8, 0),
    end: new Date(2022, 8, 0),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
    </div>
  );
}

export default App;
