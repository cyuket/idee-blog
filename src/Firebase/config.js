import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
// const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyDOG5J0XejlTyZ4I6l94gePuvv8GD1-45s",
    authDomain: "idee-portfolio.firebaseapp.com",
    databaseURL: "https://idee-portfolio.firebaseio.com",
    projectId: "idee-portfolio",
    storageBucket: "idee-portfolio.appspot.com",
    messagingSenderId: "980867829648"
};
firebase.initializeApp(config);

// fse.firestore().settings(setting);

export default firebase;
