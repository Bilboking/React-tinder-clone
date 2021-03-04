import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bk-tinder-clone-backend.herokuapp.com/'
});

export default instance 