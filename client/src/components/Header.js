import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

// functional stateless component
const HomeHeader = () => {
	return(
		<div>
			<Header as='h2' icon textAlign='center'>
			<Icon circular color="violet" name="quote left" />

			</Header>

		</div>
	)
}

export default HomeHeader
