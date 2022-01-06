import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCV07gBVRa4fvkuIPHbeW-8iGsuCIaiog",
  authDomain: "azad-travel.firebaseapp.com",
  projectId: "azad-travel",
  storageBucket: "azad-travel.appspot.com",
  messagingSenderId: "1006136617843",
  appId: "1:1006136617843:web:1484105da97ffe7e48b306",
};

const app = initializeApp(firebaseConfig);

export default app;

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
// export default firebaseConfig;
