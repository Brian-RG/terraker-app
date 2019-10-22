import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCqvzN6RUPRgeaoMPAznODuYQU13ul4ojg",
    authDomain: "terraker-blogs.firebaseapp.com",
    databaseURL: "https://terraker-blogs.firebaseio.com",
    projectId: "terraker-blogs",
    storageBucket: "terraker-blogs.appspot.com",
    messagingSenderId: "795755721463",
    appId: "1:795755721463:web:818b69b1942b7a288d59f2",
    measurementId: "G-N71ND72200"
};
firebase.initializeApp(config);
export default firebase;