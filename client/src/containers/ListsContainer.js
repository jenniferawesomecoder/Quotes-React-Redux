import React from 'react'
import { Container } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import Header from '../components/Header'

// functional stateless component
const ListContainer = () => {
	return (
		<Container>
			<Header/>
			<AllLists/>
		</Container>
	)
}

export default ListContainer
