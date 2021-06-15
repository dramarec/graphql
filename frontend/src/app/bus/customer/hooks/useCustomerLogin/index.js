// Core
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
    const [_logIn, { data, errors }] = useMutation(mutationLogIn);
    const [error, setError] = useState(false);
    const { form, handleChange } = useForm({
        username: '',
        password: ''
    });

    const authorizedCustomer = data && data.logIn;
    const token = authorizedCustomer && authorizedCustomer.token;

    if (token) {
        localStorage.setItem('token', token);
    }

    const logIn = () => {
        (async () => {
            try {
                await _logIn({
                    variables: form
                });
            } catch (error) {
                setError(error.message);
            }
        })();
    };

    return {
        logIn,
        handleChange,
        authorizedCustomer,
        errors,
        error
    };
};
