// Core
import React from 'react';

// Hooks
import { useQueryAllAvailablePets } from './hook';

export const SpecialList = () => {
    const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

    const loaderJSX = loading && (
        <p>Loading...</p>
    );

    const errorJSX = error && (
        <p>
            We have a problem: {error.message}
        </p>
    );


    const petsJSX = pets && pets.map(({ id, name, weight }) => (
        <li key={id}>
            <p>Name: {name}</p>
            <p>Weight: {weight}</p>
        </li>
    ));

    return (
        <div>
            <button onClick={getAllAvailablePets}>Download</button>
            {loaderJSX}
            {errorJSX}
            <ul>
                {petsJSX}
            </ul>
        </div>
    )
};
