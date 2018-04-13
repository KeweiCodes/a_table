import { connect } from 'react-redux'
import DatePicker from '../components/DatePicker'
import { editFilter } from '../redux/Actions'

const mapStateToProps = (state, ownProps) => {
  return {
    date: state.filters[ownProps.picker_type]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDateChange: date => {
      dispatch(editFilter(ownProps.picker_type, date));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);