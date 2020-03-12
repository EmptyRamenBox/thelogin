import Vue from "vue";

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyBSSsNMMNvxBJle_CmeWCo4Y528UrJfVFs",
  authDomain: "super-awesome-application-787b.firebaseapp.com",
  databaseURL: "https://super-awesome-application-787b.firebaseio.com",
  projectId: "super-awesome-application-787b",
  storageBucket: "super-awesome-application-787b.appspot.com",
  messagingSenderId: "1045042367299",
  appId: "1:1045042367299:web:8d9b72afc27e18b04c3df6"
}

firebase.initializeApp(firebaseConfig)

// initialize FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebaseui.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui


