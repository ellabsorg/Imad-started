import React, { useState } from "react";
import NewSongForm from "./NewSongForm";
import "./styles.css";

function Form() {
  const [GID, setGID] = useState(4);
  const [songs, setSongs] = useState([
    { title: "first song", id: 1 },
    { title: "second song", id: 2 },
    { title: "third song", id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: GID }]);
    setGID((prev) => prev + 1);
  };

  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map((song) => {
          return <li> {song.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Form;
