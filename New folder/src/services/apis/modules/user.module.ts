import { UserCreate } from "@/interfaces/user.interface";
import axios from 'axios';

export const userModule = {
    register: async function(newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users`, newUser)
    },
    login: async function(data: {
        loginId: string,
        password: string
    }) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users/login`, data)
    },

    loginGoogle: async function(data: {
        token: string
    }) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users/google-login`, data)
    },
    getData: async function() {
        return await axios.get(`${import.meta.env.VITE_API_SERVER}/users`)
    }
}