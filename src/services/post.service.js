import {axiosService} from "./axios.service";
import {urls} from "../Urls/urls";

const postService = {
    getById:(id) => axiosService.get(urls.posts.getByid(id))
}

export {postService}