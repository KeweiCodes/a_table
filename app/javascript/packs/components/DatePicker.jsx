import React from 'react'
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateTimePicker extends React.Component { 
  render(){
    const { handleDateChange, date } = this.props;
    return (
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="LL"
        className="form-control col-md-12"
        placeholderText="📆"
      />
    )
  }
}

DateTimePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment)
}

export default DateTimePicker;