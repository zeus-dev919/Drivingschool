import { readTest } from "../apis/test"

import {
  GET_PROBLEM,
  ADD_PROBLEM,
  UPDATE_PROBLEM,
  GET_PROBLEMS,
  DELETE_PROBLEM,
  INITIALIZE_PROBLEMS,
  PROBLEM_LOADING
} from "../store/actions/constants"

//Add Problem
const addProblem = problemData => async dispatch => {
  await dispatch({ type: ADD_PROBLEM, payload: problemData })
}

const getProblem = id => async dispatch => {
  const data = {
    id: id
  }
  await dispatch({ type: GET_PROBLEM, payload: data })
}

const updateProblem = data => async dispatch => {
  try{
    await dispatch({type: UPDATE_PROBLEM, payload: data})
  }
  catch(error){
    return error
  }
}

const getProblems = (id) => async dispatch => {
  dispatch({ type: PROBLEM_LOADING })
  const problems = await readTest(id)
  dispatch({ type: GET_PROBLEMS, payload: problems })
}

const deleteProblem = id => async dispatch => {
  const data = {
    id: id
  }
  dispatch({ type: DELETE_PROBLEM, payload: data })
}

const initializeProblems = () => async dispatch => {
  dispatch({ type: INITIALIZE_PROBLEMS })
}

export {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  initializeProblems,
}
