import { getAuth, signOut } from 'firebase/auth';
import { InitializeApp } from '../config';

InitializeApp();

export async function signout() {
  signOut(getAuth())
    .then(() => {
      'Sign-out successfull';
    })
    .catch((error) => {
      return error;
    });
}
