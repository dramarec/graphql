import React from 'react';
import { useQueryProfile } from './hook';

export const Profile = () => {
	const { getProfile, loading, error, profile } = useQueryProfile();
	console.log('profile', profile);

	const loadProfile = () => {
		getProfile({
			variables: {
				id: 'C-1'
			}
		});
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>We have a problem: {error.message}</p>;
	}

	return (
		<div>
			<h1>Profile:</h1>
			<button onClick={loadProfile}>Download Profile</button>
			{/* <p>{profile && profile.name}</p> */}
			<p>{profile?.name}</p>
		</div>
	);
};
