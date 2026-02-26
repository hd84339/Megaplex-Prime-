import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const loginAdmin = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const getContent = async () => {
    const response = await api.get('/content');
    return response.data;
};

export const updateContent = async (content) => {
    const response = await api.put('/content', content);
    return response.data;
};

export default api;
