import { GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDF5rlqnxcJTHqFk_nUaSV6MHfYoifKEO0",
  authDomain: "devter-72cc4.firebaseapp.com",
  projectId: "devter-72cc4",
  storageBucket: "devter-72cc4.appspot.com",
  messagingSenderId: "51653495167",
  appId: "1:51653495167:web:ff0be1cf1dfa0a5a81724a",
};

const app = initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (data) => {
  const { user } = data;
  const { displayName, photoURL, email } = user;
  console.log(data);
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return getAuth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();

  return signInWithPopup(auth, provider).then(mapUserFromFirebaseAuthToUser);
};
