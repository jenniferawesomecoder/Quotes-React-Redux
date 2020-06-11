import React from 'react'
import { connect } from 'react-redux'
import { Item, Label, Button, Popup, Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { addQuoteToListFavorites } from '../actions/listActions'

// functional stateless component
const QuoteDetail = (props) => {

  const renderQuoteDetail = () => {
    if (props.selectedQuote) {
      return (
        <Segment textAlign='center'>
          <Item key={props.selectedQuote.id}>
            <Item.Content>
              <Item.Header as='h3'>{props.selectedQuote.body}</Item.Header>
              <Item.Description>{props.selectedQuote.author}</Item.Description>

              <br />

              <Item.Extra key={props.selectedQuote.id}>
                {props.selectedQuote.tags && props.selectedQuote.tags.map(tag => (
                  <Label tag size='mini' key={tag.id}>{tag}</Label>
                ))}
              </Item.Extra>

              <br />

              <Popup
                trigger={<Button basic color='violet' onClick={() => props.addQuoteToListFavorites(props.selectedQuote, props.currentList)} content="Add to Faves"/>}
                content={`Added!`}
                on='click'
                position='top right'
              />

            </Item.Content>
          </Item>
        </Segment>
      )
    }

    return null
  }

  return (
    <div>{renderQuoteDetail()}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedQuote: state.quotes.selectedQuote,
    currentList: state.list.currentList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addQuoteToListFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetail)
