import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { client } from './client';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
