import axios from 'axios'
import jwt_decode from 'jwt-decode'

const login = (data, callback) => {
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      callback(true, res.data.token)
    })
    .catch((err) => callback(false, err))
}

const getUsername = (token) => {
  const decoded = jwt_decode(token)
  return decoded.user
}

export { login, getUsername }
