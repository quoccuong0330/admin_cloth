import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGryJ_QFdAGXWJFI919qisuQnPCNxjoUQ",
  authDomain: "clothing-store-c9cdd.firebaseapp.com",
  databaseURL: "https://clothing-store-c9cdd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clothing-store-c9cdd",
  storageBucket: "clothing-store-c9cdd.appspot.com",
  messagingSenderId: "608384684286",
  appId: "1:608384684286:web:031cb9c98504be88ef55af"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const firebase = getDatabase(app);
export default firebase

// apiKey: "AIzaSyBhbssBUfaDkc91ln8MTYgCZB0AaglByS4",
// authDomain: "testadmin-2ef38.firebaseapp.com",
// projectId: "clothing-store-c9cdd",
// storageBucket: "clothing-store-c9cdd.appspot.com",
// messagingSenderId: "786123327700",
// appId: "1:786123327700:web:cb8fd71eaf340350549341"