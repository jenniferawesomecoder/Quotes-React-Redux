import fetch from 'isomorphic-fetch'

export const createList = (formValues) => {
  console.log('C');
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ list: formValues })
  }

  return dispatch => {
    fetch(`https://quotesgalore.herokuapp.com/api/lists`, data)
      .then(response => response.json())
      .then(list => {
        console.log('D');
        dispatch({
              type: 'CREATE_LIST',
              payload: list
            })})
  }

}
  export const fetchLists = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LISTS' })
      return fetch('https://quotesgalore.herokuapp.com/api/lists')
      .then(response => {
        return response.json()
      }).then(lists => {
        return dispatch({ type: 'FETCH_LISTS', payload: lists })
      })
    }
  }

  export const setList = id => {
  console.log(id)
  let data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`https://quotesgalore.herokuapp.com/api/lists/${id}`, data)
    .then(response => {
      return response.json()
    }).then (list => {
      return dispatch({
        type: 'SET_LIST',
        payload: list
      })
    })
  }
}

export const deleteList = list => {
  return dispatch => {
    fetch('https://quotesgalore.herokuapp.com/api/lists/' + list.id, {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => dispatch({ type: 'DELETE_LIST', payload: list }));
    }
};

export const addQuoteToListFavorites = (selectedQuote, list) => {
  let id = list.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quote: selectedQuote })
  }

  return dispatch => {
    fetch (`https://quotesgalore.herokuapp.com/api/lists/${id}/add_to_favorites`, data)
      .then(response => response.json())
      .then(quotes => dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: quotes
      }))
  }
}

export const removeQuoteFromListFavorites = (selectedQuote, list) => {
  let id = list.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quote: selectedQuote })
  }

  return dispatch => {
    fetch(`https://quotesgalore.herokuapp.com/api/lists/${id}/remove_from_favorites`, data)
      .then(response => response.json())
      .then(quotes => dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: quotes
      }))
  }
}
