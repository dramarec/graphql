import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from '../useForm';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
    const [_save, { data, error }] = useMutation(mutationCreateAccount);
    // console.log('useCustomerCreator ===> error', error);

    const { form, handleChange } = useForm({ name: '', username: '', password: '' });

    const save = () => {
        (async () => {
            try {
                await _save({
                    variables: {
                        account: form
                    }
                });
            } catch (error) { }
        })();
    };

    return {
        handleChange,
        save,
        error,
        createdAccount: data && data.createAccount
    };
};
