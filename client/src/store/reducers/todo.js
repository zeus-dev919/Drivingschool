import {
  GET_TESTS,
  TEST_LOADING
} from '../actions/constants'

const initialState = {
  tests: [],
  loading: false
}

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TESTS:
      return {
        ...state,
        tests: payload,
        loading: false
      }
    case TEST_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default todoReducer

