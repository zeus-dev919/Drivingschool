import {
  GET_TESTS,
  SET_INDEX,
  TEST_LOADING
} from '../actions/constants'

const initialState = {
  tests: [],
  index: 0,
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
      case SET_INDEX:
        return{
          ...state,
          index: payload
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

