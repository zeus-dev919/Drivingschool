import {
  GET_TESTS,
  TEST_LOADING
} from '../store/actions/constants'

import { read } from '../apis/test'

const getTests = () => async dispatch => {
  dispatch({ type: TEST_LOADING })
  const tests = await read();
  dispatch({type: GET_TESTS, payload: tests})
}

export {
  getTests,
}