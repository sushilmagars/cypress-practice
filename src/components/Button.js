import React from 'react';

export default function Button(props) {
	const style = {
		padding: '10px',
		margin: '15px'
	}
	return (<button style={ style } data-aid='FORM_BUTTON'>Click here</button>);
}