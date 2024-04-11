import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:4200/api', // move to .env
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const axiosClassic = axios.create(options)

export { axiosClassic }