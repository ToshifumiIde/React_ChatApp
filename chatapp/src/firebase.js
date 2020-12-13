import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdyt3l_xYSwnsiFtHFPkx66Bp2t-AlO8k",
  authDomain: "toshifumiide-idobatakaigi.firebaseapp.com",
  projectId: "toshifumiide-idobatakaigi",
  storageBucket: "toshifumiide-idobatakaigi.appspot.com",
  messagingSenderId: "211846729017",
  appId: "1:211846729017:web:45c143e199aab9bf926ce8",
  measurementId: "G-MXMDMXKB6J"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({name , text}) => {
  messageRef.push({ name , text });
};