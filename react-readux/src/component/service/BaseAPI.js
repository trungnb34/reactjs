import axios from "axios";

const API = "http://localhost:8000/api/";

function giaiMa() {
    const accessToken = localStorage['access_token'];
    var token = "";
    if(accessToken != undefined) {
        const length = accessToken.length;
        for(var i = 0; i < length; i++) {
            token += String.fromCharCode(accessToken.charCodeAt(i) - 1);
        }
        return token;
    }
}

const BaseAPI = axios.create(
    {
        baseURL: API,
        headers: {
            'authorization' : 'Bearer ' + giaiMa(),
            'X-Custom-Header': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : 'Access-Control-*',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    }
);
export default BaseAPI;