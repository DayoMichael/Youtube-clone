import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
//import GSignInButton from 'vue-google-signin-button';
//import * as firebase from "firebase";


Vue.config.productionTip = false;

/*const firebaseConfig = {
  apiKey: "AIzaSyARZWJUKBcVWFr0avnjDMpgr-ppU3FJPzU",
  authDomain: "clone-c9d07.firebaseapp.com",
  projectId: "clone-c9d07",
  storageBucket: "clone-c9d07.appspot.com",
  messagingSenderId: "247815426609",
  appId: "1:247815426609:web:1ae66ab242ef10ce06fb10",
  measurementId: "G-QM1DYN0HFP"
};



firebase.initializeApp(firebaseConfig);*/

//Vue.use(GSignInButton)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

