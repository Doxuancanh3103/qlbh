import axios from "axios";
import defaultApi from "./baseUrl";


export function getApi (url, params) {
  return  axios.get(defaultApi + url, {
    params: params,
    method: 'GET'
  })
}
