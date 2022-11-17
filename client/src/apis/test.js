import axios from '../utils/axios'

const saveTest = async (questions) => {

  let formData = new FormData()
  formData.append('total', questions.length)

  for (let i = 0; i < questions.length; i++) {
    formData.append(
      `id${i}`, questions[i].id
    )
    formData.append(
      `title${i}`, questions[i].title
    )
    formData.append(
      `image${i}`, questions[i].image
    )
    formData.append(
      `answer${i}`, questions[i].answer
    )
    formData.append(
      `choices${i}`, questions[i].choices
    )
    formData.append(
      `killertest${i}`, questions[i].killertest
    )
    formData.append(
      `gemela${i}`, questions[i].gemela
    )
    formData.append(
      `newpregunta${i}`, questions[i].newpregunta
    )
    formData.append(
      `tema${i}`, questions[i].tema
    )
    formData.append(
      `category${i}`, questions[i].category
    )
    formData.append(
      `video${i}`, questions[i].video
    )
    formData.append(
      `difficulty${i}`, questions[i].difficulty
    )
  }

  try {
    const result = await axios.post('api/question/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return result

  } catch (error) {
    return error
  }
}

const read = async () => {
  const data = await axios.get('api/question/read');
  return data.data
}

const deleteTest = async (id) => {
  const data = await axios.post(`api/question/deleteTest/${id}`);
  console.log(data.data)
  return data.data
}

const readTest = async (id) => {
  const data = await axios.get(`api/question/read/${id}`)
  console.log(data)
}

export {
  saveTest,
  read,
  deleteTest,
  readTest,
}