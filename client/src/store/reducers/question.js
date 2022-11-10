import {
  INSERT_QUESTION_ANSWER,
  INSERT_QUESTION_CATEGORY,
  INSERT_QUESTION_CHOICES,
  INSERT_QUESTION_DIFFICULTY,
  INSERT_QUESTION_IMAGE,
  INSERT_QUESTION_TEMA,
  INSERT_QUESTION_TITLE,
  INSERT_QUESTION_VIDEO,
} from "../actions/constants"

const question = {
  title: '',
  image: null,
  video: null,
  choices: [],
  answer: '',
  difficulty: '',
  tema: '',
  category: '',
}

const questionReducer = (state = question, action) => {
  switch (action.type) {
    case INSERT_QUESTION_TITLE:
      return {
        ...question,
        title: action.payload
      }
    case INSERT_QUESTION_IMAGE:
      return {
        ...question,
        image: action.payload
      }
    case INSERT_QUESTION_CHOICES:
      return {
        ...question,
        choices: action.payload
      }
    case INSERT_QUESTION_ANSWER:
      return {
        ...question,
        answer: action.payload
      }
    case INSERT_QUESTION_TEMA:
      return {
        ...question,
        tema: action.payload
      }
    case INSERT_QUESTION_CATEGORY:
      return {
        ...question,
        category: action.payload
      }
    case INSERT_QUESTION_DIFFICULTY:
      return {
        ...question,
        difficulty: action.payload
      }
    case INSERT_QUESTION_VIDEO:
      return {
        ...question,
        video: action.payload
      }
    default:
      return question
  }
}

export default questionReducer