import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants';

import { REGISTER_USER_ENDPOINT } from '../constants/apiConstants';


const registerUser = (email, username, password) => async (dispatch) => {
    console.log(REGISTER_USER_ENDPOINT, typeof(REGISTER_USER_ENDPOINT))
    
    console.log('Action', email, username, password)
    
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: {email, username, password},
    });



    try {
        const { userRegistrationData } = await Axios.post(REGISTER_USER_ENDPOINT, {
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