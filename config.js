import * as firebase from "firebase"

require ("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyC_h7pl0jYQh6yydn6ouA0PIz4GEJnJWfU",
    authDomain: "wili-d988d.firebaseapp.com",
    projectId: "wili-d988d",
    storageBucket: "wili-d988d.appspot.com",
    messagingSenderId: "432430800848",
    appId: "1:432430800848:web:4b2467e8bfcf8e9a4423d5"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase.firestore() ;