// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
	const [_save, { data }] = useMutation(mutationCreateAccount);
	console.log('useCustomerCreator ===> data', data);
	const { form, handleChange } = useForm({
		name: '',
		username: '',
		password: ''
	});
	console.log('useCustomerCreator ===> form', form);

	const save = () => {
		_save({
			variables: {
				account: form
			}
		});
	};

	return {
		handleChange,
		save,
		createdAccount: data && data.createAccount
	};
};
