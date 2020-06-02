import React from "react";

const userInput = (props) => {
  const stype = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={stype}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userInput;
