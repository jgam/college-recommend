import axios from 'axios';
//free_c2f12782a8449751c2c15f5891

const API_KEY = 'free_c2f12782a8449751c2c15f5891';

const api = axios.create({
  baseURL: 'https://api.collegeai.com/v1/api/college-list?api_key=' + API_KEY,
});

const getColleges = (params) => api.get(params);

export default getColleges;
