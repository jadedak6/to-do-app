import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCJM3EoyZeE4PztVrvs8PcVG6RABmbmYYI',
  authDomain: 'to-do-app-397e0.firebaseapp.com',
  databaseURL: 'https://to-do-app-397e0-default-rtdb.firebaseio.com',
  projectId: 'to-do-app-397e0',
  storageBucket: 'to-do-app-397e0.appspot.com',
  messagingSenderId: '68488936990',
  appId: '1:68488936990:web:b285384ff6ffc51bed780f',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
