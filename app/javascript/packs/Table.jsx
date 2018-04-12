import React from 'react'
import ReactTable from 'react-table'

class Table extends React.Component {  
  render(){  
    const { data, refetch, loading, error } = this.props;

    const columns = [{
      Header: 'Data ID',
      accessor: 'node.id',
      id: 'id'
    }, {
      Header: 'Subscription ID',
      accessor: 'node.subscription_id',
      id: 'subscription_id'
    }, {
      Header: 'Cost',
      accessor: item => item.node.cost.toFixed(1),
      id: 'cost'
    }];

    return (
      <ReactTable
        data={ loading ? [] : data.items.edges}
        columns={columns}
        manual
        multiSort={false}
        onFetchData={(state, instance) => {
          let sortObj = state.sorted[0];
          let sortField = '', sortDirection = '';
          const pageSize = state.pageSize;

          if (sortObj) {
            sortField = sortObj.id;
            sortDirection = sortObj.desc ? 'desc' : 'asc'
          }
          refetch({ order_by: `${sortField} ${sortDirection}`, first: state.pageSize })
        }}
      />
    );
  }
}

export default Table;