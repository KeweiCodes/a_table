import React from 'react'
import ReactTable from 'react-table'

class Table extends React.Component {  
  constructor(){
    super();
  }

  render(){  
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

    const { loading, error } = this.props;

    if (loading){
      return <ReactTable data={[]} columns={columns} showPageJump={false}/>
    }
    if (error){
      return (
        <div> 
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
        </div>
      )
    }
    const { data, 
            pageSize, 
            handleSortChange, 
            handlePageChange, 
            handlePageSizeChange, 
            page 
          } = this.props;
    
    const { edges, total_count } = data.items;
   
    const { startCursor, endCursor } = data.items.pageInfo;
    
    return (
      <ReactTable
        data={ edges }
        loading={loading}
        defaultPageSize={pageSize}
        columns={columns}
        manual
        multiSort={false}
        showPageJump={false}
        onSortedChange={handleSortChange}
        onPageSizeChange={handlePageSizeChange}
        onPageChange={loading ? null : 
          handlePageChange.bind(this, 
            startCursor, 
            endCursor
          )
        }
        page={ page }
        pages={ Math.ceil(total_count/pageSize) }
      />
    );
  }
}

export default Table;