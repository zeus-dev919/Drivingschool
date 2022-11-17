import {
  GET_TESTS,
  SET_INDEX,
  TEST_LOADING
} from '../store/actions/constants'

import { read } from '../apis/test'

const getTests = () => async dispatch => {
  dispatch({ type: TEST_LOADING })
  const tests = await read();
  dispatch({type: GET_TESTS, payload: tests})
}

const setIndex = (num) => dispatch => {
  dispatch({type: SET_INDEX, payload: num})
}

export {
  getTests,
  setIndex,
}