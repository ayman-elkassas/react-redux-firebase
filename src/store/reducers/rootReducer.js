import {combineReducers} from 'redux'

//todo:App reducers
import authReducer from "./authReducer";
import projectReducer from './projectReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

//todo:using redux-thunk can halts the dispatch, perform async request,

const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer