// Core
import React from 'react';

// Components
import { Counter } from './hooks/useQueryAvailablePets/Counter';
import { List } from './hooks/useQueryAllPets/List';
import { SpecialList } from './hooks/useQueryAllAvailablePets/SpecialList';
import { Profile } from './hooks/useQueryProfile/Profile';
import { CheckinPet } from './hooks/useMutationCheckin/CheckinPet';
// import { PetReturned } from './hooks/useSubscrPetReturned/PetReturned';

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <Counter />
            <List />
            <SpecialList />
            <Profile />
            <CheckinPet />
            {/* <PetReturned /> */}
        </>
    );
};
