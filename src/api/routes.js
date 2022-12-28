import {API} from "./api";


export const getRegister = (body) => {
    return API.register(body);
}