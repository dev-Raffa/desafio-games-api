import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { InitializeApp } from '../config';
import { getUserName } from '../db/crud';

InitializeApp();

export async function userSignin(email: string, password: string) {
  const resp = await signInWithEmailAndPassword(getAuth(), email, password)
    .then(async (userCredential) => {
      const name = await getUserName(userCredential.user.uid);
      return {
        result: 'Success',
        user: { name: name, userId: userCredential.user.uid, isLogged: true }
      };
    })
    .catch((error) => {
      return { result: error.message };
    });
  return resp;
}
