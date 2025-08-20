// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://timewatch-dashboard-bk-311005204045.europe-west1.run.app/api",
  // timeout: 10000,
});

export default axiosInstance;
