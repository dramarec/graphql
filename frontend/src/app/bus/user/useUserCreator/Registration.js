import React from 'react';
import { useUserCreator } from './hook';

export const Registration = () => {
    const { handleChange, save, createdUser, error, errors, load } = useUserCreator();

    if (load) return 'LPADINGGG........'
    if (error) return `Apollo Registration error: ${error.message}`



    const userJSX = createdUser && <p>We already created customer with name: {createdUser.name}</p>;
    const errorsJSX = errors && <p>We have already CATH ERROR: {errors}</p>;

    return (
        <div>
            <h1>Registration</h1>
            <input type="text" placeholder="name" name="name" onChange={handleChange} />
            <input type="text" placeholder="email" name="email" onChange={handleChange} />
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
            <button type="submit" onClick={save}>
                Save
            </button>
            {userJSX}
            {errorsJSX}
        </div>
    );
};
