import React from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react'
import { createList } from '../actions/listActions'
import ListForm from './ListForm';

// functional stateless component
const ListCreate = (props) => {

	const onSubmit = formValues => {
		props.createList(formValues);
	}

	return (
		<Container>
			<Header>Create a List</Header>
			<ListForm onSubmit={onSubmit} />
		</Container>
	);
}

export default connect(null, { createList })(ListCreate);
