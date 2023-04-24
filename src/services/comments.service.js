import {axiosService} from "./axios.service";
import {urls} from "../Urls/urls";

const commentsService = {
    getAll:() => axiosService.get(urls.comments)
}

export {commentsService}