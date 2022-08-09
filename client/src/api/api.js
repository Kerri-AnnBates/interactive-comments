import axios from './axios';

export const getAllComments = () => {
    return axios.get("/comments").then(res => res.data).catch(err => err);
}

export const getCurrentUser = () => {
    return axios.get(`/users/1`).then(res => res.data).catch(err => err);
}

export const getCommentById = (id) => {
    return axios.get(`/comments/${id}`).then(res => res.data).catch(err => err);
}

export const deleteComment = (id) => {
    return axios.delete(`/comments/${id}`).then(res => res).catch(err => err);
}

export const deleteReply = (id) => {
    return axios.delete(`/replies/${id}`).then(res => res).catch(err => err);
}

export const addComment = (comment) => {
    return axios.post("/comments", comment).then(res => res.data).catch(err => err);
}