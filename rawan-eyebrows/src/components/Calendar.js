import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import TimePicker from "material-ui/TimePicker";
require("react-big-calendar/lib/css/react-big-calendar.css");

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: "",
      start: "",
      end: "",
      desc: "",
      openSlot: false,
      openEvent: false,
      clickedEvent: {},
    };
    this.handleClose = this.handleClose.bind(this);
  }
  
  //closes modals
  handleClose() {
    this.setState({ openEvent: false, openSlot: false });
  }
  render() {}
}
export default Calendar;
