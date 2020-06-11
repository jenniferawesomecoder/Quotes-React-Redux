import React from 'react'
import AllQuotes from '../components/AllQuotes';
import Header from '../components/Header'
import { Divider, Container } from 'semantic-ui-react'

// functional stateless component
const QuotesContainer = (props) => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header />
      <Divider />
      <AllQuotes />
    </Container>
  );
}

export default QuotesContainer
