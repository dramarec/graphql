import React from 'react';

// Components
import { CheckinPet } from './useMutationCheckin/CheckinPet';
import { CheckOutPet } from './useMutationCheckin/CheckOutPet';
import { Profile } from './useQueryProfile/Profile';
import { SpecialList } from './useQueryAllAvailablePets/SpecialList';
import { List } from './useQueryAllPets/List';
import { Counter } from './useQueryAvailablePets/Counter';
import { PetReturned } from './useSubscrPetReturned/PetReturned';

export const Pet = () => {
    return (
        <div style={{ padding: 20, }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <PetReturned />
                <CheckinPet />
                <CheckOutPet />
            </div>
            <Profile />
            <SpecialList />
            <List />
            <Counter />
        </div>
    );
};
