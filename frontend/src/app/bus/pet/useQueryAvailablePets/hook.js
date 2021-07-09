import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
	return useQuery(queryAvailablePets);

	// return useQuery(queryAvailablePets, {
	// 	// прозвоидт повторный збор данных
	// 	pollInterval: 10000,
	// 	// ! dont work
	// 	// variables: { type },
	// variables: { breed }
	// 	// skip: !type
	// });
};

// https://www.apollographql.com/docs/react/data/queries/#updating-cached-query-results
// https://github.com/apollographql/apollo-client/blob/master/src/core/networkStatus.ts