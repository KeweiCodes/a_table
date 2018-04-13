import 'react-table/react-table.css'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-select/dist/react-select.css';
import './app.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { Provider } from 'react-redux';
import store from './redux/Store';

import CostInput from './containers/CostInput';
import DatePicker from './containers/DatePicker';
import MultiSelect from './containers/MultiSelect';
import Table from './containers/Table';

class App extends React.Component { 
  constructor(){
    super();
    this.state ={
      apolloClient: new ApolloClient({
        link: new HttpLink({ uri: '/api/v1/graphql'}),
        cache: new InMemoryCache()
      })
    };
  }

  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={this.state.apolloClient}>
          <div className="container">
            <div className="app-container">
              <div className="form-group row">
                <div className="col-md-3">
                  <label className="col-form-label">Date From</label>
                  <DatePicker picker_type="min_time" />
                </div>
                <div className="col-md-3">
                  <label className="col-form-label">Date To</label>
                  <DatePicker picker_type="max_time" />
                </div>
                <div className="col-md-3">
                  <label className="col-form-label">Cost From</label>
                  <CostInput type="min_cost"/>
                </div>
                <div className="col-md-3">
                  <label className="col-form-label">Cost To</label>
                  <CostInput type="max_cost"/>
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">Subscription IDs</label>
                  <MultiSelect />
                </div>
              </div>
              <Table />
            </div>
          </div>
        </ApolloProvider>
      </Provider>
    );
  }

  handleChange(date){
    // this.setState({
    //   startDate: date
    // });
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
