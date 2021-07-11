import React from 'react';

// Hooks
import { useUserLogin } from './hook';

export const Login = () => {
    const { handleChange, logIn, authorizedUser, error, errors, loading } = useUserLogin();

    if (loading) return 'LPADINGGG........'
    if (error) return `Apollo Registration error: ${error.message}`
    const errorsJSX = errors && <p>We have already CATH ERROR: {errors}</p>;

    const authorizedUserJSX = authorizedUser && (
        <>
            <p>Authorized User: {authorizedUser.name}</p>
            <p>Authorized User: {authorizedUser.token}</p>
        </>
    );

    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="email" name="email" onChange={handleChange} />
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
            <button type="submit" onClick={logIn}>
                Login
            </button>

            {authorizedUserJSX}
            {errorsJSX}
        </div>
    );
};
