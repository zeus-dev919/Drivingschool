import axios from '../utils/axios'

const saveImage = async (data = {}) => {
  const result = await axios.post('api/problem/add', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  console.log('result: ', result)
}

export {
  saveImage,
}