import axios from "axios";
import {baseURL} from "../Urls/urls";

const axiosService = axios.create({baseURL});

export {axiosService}