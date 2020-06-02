import axios from 'axios';

//set APIs for backend

const baseurl = 'http://localhost:5000/api/auth';
const config = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};
const backendAPI = axios.create({
  baseURL: baseurl,
});

export const postLogin = (params) =>
  backendAPI.post('/login', params.loginData, config);

export const postSignup = (params) =>
  backendAPI.post('/register', params.SignupData, config);

export const getLoginInfo = function (params) {
  //here set new config
  const newConfig = config;
  newConfig.headers['x-access-token'] = params.token;
  console.log('in get login info');
  console.log(newConfig);
  return backendAPI.get('/check', newConfig);
};
