import ApiRequest from './ApiRequest';
import axios from 'axios'

export default class ApiGet extends ApiRequest {
    constructor(uri, parameters) {
        super();
        request.body = JSON.stringify(parameters);
        console.warn("teste");
        axios.get(`${API_URL}people/`)
            .then(function (response) {
                console.warn(response)
                return response.json();
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.warn('reqerror: ', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.warn('Error', error.message);
                }
                console.warn('Config: ', error.config);
            });
            
    }
}