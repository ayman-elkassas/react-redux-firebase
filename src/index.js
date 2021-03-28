import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'

//todo:make redux store
import {applyMiddleware, createStore,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//todo:Firebase
import firebase from 'firebase/app'
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase'
import { reduxFirestore,getFirestore,createFirestoreInstance  } from 'redux-firestore'
import fbConfig from './config/fbConfig'

const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
  )
)

//* provider config => ReactReduxFirebaseProvider
const rrfProps = {
  firebase,
  userProfile: "users",
  useFirestoreForProfile: true,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthIsReady:true
};

firebase.auth().onAuthStateChanged((user)=>{
  // if (user) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  reportWebVitals();
  // }
})




