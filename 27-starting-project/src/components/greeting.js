import { useState } from "react";

import Output from "./output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <>
      <h1>Hello World!</h1>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
