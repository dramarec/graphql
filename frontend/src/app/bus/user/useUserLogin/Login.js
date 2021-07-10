import React from 'react';

// Hooks
import { useUserLogin } from './hook';

export const Login = () => {
    const { handleChange, logIn, authorizedUser } = useUserLogin();

    const authorizedUserJSX = authorizedUser && (
        <>
            <p>Authorized User: {authorizedUser.name}</p>
        </>
    );

    return (
        <>
            <h1>Login</h1>
            <input type="email" placeholder="email" name="email" onChange={handleChange} />
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
            <button type="submit" onClick={logIn}>
                Login
            </button>
            {authorizedUserJSX}
        </>
    );
};
