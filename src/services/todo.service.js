import {axiosService} from "./axios.service";
import {urls} from "../Urls/urls";

const todoService = {
    getAll:() => axiosService.get(urls.todos)
}

export {todoService}