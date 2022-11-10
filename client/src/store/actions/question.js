import {
  INSERT_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from './constants'

const insertQuestion = (data) => async dispatch => {
  try {
    const res = await dispatch({ type: INSERT_QUESTION, payload: data });
    return res
  }
  catch (error) {
    return error
  }
}

const updateQuestion = (data) => async dispatch => {
  try {
    const res = await dispatch({ type: UPDATE_QUESTION, payload: data });
    return res
  }
  catch (error) {
    return error
  }
}
const deleteQuestion = (data) => async dispatch => {
  try {
    const res = await dispatch({ type: DELETE_QUESTION, payload: data });
    return res
  }
  catch (error) {
    return error
  }
}

export {
  insertQuestion,
  updateQuestion,
  deleteQuestion,
}