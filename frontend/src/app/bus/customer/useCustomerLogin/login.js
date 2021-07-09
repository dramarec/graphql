import React from 'react';
import { useCustomerAuth } from './index';

export const Login = () => {
    const { handleChange, logIn, authorizedCustomer, errors, error, loading } = useCustomerAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    // if (errors) {
    //     return <p>We have a problem: {errors}</p>;
    // }

    const errorsJSX = errors && <p>We have a problem: {errors}</p>;

    const errorsApollo = error && <p>We have another Apollo problem: {error.message}</p>;

    const authorizedCustomerJSX = authorizedCustomer && (
        <p>Authorized Customer: {authorizedCustomer.customer.name}</p>
    );

    return (
        <>
            <h1>Login</h1>
            {!loading && !errors && (
                <div>
                    <input type="text" placeholder="username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={handleChange} />
                    <button type="submit" onClick={logIn}>Login</button>
                </div>
            )}
            {errorsJSX}
            {errorsApollo}
            {authorizedCustomerJSX}
        </>
    );
};
