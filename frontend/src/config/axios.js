import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ai-chat-backend-qriv.onrender.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export default axiosInstance;