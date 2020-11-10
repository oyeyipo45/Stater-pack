import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get(`/api/users`);

			setUsers(data);
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(`/api/posts`);
			console.log(data);
			setPosts(data);
		};

		fetchPosts();
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

			<>
				{posts.map((post) => (
					<div>
						<React.Fragment key={post._id}>
						<p>{post.location}</p>
						
						<p></p>
						<p></p>
					</React.Fragment>
					<div>
					{post.jobRequirements.requirementList.map((job) => (
						<div key={job._id}>
							<p>{job}</p>
						</div>
					))}{' '}
				</div>
					</div>
					
				))}
			</>
		</div>
	);
};

export default Body;
