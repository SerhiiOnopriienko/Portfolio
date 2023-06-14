import axios from 'axios';

const potterApi = axios.create({
    baseURL: 'https://hp-api.onrender.com/api',
});

export const getCharacters = async function(){
    const { data } = await potterApi.get('/characters');
    return data;
}