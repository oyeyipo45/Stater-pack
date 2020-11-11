import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPosts } from './../actions/postAction';
import Loader from './Loader';
import Message from './Message';

const Body = () => {
	const dispatch = useDispatch();

	const postsList = useSelector((state) => state.postsList);
	const { posts, loading, error } = postsList;
	console.log(posts);

	useEffect(() => {
		dispatch(listPosts());
	}, [dispatch]);
	return (
		<div className='main-body'>
			{/* <div className='text-center'>
				{users.map((user) => (
					<div key={user._id}>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				))}
			</div> */}
			<div className="loading-container">{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}</div>

			<div>
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
			</div>
		</div>
	);
};

export default Body;
