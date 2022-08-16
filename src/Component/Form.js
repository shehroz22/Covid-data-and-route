import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("Enter Something  here ");
  const creatTxt = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        onChange={creatTxt}
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        value={text}
      >
        {" "}
      </textarea>
    </div>
  );
}
