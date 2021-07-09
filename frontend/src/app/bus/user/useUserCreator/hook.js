import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import { useForm } from '../../../hooks/useForm';

const mutationCreateUser = loader('./gql/mutationCreateUser.graphql');

export const useUserCreator = () => {
    const [_save, { data }] = useMutation(mutationCreateUser);
    const { form, handleChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const save = () => {
        _save({
            variables: form
        });
    };

    return {
        handleChange,
        save,
        createdUser: data && data.signUp
    };
};
