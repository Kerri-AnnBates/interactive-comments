import axios from './axios';

export const getAllComments = () => {
    return axios.get("/comments").then(res => res).catch(err => err);
}

export const getCurrentUser = () => {
    return axios.get(`/users/1`).then(res => res).catch(err => err);
}

export const getCommentById = (id) => {
    return axios.get(`/comments/${id}`).then(res => res).catch(err => err);
}

export const getReplyById = (id) => {
    return axios.get(`/replies/${id}`).then(res => res).catch(res => res);
}

export const deleteComment = (id) => {
    return axios.delete(`/comments/${id}`).then(res => res).catch(err => err);
}

export const deleteReply = (id) => {
    return axios.delete(`/replies/${id}`).then(res => res).catch(err => err);
}

export const addComment = (comment) => {
    return axios.post("/comments", comment).then(res => res).catch(err => err);
}

export const addReplyToComment = (reply, commentId) => {
    return axios.post(`/replies/comment/${commentId}`, reply).then(res => res).catch(err => err);
}

export const updateComment = (id, comment) => {
    return axios.put(`/comments/${id}`, comment).then(res => res).catch(err => err);
}

export const updateReply = (id, reply) => {
    return axios.put(`/replies/${id}`, reply).then(res => res).catch(err => err);
}