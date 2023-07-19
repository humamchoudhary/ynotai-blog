import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUbQnacSwdu5VcKpKy76HDBDwNek3Qg_Y",

  authDomain: "ynotai-blog.firebaseapp.com",

  projectId: "ynotai-blog",

  storageBucket: "ynotai-blog.appspot.com",

  messagingSenderId: "409180246865",

  appId: "1:409180246865:web:67425ed2731ac93d843970",

  measurementId: "G-EQM29LSJV7",
};

// Initialize Firebase

const firebase_app = initializeApp(firebaseConfig);
