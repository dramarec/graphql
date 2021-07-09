import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { App } from './app/App';
// import { client } from './app/init/client';
import { client } from './app/init/modern';

ReactDOM
    .render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    );
