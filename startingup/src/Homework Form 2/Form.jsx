import React, { useState } from "react";
import Component from "./ComponentForm";

function Form() {
  const [hideMsg, setHideMsg] = useState(true);
  
  const [details, setDetails] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const addDetails = (name, value) => {
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log("details = ", details);

  return (
    <div>
      <Component addDetails={addDetails} setHideMsg={setHideMsg} />

      {hideMsg ? null : (
        <h3>
          Hello, {details.name} {details.lastname}, your email is{" "}
          {details.email}, and your password is {details.password}
        </h3>
      )}
      {hideMsg ? setHideMsg(false) : null}
    </div>
  );
}

export default Form;
