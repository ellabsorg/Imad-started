import { useState } from "react";
import UserComponent from "./UserComponent";
function SessionTwo() {
  const usersData = [
    { id: 1, name: "adem", age: 12 },
    { id: 2, name: "imad", age: 5 },
    { id: 3, name: "lamis", age: 59 },
    { id: 4, name: "abdallah", age: 23 },
  ];
  const [users, setUser] = useState(usersData);
  const [selectedB, setselectedB] = useState();
  const [age, setAge] = useState(0);

  function handleclick(user) {
    setselectedB(user.name);
  }

  function handleAge(user, operation) {
    if (operation == "addition") user.age += 1;
    if (operation == "substraction" && user.age != 0) user.age -= 1;
    setAge(user.age);
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <UserComponent name={user.name} age={user.age} id={user.id} />
          <button onClick={() => handleAge(user, "addition")}> + </button>
          <> </>
          <button onClick={() => handleclick(user)}> Select </button>
          <> </>
          <button onClick={() => handleAge(user, "substraction")}> - </button>
          <hr />
        </div>
      ))}
      <h1>Selected User : {selectedB}</h1>
    </div>
  );
}

export default SessionTwo;
