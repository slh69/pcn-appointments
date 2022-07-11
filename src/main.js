import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


firebase.initializeApp({    
    apiKey: "AIzaSyBp3wxEV2-Cbf03wgk-ZmoY28i8AUvrc_Q",
    authDomain: "pcnappointment.firebaseapp.com",
    projectId: "pcnappointment",
    storageBucket: "pcnappointment.appspot.com",
    messagingSenderId: "550273825951",
    appId: "1:550273825951:web:85642a3467e655bd7976aa"
})

export const db = firebase.firestore();

createApp(App).mount('#app')
