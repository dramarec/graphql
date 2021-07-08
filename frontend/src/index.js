// import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/init/client';
import { App } from './app/App';

// ReactDOM.
render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
