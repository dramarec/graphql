// Core
import { loader } from 'graphql.macro';
import { useSubscription } from '@apollo/client';

// Subscriptions
const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned = () => {
    const { loading, error, data } = useSubscription(subscriptionPetReturned);

    const pet = data ? data.petReturned.pet : null;

    return { loading, error, pet };
};
