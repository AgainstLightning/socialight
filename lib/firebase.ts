import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
    apiKey: "AIzaSyCwQZb1oKkAbaYACd85RwkVD8hG8bvqzRo",
    authDomain: "socialight-e353d.firebaseapp.com",
    projectId: "socialight-e353d",
    storageBucket: "socialight-e353d.appspot.com",
    messagingSenderId: "1011856272671",
    appId: "1:1011856272671:web:c90897048162efd9f9142a"
}

if (!firebase.getApps.length) {
    firebase.initializeApp(config)
}

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();