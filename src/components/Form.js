import React from 'react';

export default function Button(props) {
	const style = {
		padding: '50px',
		margin: '15px'
	}
	return (<form style={style}>
		<label>
			Name:
			<input type='text' name='name' data-aid='USER_NAME'/>
			</label>
		<input type='submit' value='Submit' data-aid='SUBMIT_FORM'/>
	</form>);
}