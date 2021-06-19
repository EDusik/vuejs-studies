import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3ftp4tykr0wBn87W6KqqTK8qR4Ezi91o",
  authDomain: "udemy-vue-firebase-sites-b7175.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-b7175",
  storageBucket: "udemy-vue-firebase-sites-b7175.appspot.com",
  messagingSenderId: "697043142361",
  appId: "1:697043142361:web:7b550e9c67702ead1460c8"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export 
export { projectFirestore, timestamp }
