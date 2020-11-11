import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import {getUserDetails, updateUserProfile } from './../actions/userAction';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const RegisterScreen = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
    const { user, loading, error } = userDetails;
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	
	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
            if(!user.name || !user.name) {
                dispatch({type: USER_UPDATE_PROFILE_RESET})
               dispatch(getUserDetails('profile')) 
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
	}, [dispatch, history, userInfo, user]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('password do not match');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
		}
	};
	return (
		<div>
			<div className='customer-signin'>
				<div className='customer-signin-header'>
					<h3 className='customer-signin-heading'>User Profile</h3>

					<img
						src='/assets/icons/close.svg'
						alt=''
						className='customer-signin-close'
					/>
				</div>
				<span>
                {success && <Message variant='success'>Profile Updated</Message>}
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
						<button className='customer-signin-btn'>Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterScreen;
