import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/users/',
});

const api = {
    getUser: async (user) => {
        try {
            const res = await instance.get(`/${user}`);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    }
}

export default api;