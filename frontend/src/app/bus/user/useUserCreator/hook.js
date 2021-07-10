import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from '../../../hooks/useForm';

const mutationCreateUser = loader('./gql/mutationCreateUser.graphql');

export const useUserCreator = () => {
    const [createUser, { data, error, load }] = useMutation(mutationCreateUser);

    const [errors, setErrors] = useState(false);

    const { form, handleChange } = useForm({ name: '', email: '', password: '' });

    const save = () => {
        (async () => {
            try {
                await createUser({
                    variables: form
                });
            } catch (errors) {
                setErrors(errors.message)
            }
        })();
    };

    return {
        error,
        errors,
        load,
        handleChange,
        save,
        createdUser: data && data.signUp
    };
};
