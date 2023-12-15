import "./SessionTwo.css";

const UserComponent = (props) => {
  const { user, setselectedUser, handleIncAge, isButtonHidden,isSelecteButtonDisable } = props;

  function handleclick(user) {
    setselectedUser(user);
  }
  return (
    <div className="usercomp">
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      {isButtonHidden ? null : (
        <div>
          <button disabled={isSelecteButtonDisable} onClick={() => handleclick(user)}> Select </button>
          <button onClick={() => handleIncAge(user.id)}> + </button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default UserComponent;
