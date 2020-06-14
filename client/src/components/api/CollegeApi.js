import axios from 'axios';

//axios.get('google.com') => .jsonPaser() => <div>google.com</div>...
//free_c2f12782a8449751c2c15f5891

const API_KEY = 'free_c2f12782a8449751c2c15f5891';
const baseurl =
  'https://api.collegeai.com/v1/api/college-list?api_key=' + API_KEY;

const api = axios.create({
  baseURL: baseurl,
});

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

//when creating axios instance, first parameter should be url after the get
export const getColleges = (params) => api.get('', { params, config });
export const getMyColleges = (params) => api.get('', { params });
