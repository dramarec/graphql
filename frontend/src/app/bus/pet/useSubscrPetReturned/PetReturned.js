import React from 'react';
import { usePetReturned } from './hook';

export const PetReturned = () => {
    const { pet, errors } = usePetReturned();

    const petJSX = pet && (
        <>
            <p>Id: {pet.id}</p>
            <p>Name: {pet.name}</p>
        </>
    );

    const errorsJSX = errors && <p>We have a problem: {errors.message}</p>;

    return (
        <>
            <h1>Pet Returned</h1>
            {petJSX}
            {errorsJSX}
        </>
    );
};
