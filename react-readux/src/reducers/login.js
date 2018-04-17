import axios from "axios";

const LoginReducer = (state = initalDefault, action) => {
    switch(action.type) {
        case 'login':
            const data = {
                client_id: 2,
                client_secret: "4e6kmkuZv5TxaVyS1g7MWRQdUEa4T0ceI7XsK99W",
                username: action.email,
                password: action.password,
                grant_type : "password"
            }
            axios.post('http://localhost:8000/oauth/token', data)
                .then(response => {
                    //access_token//expires_in//refresh_token//token_type
                    const responseData = response.data;
                    const now = Date.now();
                    responseData.expires_in += now;
                    localStorage.setItem('access_token', responseData.access_token);
                    localStorage.setItem('expires_in', responseData.expires_in);
                    localStorage.setItem('refresh_token', responseData.refresh_token);
                    localStorage.setItem('token_type', responseData.token_type);
                })
                .catch (response => {
            });

    }
}