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
import {ReactReduxFirebaseProvider,reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import { reduxFirestore,getFirestore,createFirestoreInstance  } from 'redux-firestore'
import fbConfig from './config/fbConfig'

const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig,firebase),
  )
)

const rrfProps = {
  firebase,
  userProfile: 'users',
  useFirestoreForProfile: true,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
