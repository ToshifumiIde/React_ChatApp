import React , {useState} from 'react';
import SignIn from "./SignIn";
import Main from "./Main";
import config from "../config.json";

console.log({config});


export default () => {

  const [name ,setName ] = useState("");
  if(config.signInEnabled && name === ""){
    return <SignIn setName={setName}/>;
  } else {
    return <Main name={name} setName={setName} />;
  }

};
