import React from 'react'
import Select from 'react-select';
import { Subscription } from 'react-apollo';

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

export default MultiSelect;