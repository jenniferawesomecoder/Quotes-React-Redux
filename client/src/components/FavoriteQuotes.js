import React from 'react'
import { bindActionCreators } from 'redux'
import { Container, Card, Button, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'

import { removeQuoteFromListFavorites } from '../actions/listActions'
import QuoteUpvote from '../components/QuoteUpvote'

// functional stateless component
const FavoriteQuotes = (props) => {
    if (props.currentList) {
      return (
        <Container>
          <Header as='h2'>
          <Icon name='list alternate' />
          <Header.Content>
          You are in Your "{props.currentList.title}" List
          </Header.Content>
          </Header>
            <Card.Group>
            {props.currentList.favorites.map((quote, index) =>
            <Card key={quote.id}>
              <Card.Content>
              <Card.Header>{quote.author}</Card.Header>

              <Card.Description> {quote.body} </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Button.Group>
              <Button onClick={() => props.removeQuoteFromListFavorites(quote, props.currentList)}>
              Remove Quote
              </Button>
              <Button.Or />
              <QuoteUpvote />
              </Button.Group>
              </Card.Content>
            </Card>
            )}
            </Card.Group>
        </Container>
      )
    }

    return(
     <div>You must select a list first!</div>
    )

  }

const mapStateToProps = (state) => {
  return {
  currentList: state.list.currentList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
removeQuoteFromListFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteQuotes)
