import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import { register } from './../actions/userAction';

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('password do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<div>
			<div className='customer-signin'>
				<div className='customer-signin-header'>
					<h3 className='customer-signin-heading'>Log In</h3>

					<img
						src='/assets/icons/close.svg'
						alt=''
						className='customer-signin-close'
					/>
				</div>
				<span>
					{message && <Message variant='danger'>{message}</Message>}
					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}
				</span>
				<form
					action=''
					onSubmit={submitHandler}
					className='customer-signin-form'
				>
					<div className='customer-signin-form-group'>
						<input
							type='name'
							value={name}
							className='customer-signin-form-input'
							placeholder='Name'
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
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
						<input
							type='password'
							value={confirmPassword}
							className='customer-signin-form-input'
							placeholder='Confirm Password'
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<div className='customer-signin-form-group'>
						<button className='customer-signin-btn'>Register</button>
					</div>

					<div className='newUser'>
						Have an account ?{' '}
						<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
							Login
						</Link>{' '}
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterScreen;
