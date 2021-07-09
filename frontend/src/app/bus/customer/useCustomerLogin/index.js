import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from '../useForm';

const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
    const [signIn, { data, error }] = useMutation(mutationLogIn);
    // console.log("🔥🚀 ===> useMutation ===> error", error);

    const [errors, setErrors] = useState(false);
    // console.log("🔥🚀 ===> setErrors ===> errors", errors);

    const { form, handleChange } = useForm({ username: '', password: '' });

    const authorizedCustomer = data && data.logIn;
    const token = authorizedCustomer && authorizedCustomer.token;

    if (token) {
        localStorage.setItem('token', token);
    }

    const logIn = () => {
        // signIn({
        //     variables: form
        // });

        (async () => {
            try {
                await signIn({
                    variables: form
                });
            } catch (errors) {
                setErrors(errors.message);
            }
        })();
    };

    return {
        logIn,
        handleChange,
        authorizedCustomer,
        error,
        errors
    };
};

