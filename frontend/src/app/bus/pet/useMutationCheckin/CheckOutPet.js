import React from 'react';
import { useCheckOut } from './useCheckOut'

export const CheckOutPet = () => {
    const { checkOut, pet, errors, error, loading } = useCheckOut();

    if (loading) return 'Loading...';

    const errorJSX = errors && <h2>We have a problem: {errors}</h2>;
    const errorsJSX = error && <h1>We have another Apollo problem: {error.message}</h1>;

    if (error) return `Error Apollo! ${error.message}`;
    if (errors) return `Error! ${errors}`;

    const petJSX = pet && (
        <div>
            <p>Id: {pet.id}</p>
            <p>Name: {pet.name}</p>
        </div>
    );

    return (
        <div>
            <h1>CheckOutPet</h1>
            <button onClick={() => checkOut("C-7")}>CheckOut</button>
            {petJSX}
            {errorJSX}
            {errorsJSX}
        </div>
    );
};
