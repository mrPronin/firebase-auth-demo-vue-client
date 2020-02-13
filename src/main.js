import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyA8yEspv6RGjBEt_-DlCw1R8u7FYslwGyk",
  authDomain: "auth-test-9639e.firebaseapp.com",
  databaseURL: "https://auth-test-9639e.firebaseio.com",
  projectId: "auth-test-9639e",
  storageBucket: "auth-test-9639e.appspot.com",
  messagingSenderId: "239539917435",
  appId: "1:239539917435:web:e7a1876d515f7fc61288de"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
