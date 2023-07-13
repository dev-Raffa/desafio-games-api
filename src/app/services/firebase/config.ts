import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD3T3Tfx16A7msoZL_nIEhYIn36E2o6Ud8',
  authDomain: 'desafio-api-game.firebaseapp.com',
  projectId: 'desafio-api-game',
  storageBucket: 'desafio-api-game.appspot.com',
  messagingSenderId: '698033406285',
  appId: '1:698033406285:web:7868935173fdd2ca8e3704',
  databaseURL: 'https://desafio-api-game-default-rtdb.firebaseio.com/'
};

export function InitializeApp() {
  let app: FirebaseApp | null = null;
  app == null ? (app = initializeApp(firebaseConfig)) : '';
}

InitializeApp();
