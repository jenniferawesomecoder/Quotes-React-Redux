import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { Grid, Button, Divider, Card } from 'semantic-ui-react';

import history from '../history';
import { deleteList } from '../actions/listActions';
import { fetchLists }  from '../actions/listActions'
import { setList }  from '../actions/listActions'


class AllLists extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  handleChange(event) {
    this.props.setList(event.target.value)
  }

  onClick = (currentList) => {
    this.props.deleteList(this.props.currentList)
    alert('List deleted!')
    history.push('/')
  };

  render() {
    const mapListsForDropdown = this.props.allLists.map((list, index) => {
      return (
        <option value={list.id} key={list.id} id={list.id}>
          {list.title}
        </option>
      )
    })

    const ListInfo = () => {
      if (this.props.currentList) {
        const chosenlist = this.props.currentList;

        return (
          <div>
            <Card.Group centered>
              <Card fluid>
                <Card.Content>
                  <Card.Header as='h2' textAlign='center'>{chosenlist.title}
                    <Card.Meta content={chosenlist.description} />
                  </Card.Header>

                  <Card.Content extra >
                    <Button.Group basic vertical widths='5'>
                      <Button as={Link} to="/all" basic color='violet'>Add Quotes </Button>
                      <Button as={Link} to="/favorites" basic color='green'>Favorites</Button>
                      <Button onClick={() => this.onClick()} basic color='red'>Delete List</Button>
                    </Button.Group>
                  </Card.Content>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        )
      }
    }

    return (
      <div>
        <Grid centered >
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="ui centered card">
                <select onChange={(e) => this.handleChange(e)}>
                  <option value="">Select a List</option>
                  {mapListsForDropdown}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Divider />

          <Grid.Row>
            <Grid.Column width={8}>
              <div>{ListInfo()}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      allLists: state.list.allLists,
      currentList: state.list.currentList
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteList,
  fetchLists,
  setList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) ( AllLists);
