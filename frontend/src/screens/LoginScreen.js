import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import { login } from './../actions/userAction';

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo, loading, error } = userLogin;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(login(email, password));
	};

	return (
		<div>
			<div className='customer-signin'>
				<div className='customer-signin-header'>
					<h3 className='customer-signin-heading'>Log In</h3>
					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}

					<img
						src='/assets/icons/close.svg'
						alt=''
						className='customer-signin-close'
					/>
				</div>
				<span>
					{' '}
					<error className='error' />{' '}
				</span>
				<form action='' onSubmit={submitHandler} className='customer-signin-form'>
					<div className='customer-signin-form-group'>
						<input
							type='email'
							value={email}
							className='customer-signin-form-input'
							placeholder='Email Address'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='customer-signin-form-group'>
						<input
							type='password'
							value={password}
							className='customer-signin-form-input'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className='customer-signin-form-group'>
						<button className='customer-signin-btn'>Log In</button>
					</div>
					<Link to='#' className='customer-signin-forgot-link'>
						Forgot your password?
					</Link>

					<div className="newUser">
						New Customer?{' '}
						<Link
                        class="customer-register-link"
							to={redirect ? `/register?redirect=${redirect}` : '/register'}
						>
							Register
						</Link>{' '}
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginScreen;
