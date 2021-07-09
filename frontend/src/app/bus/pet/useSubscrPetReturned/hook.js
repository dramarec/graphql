import { loader } from 'graphql.macro';
import { useSubscription } from '@apollo/client';
// https://www.apollographql.com/docs/react/api/react/hooks/#usesubscription

const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned = () => {
    const { loading, error, data } = useSubscription(subscriptionPetReturned);
    console.log("🔥🚀 ===> usePetReturned ===> error", error);

    const pet = data ? data.petReturned.pet : null;

    return { loading, error, pet };
};
