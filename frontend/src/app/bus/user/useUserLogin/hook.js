import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from '../../../hooks/useForm';

const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useUserLogin = () => {
    const [_logIn, { data, error, loading }] = useMutation(mutationLogIn);
    console.log("🔥🚀 ===> useUserLogin ===> data", data);

    const [errors, setErrors] = useState(false);

    const { form, handleChange } = useForm({ email: '', password: '' });
    console.log("🔥🚀 ===> useUserLogin ===> form", form);

    const authorizedUser = data && data.login;

    const token = authorizedUser?.token

    if (token) {
        localStorage.setItem('token', token);
    }


    const logIn = () => {
        // _logIn({
        //     variables: form
        // });
        (async () => {
            try {
                await _logIn({
                    variables: form
                });
            } catch (errors) {
                setErrors(errors.message)
            }
        })();
    };

    return {
        logIn,
        handleChange,
        authorizedUser,
        error,
        loading,
        errors
    };
};
