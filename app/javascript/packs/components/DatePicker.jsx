import React from 'react'
import DatePicker from 'react-datepicker';

class DateTimePicker extends React.Component { 
  render(){
    const { handleDateChange, date } = this.props;
    return (
      <DatePicker
        selected={date}
        onChange={handleDateChange}
      />
    )
  }
}

export default DateTimePicker;