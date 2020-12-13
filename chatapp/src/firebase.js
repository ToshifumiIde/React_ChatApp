import firebase from "firebase";


const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
};

//最初に初期化設定を実行
firebase.initializeApp(firebaseConfig);
//次にデータベースを丸ごと参照する
const database = firebase.database();
//特定の領域（今回messages）に対するリファレンス（参照）を作成する
const messagesRef = database.ref("messages");

//messageリファレンスに、{name , text}のオブジェクトを追加(push)する関数
export const pushMessage = ({name , text}) => {
  messagesRef.push({ name , text });
};
//このpushMessageメソッドはMessageFieldコンポーネントで使う