import {
  GET_PROBLEM,
  ADD_PROBLEM,
  UPDATE_PROBLEM,
  UPDATE_PROBLEMS,
  GET_PROBLEMS,
  DELETE_PROBLEM,
  INITIALIZE_PROBLEMS,
  PROBLEM_LOADING
} from "../actions/constants"

const initialState = {
  problems: [],
  problem: {},
  loading: false,
}

const problemReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case PROBLEM_LOADING:
      return {
        ...state,
        loading: true
      }
    case INITIALIZE_PROBLEMS:
      return initialState
    case GET_PROBLEMS:
      return {
        ...state,
        problems: payload,
        loading: false
      }
    case UPDATE_PROBLEM:
      const { id, property, value } = payload
      const newProblem = [...state.problems]
      newProblem[id-1][property] = value
      return {
        ...state,
        problems: newProblem
      }
    case ADD_PROBLEM:
      return {
        ...state,
        problems: [...state.problems, payload],
        loading: false
      }
    // case UPDATE_PROBLEMS:
    //   const id = payload.id
    //   const newProblems = [...state.problems]
    //   newProblems[id - 1] = { ...state.problem }

    //   return {
    //     ...state,
    //     problems: newProblems,
    //     loading: false
    //   }
    case GET_PROBLEM:
      return {
        ...state,
        problem: [...state.problems][payload.id - 1],
        loading: false
      }
    case DELETE_PROBLEM:
      console.log(payload)
      return {
        ...state,
        problems: state.problems.filter(problem => problem.id !== payload.id)
      }
    default:
      return state
  }
}

export default problemReducer