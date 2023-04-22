import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "../constants/userConstants";

function userLoginReducer(state = {}, action) {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return { isLoading: true };
        case USER_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { isLoading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};


function userRegisterReducer( state = {}, action){
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { isLoading: true }
        case USER_REGISTER_SUCCESS: 
            return { isLoading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { isLoading: false, error: action.payload };
    }
}


export {
    userLoginReducer,
    userRegisterReducer,
};