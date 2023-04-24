import {axiosService} from "./axios.service";
import {urls} from "../Urls/urls";

const albumsService = {
    getAll:() => axiosService.get(urls.albums)
}

export {albumsService}