import React, { useState } from 'react';

export default function Button(props) {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const style = {
		padding: '50px',
		margin: '15px'
	}

	const handleNameChange = (event) => {
		setUsername(event.target.value);
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	return (<>
		<form 
			class='registration-form'
			style={style}>
			<input
				type='text'
				name='username'
				value={username}
				data-aid='USER_NAME'
				onChange={handleNameChange}
			/>
			<input
				type='email'
				name='email'
				value={email}
				data-aid='USER_EMAIL'
				onChange={handleEmailChange}
				required
			/>
			<input
				type='submit'
				value='Submit'
				data-aid='SUBMIT_FORM'
			/>
		</form>
	</>);
}