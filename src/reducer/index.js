import { combineReducers } from 'redux';
import FirebaseReducer from './FirebaseReducer';
import MissionReducer from './MissionReducer';

export default combineReducers({
    FirebaseReducer: FirebaseReducer,
    MissionReducer: MissionReducer
});