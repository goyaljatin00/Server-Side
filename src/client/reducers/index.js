import {combineReducers} from 'redux';
import usersReducer from './usersReducers';
import authReducer from './authReducer';
import adminsReducers from './adminsReducers';

export default combineReducers ({
users: usersReducer,
auth: authReducer,
admins: adminsReducers
});
