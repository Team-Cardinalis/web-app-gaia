import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnblCLxZ2Pqy8TrzuZeSG5p_1VDM5gwSY",
  authDomain: "web-app-gaia.firebaseapp.com",
  projectId: "web-app-gaia",
  storageBucket: "web-app-gaia.appspot.com",
  messagingSenderId: "479023709315",
  appId: "1:479023709315:web:gaia-app"
};

// Initialize Firebase only if no apps exist
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider(); 