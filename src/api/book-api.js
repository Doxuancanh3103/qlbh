import {getApi} from "./customApi";
import api from "./index";


export function searchBook (params) {
  return getApi(api.getBookByName, params)
}
