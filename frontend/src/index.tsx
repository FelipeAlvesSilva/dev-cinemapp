import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Routes from './components/Routes';

const client = new ApolloClient({
  // create API endpoint
  uri: ""
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider> ,document.getElementById('app'));