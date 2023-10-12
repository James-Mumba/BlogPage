import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDL9bNc2T7hS2iqGdAwRvuGN5zDL40VIvA",
  authDomain: "blog-page-50944.firebaseapp.com",
  projectId: "blog-page-50944",
  storageBucket: "blog-page-50944.appspot.com",
  messagingSenderId: "698245045082",
  appId: "1:698245045082:web:df202dcf43168f69113163",
  measurementId: "G-EW2TH723N1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
