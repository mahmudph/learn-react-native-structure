import xhr from './axios'

import {
  URL_REGISTER,
  URL_LOGIN,
  URL_POSTING,
  URL_UPLOAD
} from '../../Configs/Api'

export const postRegister = (data) => {
  return xhr(URL_REGISTER, 'POST', data)
}



export const postLogin = (data) => {
  return xhr(URL_LOGIN, 'POST', data)
}


export const postPosting = (data) => {
  return xhr(URL_POSTING, 'POST', data)
}

export const postUpload = (data) => {
  return xhr(URL_UPLOAD, 'POST', data)
}