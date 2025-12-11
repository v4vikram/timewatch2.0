// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://www.timewatchindia.com/api/"
    // baseURL: "http://72.60.202.56:3001/api"
    // baseURL: "http://localhost:3001/api"
    // baseURL: "https://timewatch-dashboard-bk-196626947975.asia-southeast1.run.app/api"
  // baseURL: "https://timewatch-dashboard-bk-311005204045.europe-west1.run.app/api",
  // timeout: 10000,
}); 

export default axiosInstance;
