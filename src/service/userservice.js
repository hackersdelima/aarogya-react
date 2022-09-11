import { USER_INFO_STORAGE_KEY } from "../components/constants"

export let getBearerHeaderValue = () =>{
    let userInfo = localStorage.getItem(USER_INFO_STORAGE_KEY);
    return 'Bearer ' + JSON.parse(userInfo).jwt;
}

