// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
    const [_save, { data, error }] = useMutation(mutationCreateAccount);
    // console.log('useCustomerCreator ===> error', error);
    const { form, handleChange } = useForm({
        name: '',
        username: '',
        password: ''
    });

    const save = () => {
        (async () => {
            try {
                await _save({
                    variables: {
                        account: form
                    }
                });
            } catch (error) {}
        })();
    };

    return {
        handleChange,
        save,
        error,
        createdAccount: data && data.createAccount
    };
};
