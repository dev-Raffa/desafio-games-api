import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserDto } from '../model/user.dto';
import { InitializeApp } from '../config';
import { createUser } from '../db/crud';

export function RegisterNewUser({ name, email, password }: UserDto) {
  InitializeApp();
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      createUser(userCredential.user.uid, email, name);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
