import axios from '../utils/axios'

const saveImage = async (questions) => {

  let formData = new FormData()
  for(let i=0; i< questions.length; i++){
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
      `testkiller${i}`, questions[i].killertest ? questions[i].killertest : false
    )
    formData.append(
      `gemela${i}`, questions[i].gemela ? questions[i].gemela : false
    )
    formData.append(
      `newpregunta${i}`, questions[i].newpregunta ? questions[i].newpregunta : false
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
      `difficulty${i}`, questions[i].difficulty ? questions[i].difficulty : 0
    )
  }

  const result = await axios.post('api/problem/add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return result
}

export {
  saveImage,
}