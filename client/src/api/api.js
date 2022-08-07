import axios from './axios';

export const getAllComments = () => {
    return axios.get("/comments").then(res => res.data).catch(err => err);
}

export const getCurrentUser = () => {
    return axios.get(`/users/1`).then(res => res.data).catch(err => err);
}