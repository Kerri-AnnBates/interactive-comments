import axios from './axios';

export const getAllComments = () => {
    return axios.get("/comments").then(res => res.data).catch(err => err);
}

export const getCurrentUser = (id = 1) => {
    return axios.get(`/users/${id}`).then(res => res.data).catch(err => err);
}