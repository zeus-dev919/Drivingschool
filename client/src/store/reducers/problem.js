import { 
  INSERT_PROBLEM_ANSWER,
  INSERT_PROBLEM_CATEGORY,
  INSERT_PROBLEM_CHOICES,
  INSERT_PROBLEM_DIFFICULTY,
  INSERT_PROBLEM_IMAGE,
  INSERT_PROBLEM_TEMA,
  INSERT_PROBLEM_TITLE,
  INSERT_PROBLEM_VIDEO,
} from "../actions/constants"

const initialState = {
  title: '',
  image: null,
  video: null,
  choices: [],
  answer: '',
  difficulty: '',
  tema: '',
  category: '',
}

const problemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_PROBLEM_TITLE:
    return {
      ...initialState,
      title: action.payload
    }
    case INSERT_PROBLEM_IMAGE:
      return {
        ...initialState,
        image: action.payload
      }
    case INSERT_PROBLEM_CHOICES:
      return {
        ...initialState,
        choices: action.payload
      }
    case INSERT_PROBLEM_ANSWER:
      return {
        ...initialState,
        answer: action.payload
      }
    case INSERT_PROBLEM_TEMA:
      return {
        ...initialState,
        tema: action.payload
      }
    case INSERT_PROBLEM_CATEGORY:
      return {
        ...initialState,
        category: action.payload
      }
    case INSERT_PROBLEM_DIFFICULTY:
      return {
        ...initialState,
        difficulty: action.payload
      }
    case INSERT_PROBLEM_VIDEO:
      return {
        ...initialState,
        video: action.payload
      }
    
    default:
      return initialState
  }
} 

export default problemReducer