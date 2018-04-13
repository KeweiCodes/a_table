import React from 'react'

class CostInput extends React.Component { 
  render(){
    const { handleChange } = this.props;
    return (
      <input
        onChange={(handleChange)}
        type="number" 
        min="0" 
        step="1"
        className="form-control col-md-12"
      />
    )
  }
}

export default CostInput;