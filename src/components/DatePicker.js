import React from "react";
import DatePicker from "react-datepicker";

const CustomDatePicker = (props) => {
  return (
    <div className="datepicker__wrapper">
      <DatepickerLabel>{props.placeholder}</DatepickerLabel>
      <DatePicker
        selected={props.date}
        onChange={props.handleDateChange}
        maxDate={new Date()}
        dateFormat="MMM dd, yyyy"
        className="picker"
      />
    </DatepickerWrapper>
  );
};

export default CustomDatePicker;