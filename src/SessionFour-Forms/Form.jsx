import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setisButtonClicked(false);

    const name = e.target.name;
    const value = e.target.value;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisButtonClicked(true);
  };
  const hangleReset = () => {
    setFormdata({ username: "", password: "" });
  };

  return (
    <div>
      <form>
        <div className="form-wrapper">
          <div className="form-element">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              value={formdata.username}
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              placeholder="password"
              onChange={handleChange}
            />
            <button onClick={hangleReset}>RESET</button>
          </div>
          <div className="form-element">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
      {isButtonClicked && (
        <div>
          <h1>
            Username : {formdata.username} password : {formdata.password}
            {console.log(formdata)}
          </h1>
        </div>
      )}
    </div>
  );
}
