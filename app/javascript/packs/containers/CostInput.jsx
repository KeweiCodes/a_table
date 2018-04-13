import { connect } from 'react-redux'
import CostInput from '../components/CostInput'
import { editFilter } from '../redux/Actions'


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: event => {
      const floatVal = parseFloat(event.target.value) || undefined;
      dispatch(editFilter(ownProps.type, floatVal));
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(CostInput);