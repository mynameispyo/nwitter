import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";            
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB7d0DcwmhNqqrGCZWLH87ehgPqzYu2FDc",
    authDomain: "nwitter-6c7c4.firebaseapp.com",
    databaseURL: "https://nwitter-6c7c4.firebaseio.com",
    projectId: "nwitter-6c7c4",
    storageBucket: "nwitter-6c7c4.appspot.com",
    messagingSenderId: "53659951326",
    appId: "1:53659951326:web:4018bcb214f32e256ee24f",
    measurementId: "G-HK87WGVS0G"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();