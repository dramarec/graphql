import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryProfile = () => {
  const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById);

  return { getProfile, loading, error, profile: data && data.petById }
};
