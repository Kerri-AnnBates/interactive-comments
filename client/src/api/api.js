import axios from './axios';

export const getAllComments = () => {
    return axios.get("/comments").then(data => {
        return data;
    }).catch(err => err);
}