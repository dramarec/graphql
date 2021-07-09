import { useState } from 'react';

export const useForm = initialValues => {
	const [form, setForm] = useState(initialValues);

	const handleChange = e => {
		e.persist();
		// e.preventDefault();
		setForm(prevValues => ({
			...prevValues,
			[e.target.name]: e.target.value
		}));
	};

	return {
		handleChange,
		form
	};
};
