// Core
import React from 'react';

// Components
import { Registration } from './useUserCreator/Registration';
import { Users } from './useQueryUsers/Users';
import { Login } from './useUserLogin/Login';

export const User = () => {
    return (
        <>
            <Registration />
            <Login />
            <Users />
        </>
    );
};
