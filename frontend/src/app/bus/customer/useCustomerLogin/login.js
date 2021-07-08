import React from 'react';
import { useCustomerAuth } from './index';

export const Login = () => {
    const { handleChange, logIn, authorizedCustomer, error, errors, loading } = useCustomerAuth();

    const authorizedCustomerJSX = authorizedCustomer && (
        <>
            <p>Authorized Customer: {authorizedCustomer.customer.name}</p>
        </>
    );

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>We have a problem: {error.message}</p>;
    }

    const errorsJSX = errors && <p>We have a problem: {errors.message}</p>;

    return (
        <>
            <h1>Login</h1>

            <>
                <input type="text" placeholder="username" name="username" onChange={handleChange} />
                <input type="password" placeholder="password" name="password" onChange={handleChange} />
                <button type="submit" onClick={logIn}>
                    Login
                </button>
            </>
            {errorsJSX}
            {authorizedCustomerJSX}
        </>
    );
};
