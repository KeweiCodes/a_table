import React from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types';

class Table extends React.Component {  
  render(){ 
    const { loading, columns } = this.props;

    if (loading){
      return <ReactTable data={[]} columns={columns} showPageJump={false}/>
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

Table.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  handleSortChange: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired, 
  handlePageSizeChange: PropTypes.func.isRequired
}
export default Table;