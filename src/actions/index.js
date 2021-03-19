import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_ATTEMPT = 'FETCH_SMURFS_ATTEMPT'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const fetchSmurfsAttempt = () => ({
  type: FETCH_SMURFS_ATTEMPT
})

export const fetchSmurfsSuccess = (smurfs) => ({
  type: FETCH_SMURFS_SUCCESS,
  payload: smurfs
})

export const fetchSmurfsFailure = (error) => ({
  type: FETCH_SMURFS_FAILURE,
  payload: error
})

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchSmurfsAttempt())

  axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch(fetchSmurfsSuccess(res.data))
    })
    .catch(err => {
      dispatch(fetchSmurfsFailure(JSON.stringify(err)))
    })
}

export const SET_ERROR = 'SET_ERROR'
export const setError = (message) => ({
  type: SET_ERROR,
  payload: message
})

export const ADD_SMURF = 'ADD_SMURF'
export const addSmurf = (smurf) => ({
  type: ADD_SMURF,
  payload: smurf
})