import { connect } from 'react-redux'
import CostInput from '../components/CostInput'
import { editFilter } from '../redux/Actions'


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: event => {
      const intVal = parseInt(event.target.value) || 0;
      dispatch(editFilter(ownProps.type, intVal));
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(CostInput);