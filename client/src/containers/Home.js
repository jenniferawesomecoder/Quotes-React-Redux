import React from 'react'
import { Container, Message, Button } from 'semantic-ui-react'
import  QuoteOfTheDay  from '../components/QuoteOfTheDay'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

// functional stateless component

const Home = () => {
  return (
    <Container>
      <Header/>

      <Message floating>
        <QuoteOfTheDay />
      </Message>

      <Button fluid as={Link} to="/lists" color='violet' > View All Lists!</Button>
    </Container>
  )
}

export default Home
