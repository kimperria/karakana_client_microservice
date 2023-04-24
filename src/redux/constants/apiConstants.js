const MODE = import.meta.env.VITE_APP_MODE;
if(MODE !== 'production'){
    var BASE_URL = import.meta.env.VITE_APP_API_URL;
} else{
    var BASE_URL = 'TBD'
}

// User Endpoints
export const LOGIN_USER_ENDPOINT = `${BASE_URL}api/v1/auth/login/`;