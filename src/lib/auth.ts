import { writable } from 'svelte/store';
import { auth, googleProvider } from './firebase';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { browser } from '$app/environment';

// Create auth store
export const user = writable<User | null>(null);
export const loading = writable(true);

// Initialize auth state listener
if (browser) {
  onAuthStateChanged(auth, (currentUser) => {
    user.set(currentUser);
    loading.set(false);
  });
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
}

// Sign out
export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
} 