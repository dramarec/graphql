// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

// Components
import { Customer } from './bus/customer/auth';
import { Login } from './bus/customer/login';
import { Pet } from './bus/pet';
import { CheckinPet } from './bus/pet/checkinPet';

// Other
import { client } from './init/client';

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <h1>Hello</h1>
            <CheckinPet />

            <Customer />
            <Login />

            <Pet />
        </ApolloProvider>
    );
};
