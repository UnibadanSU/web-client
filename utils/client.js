import axios from 'axios'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://uisu-admin.herokuapp.com/api/'
      : 'http://127.0.0.1:8000',
})

export default client
