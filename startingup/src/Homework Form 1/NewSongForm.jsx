import React, { useState } from "react";
const NewSongForm = (props) => {
  const { addSong } = props;
  const [title, setTitle] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewSongForm;
