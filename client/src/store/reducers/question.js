import {
  GET_TESTS,
  GET_QUESTIONS,
  UPDATE_QUESTIONS,
  CLEAR_QUESTIONS,
  CLEAR_TESTS,
  LOADING
} from "../actions/constants"

const initialState = {
  questions: [],
  tests: [],
  loading: false,
}

const questionReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_TESTS:
      return {
        ...state,
        tests: payload,
        loading: false
      }
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false
      }
    case UPDATE_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false,
      }
    case CLEAR_QUESTIONS:
      return {
        ...state,
        questions: []
      }
    case CLEAR_TESTS:
      return {
        ...state,
        tests: []
      }
    default:
      return state
  }
}

export default questionReducer