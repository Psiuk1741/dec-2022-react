import axios from "axios";


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
});

let axiosInstanceComm = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
});

const saveComm = (comm) => axiosInstanceComm.post('', {data:comm})

const saveUser = (user) => axiosInstance.post('', {data:user})

export {saveUser, saveComm}