import fetch from 'isomorphic-fetch' 

   const API_BASE_URL = 'https://favqs.com/api';
   const API_KEY = process.env.REACT_APP_API_KEY;
     
   const requestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token="${API_KEY}"`
    }
  };
  export const fetchQuoteOfTheDay = () => {
    return dispatch => {
      fetch (`${API_BASE_URL}/qotd`, requestConfig)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type:'FETCH_QUOTE_OF_THE_DAY',
            payload: data.quote
          })
        })
    }
  }

  

  export default function fetchQuotes() {
    return (dispatch) => {
      fetch(`${API_BASE_URL}/quotes`, requestConfig)
      .then(response => response.json())
      .then(data => dispatch(getQuotesAsync(data.quotes)));
    }
  }
  function getQuotesAsync(quotes){
    return {
      type: 'FETCH_QUOTES',
      payload: quotes
    };
  }
  export const selectQuote = (quote) => {
    return dispatch => {
      dispatch({
        type: 'QUOTE_SELECTED',
        payload: quote
      })
    }
  }