import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000/api' })

export const signUp = (formData) => API.post(`/user/sign-up`, formData)