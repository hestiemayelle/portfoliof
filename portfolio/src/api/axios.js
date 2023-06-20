import axios from "axios"

const client = axios.create({
    baseURL: "https://hestie-portfolio-backend.onrender.com"
});

export default client;

