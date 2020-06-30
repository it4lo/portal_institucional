import axios from 'axios';
import { getToken, logout } from '../utils/auth';

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.request.use(request => requestHandler(request));
api.interceptors.response.use(response => successHandler(response), error => errorHandler(error))

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
    false : true
}

const requestHandler = (request) => {
  if (isHandlerEnabled(request) && getToken() != null) {
    request.headers['Authorization'] = getToken();
  }

  return request
}

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
     if(error.response.status === 401){
        logout(); 
     }
  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {

  }
  return response
}



export default api;