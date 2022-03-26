import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhPdWUyWJ8vI0XzjfYr0da5OjFfselFzg",
  authDomain: "msufp-meet-breakout.firebaseapp.com",
  projectId: "msufp-meet-breakout",
  storageBucket: "msufp-meet-breakout.appspot.com",
  messagingSenderId: "24209274795",
  appId: "1:24209274795:web:68afc7ab8e874bb681c4ee",
  measurementId: "G-K2PRKYS68E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();
export default app;