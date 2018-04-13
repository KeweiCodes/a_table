import React from 'react'
import DatePicker from 'react-datepicker';

class DateTimePicker extends React.Component { 
  render(){
    const { handleDateChange, date } = this.props;
    return (
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        className="form-control col-md-12"
      />
    )
  }
}

export default DateTimePicker;