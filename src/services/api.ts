import axios from "axios";

export const api = axios.create({
    baseURL: "http://172.28.208.1:3333"
})


