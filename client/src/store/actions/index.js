import {
  INSERT_PROBLEM_ANSWER,
  INSERT_PROBLEM_CATEGORY,
  INSERT_PROBLEM_CHOICES,
  INSERT_PROBLEM_DIFFICULTY,
  INSERT_PROBLEM_IMAGE,
  INSERT_PROBLEM_TEMA,
  INSERT_PROBLEM_TITLE,
  INSERT_PROBLEM_VIDEO,
} from './constants'

const insertTitle = (payload) =>async dispatch => {
  try{
    const res = await dispatch({ type: INSERT_PROBLEM_TITLE, payload: payload });
    return res
  }
  catch(error){
    return error
  }
}

export {
  insertTitle,
}