import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants';

import { LOGIN_USER_ENDPOINT } from '../constants/apiConstants';


const registerUser = (data) => async (dispatch) => {
    // console.log(LOGIN_USER_ENDPOINT, typeof(LOGIN_USER_ENDPOINT))
    
    // console.log('Action', data)
    
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: data,
    });



    try {
        const { data:userRegistrationData } = await Axios.post(LOGIN_USER_ENDPOINT, {
            ...data
        });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: userRegistrationData});
        // Set user information as a cookie
        Cookie.set('userInformation', JSON.stringify(userRegistrationData));
    }catch (error){
        dispatch({ type: USER_REGISTER_FAIL, payload: error})
    }
};


export { registerUser };