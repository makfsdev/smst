// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMRaFeph0OrHhM3v4Iy6tYYCb4JDBi1MI',
  authDomain: 'smst-77955.firebaseapp.com',
  projectId: 'smst-77955',
  storageBucket: 'smst-77955.appspot.com',
  messagingSenderId: '199467471741',
  appId: '1:199467471741:web:7ec0298e445633d357f214',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
