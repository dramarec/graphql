import { useState } from 'react';
// custom hooks

export const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);
    console.log("🔥🚀 ===> form", form);

    const handleChange = event => {
        event.persist();
        setForm(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }));
    };

    return {
        handleChange,
        form
    };
};
