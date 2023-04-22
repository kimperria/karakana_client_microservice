import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants';


const registerUser = (email, username, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {email, username, password},
    });

    try {
        const { userRegistrationData } = await Axios.post('/api/v1/auth/register', {
            email,
            username,
            password
        });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: userRegistrationData});
        // Set user information as a cookie
        Cookie.set('userInformation', JSON.stringify(userRegistrationData));
    }catch (error){
        dispatch({ type: USER_REGISTER_FAIL, payload: error})
    }
};


export { registerUser };