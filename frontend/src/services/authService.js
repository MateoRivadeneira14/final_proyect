import axios from 'axios';

const API_LOGIN = 'http://localhost:3004/api/login';
const API_REGISTER = 'http://localhost:3001/api/register';
const API_VERIFY = 'http://localhost:3003/api/verify';
const API_REQUEST_RESET = 'http://localhost:3006/api/request-reset';
const API_RESET_PASSWORD = 'http://localhost:3007/api/reset-password';

export const loginUser = async (credentials) => {
  return axios.post(API_LOGIN, credentials);
};

export const registerUser = async (data) => {
  return axios.post(API_REGISTER, data);
};

export const verifyCode = async (data) => {
  return axios.post(API_VERIFY, data);
};

export const requestResetCode = async (email) => {
  return axios.post(API_REQUEST_RESET, { email });
};

export const resetPassword = async (data) => {
  return axios.post(API_RESET_PASSWORD, data);
};
