import axios from 'axios'; // Componente baixado para utilizar do metodo baseURL

const api = axios.create({
    baseURL: 'http://localhost:3333/',
});

export default api;