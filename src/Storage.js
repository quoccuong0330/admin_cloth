import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";// Your web app's Firebase configuration
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
const storage = getStorage(app);
export default storage