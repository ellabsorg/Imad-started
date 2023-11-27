import "./App.css";
import UserComponent from "./sessionTwo/UserComponent";
import SessionOne from "./sessionOne/SessionOne";
import SessionTwo from "./sessionTwo/SessionTwo";

function App() {
  return (
    <>
      <div className="sessionOne">
        <h1>Session One </h1>
        <SessionOne />
      </div>
      <hr />
      <div className="sessionTwo">
        <h1>Session Two </h1>
        <SessionTwo />
      </div>
      <hr />
    </>
  );
}

export default App;
