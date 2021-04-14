import React from 'react';

import { useCustomerCreator } from './hooks/useCustomerAuth';

export const Customer = () => {
    const { handleChange, save, createdAccount, loading, error } = useCustomerCreator();

    const customerJSX = createdAccount && <p>We already created customer with name: {createdAccount.name}</p>;
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>We have a problem: {error.message}</p>;
    }
    // const errorJSX = error && <p>{error}</p>;

    return (
        <>
            <h1>Registration</h1>
            {!loading && !error && (
                <div>
                    <input type="text" placeholder="name" name="name" onChange={handleChange} />
                    <input type="text" placeholder="username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={handleChange} autoComplete="on" />
                    <button type="submit" onClick={save}>
                        Save
                    </button>
                </div>
            )}
            {customerJSX}
        </>
    );
};