import React from 'react';

// Components
import { CheckinPet } from './useMutationCheckin/CheckinPet';
import { Profile } from './useQueryProfile/Profile';
import { SpecialList } from './useQueryAllAvailablePets/SpecialList';
import { List } from './useQueryAllPets/List';
import { Counter } from './useQueryAvailablePets/Counter';
// import { PetReturned } from './hooks/useSubscrPetReturned/PetReturned';

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <CheckinPet />
            <Profile />
            <SpecialList />
            <List />
            <Counter />
            {/* <PetReturned /> */}
        </>
    );
};
