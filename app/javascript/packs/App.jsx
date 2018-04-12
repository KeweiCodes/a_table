import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'react-table/react-table.css'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Table from './Table';

const GET_ITEMS = gql`
  query GetItems(
    $subscription_id: String,
    $min_cost: Int,
    $max_cost: Int,
    $min_time: String,
    $max_time: String,
    $order_by: String = "id asc",
    $first: Int = 20
  ) {
    items(
      subscription_id: $subscription_id,
      min_cost: $min_cost,
      max_cost: $max_cost,
      min_time: $min_time,
      max_time: $max_time,
      order_by: $order_by,
      first: $first
    ){
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id,
          subscription_id,
          cost
        }
      }
    }
  }
`;

class App extends React.Component { 
  constructor(){
    super();
    this.state ={
      apolloClient: new ApolloClient({
        link: new HttpLink({ uri: '/api/v1/graphql'}),
        cache: new InMemoryCache(),
      })
    };
  }

  render() {
    return (
      <ApolloProvider client={this.state.apolloClient}>
        <Query 
          query={GET_ITEMS}
          variables={{
            
          }}>
          {
            ({loading, error, data, refetch}) => {
              return (
                <Table data={data} loading={loading} refetch={refetch} error={error} />
              )
            }
          }
        </Query>
      </ApolloProvider>
    );
  }

  componentDidMount(){
  
  }
}

// App.defaultProps = {
//   name: 'David'
// }

// App.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.getElementById('app'),
  )
})
