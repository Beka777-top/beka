import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  function Add(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={Add} value={text} />
      <p>Терілген текст: {text}</p>
    </div>
  );
}

export default TextInput;