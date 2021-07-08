import React from 'react';

// Components
import { Counter } from './useQueryAvailablePets/Counter';
import { List } from './useQueryAllPets/List';
import { SpecialList } from './useQueryAllAvailablePets/SpecialList';
import { Profile } from './useQueryProfile/Profile';
import { CheckinPet } from './useMutationCheckin/CheckinPet';
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
