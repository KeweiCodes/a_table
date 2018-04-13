import React from 'react'
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

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

DateTimePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  date: PropTypes.string
}

export default DateTimePicker;