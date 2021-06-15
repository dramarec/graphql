// Core
import React from 'react';

// Hooks
import { useQueryUsers } from './hooks/useQueryUsers';

export const Users = () => {
    const { getUsers, loading, error, users } = useQueryUsers();
    console.log('Users ===> users', users);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>We have a problem: {error.message}</p>;
    }

    const usersJSX =
        users &&
        users.map(({ name, email, password }, id) => (
            <p key={id}>
                <span>Name: {name}</span>
                <span>Email: {email}</span>
                <span>Password: {password}</span>
            </p>
        ));
    return (
        <>
            <h1>Users</h1>
            <button onClick={getUsers}>Get Users</button>
            {usersJSX}
        </>
    );
};
