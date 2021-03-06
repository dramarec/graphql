import React from 'react';
import { useCheckin } from './useCheckin'

export const CheckinPet = () => {
    const { checkIn, pet, errors, error, loading } = useCheckin();

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
        <div >
            <h1>Checkin</h1>
            {petJSX}
            {errorJSX}
            {errorsJSX}
            <button onClick={() => checkIn("C-7")}>CheckIn</button>
        </div>
    );
};
