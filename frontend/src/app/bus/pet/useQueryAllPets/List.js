// Core
import React from 'react';

// Hooks
import { useQueryAllPets } from './hook';

export const List = () => {
	const { loading, error, pets } = useQueryAllPets();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>We have a problem: {error.message}</p>;
	}

	const petsJSX = pets.map(({ id, name, weight }) => (
		<li key={id}>
			<p>Name: {name}</p>
			<p>Weight: {weight}</p>
		</li>
	));

	return (
		<div>
			<h1>Pets</h1>
			<ul>
				{petsJSX}
			</ul>
		</div>
	);
};
