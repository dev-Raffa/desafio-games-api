import { getDatabase, ref, set, get, child } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { InitializeApp } from '../../config';
import { UserDto } from '../model';

type dataGetUserName = {
  name: string;
  email: string;
};

export function createUser(id: string, email: string, name: string) {
  set(ref(getDatabase(), `users/${id}`), {
    name: name,
    email: email
  })
    .then(() => {
      return 'created user with success!';
    })
    .catch((e) => {
      return e.message;
    });
}

export async function getUserName(id: string) {
  const dbRef = ref(getDatabase());
  const data: dataGetUserName = await get(child(dbRef, `users/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.toJSON();
      } else {
        return 'Name not found';
      }
    })
    .catch((e) => {
      return e.message;
    });

  return data.name;
}
export async function RegisterNewUser({ name, email, password }: UserDto) {
  InitializeApp();
  const resp = await createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      createUser(userCredential.user.uid, email, name);
      const user = {
        name: name,
        userId: userCredential.user.uid
      };
      return { user: user, message: 'Success' };
    })
    .catch((error) => {
      return error.message;
    });
  return resp;
}

export async function userSignin(email: string, password: string) {
  InitializeApp();
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

export async function signout() {
  InitializeApp();
  signOut(getAuth())
    .then(() => {
      'Sign-out successfull';
    })
    .catch((error) => {
      return error;
    });
}
