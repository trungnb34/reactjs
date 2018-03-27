import axios from "axios";

const API = "http://localhost:8000/api/"

const BaseAPI = axios.create(
    {
        baseURL: API,
        timeout: 1000,
        headers: {
            'X-Custom-Header': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : 'Access-Control-*',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
        }
    }
);
export default BaseAPI;