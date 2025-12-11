// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://www.timewatchindia.com/api"
    // baseURL: "http://72.60.202.56:3001/api"
    // baseURL: "http://localhost:3001/api"
}); 

export default axiosInstance;
