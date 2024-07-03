// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_KvEhlQ5523UI2DB0K3jEITDSDEuxE8",
  authDomain: "uploadingfile-cdfd8.firebaseapp.com",
  projectId: "uploadingfile-cdfd8",
  storageBucket: "uploadingfile-cdfd8.appspot.com",
  messagingSenderId: "198063502537",
  appId: "1:198063502537:web:05a71668a1c3d7156f0918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);