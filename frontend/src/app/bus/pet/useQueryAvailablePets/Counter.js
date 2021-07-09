// Core
import React from 'react';

// Hooks
import { useQueryAvailablePets } from './hook';

export const Counter = () => {
	const { loading, error, data /* ,refetch */ } = useQueryAvailablePets();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>We have a problem: {error.message}</p>;
	}

	return (
		<p>
			AvailablePets:
			{data.availablePets}
		</p>
	);
};

// метод refetch можно повесит на кнопку, подгружает новую порцию данных