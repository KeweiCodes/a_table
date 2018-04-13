import React from 'react'
import Select from 'react-select';
import { Subscription } from 'react-apollo';
import PropTypes from 'prop-types';

class MultiSelect extends React.Component { 
  render(){    
    const { value, loading, data, handleChange } = this.props;

    return (
      <Select
        multi={true}
        options={
          loading ? [] :
          data.items.edges.map(
            m => {
              const id = m.node.subscription_id;
              return { 
                value: id,
                label: id
              }
            }
          )
        }
        onChange={handleChange}
        value={value.length ? value.map(v => {
          return {value: v, label: v}
        }) : []}
      />
    )
  }
}

MultiSelect.propTypes = {
  value: PropTypes.array,
  data: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}


export default MultiSelect;