import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get(`/api/users`);

			setUsers(data);
		};

		fetchUsers();
	}, []);
	return (
		<div className='main-body'>
			<div className='text-center'>
				{users.map((user) => (
					<div key={user._id}>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Body;
