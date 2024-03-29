import axios from 'axios';

const domain = process.env.REACT_APP_ENDPOINT ? process.env.REACT_APP_ENDPOINT : `localhost:8080`;
const protocol = process.env.REACT_APP_PROTOCOL ? `${process.env.REACT_APP_PROTOCOL}:` : window.location.protocol;
const baseUrl = `${protocol}//${domain}/api`;

export default axios.create({
    baseURL: baseUrl
});