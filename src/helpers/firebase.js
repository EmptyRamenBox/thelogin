import Vue from "vue";

import firebase from "firebase/app";
import "firebase/firebase-auth";

import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDIwsEnaYXHV-EW0AHzmiNwascXxzHtVCk",
  authDomain: "loginexample-39db1.firebaseapp.com",
  databaseURL: "https://loginexample-39db1.firebaseio.com",
  projectId: "loginexample-39db1",
  storageBucket: "loginexample-39db1.appspot.com",
  messagingSenderId: "506969437339",
  appId: "1:506969437339:web:a63e997764caf6ac74823e"
};

firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());

Vue.prototype.$firebase = firebase;
Vue.prototype.$firebaseui = ui;
