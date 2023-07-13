import { getDatabase, ref, set, get, child } from 'firebase/database';

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
