import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
	const { loading, error, data } = useQuery(queryAllPets);

	// const pets = data ? data.allPets : null;
	const pets = data?.allPets;

	return { loading, error, pets };
};
