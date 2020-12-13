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