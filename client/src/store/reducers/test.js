import {
  INSERT_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from "../actions/constants"

const testReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case INSERT_QUESTION:
      const {id, property, value} = action.payload;
      const index = id - 1;
      const newQuestion = [...state.questions];
      const data = {
         [property] : value
      }
      if(newQuestion[index] === undefined){
        newQuestion.push(data)
      }
      else(
        newQuestion[index][property] = value
      )
      return {
        ...state,
        questions: newQuestion
      }
    case UPDATE_QUESTION:
    //  const {id, property, value} = action.payload;
    //  const index = state.questions.findIndex(question => question.id === id);
      const newArray = [...state.questions];
      newArray[index][property] = value;
      return {
        ...state,
        questions: newArray
      }
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.payload)
      }
    default:
      return state
  }
}

export default testReducer