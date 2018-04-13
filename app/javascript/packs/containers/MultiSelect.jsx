import React from 'react';
import { connect } from 'react-redux'
import MultiSelect from '../components/MultiSelect'
import { editFilter } from '../redux/Actions'
import { GET_ITEMS } from '../graphql/queries';
import { Query } from 'react-apollo';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.filters['subscription_id']
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: selected => {
      dispatch(editFilter('subscription_id', selected.length ? selected.map(s => s.value) : undefined));
    }
  }
}

const ContainerComponent = (props) => {
  const { handleChange, selected } = props;
  return (
    <Query 
      query={GET_ITEMS}
      variables={{unique_by: 'subscription_id'}}>
      {
        ({loading, error, data}) => {
          if (error) return 'Loading';

          return (
            <MultiSelect 
              data={data}
              loading={loading}
              handleChange={handleChange}
              value={selected || []}
            />
          )
        }
      }
    </Query>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerComponent);