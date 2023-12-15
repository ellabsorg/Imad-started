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
  const [selectedUser, setselectedUser] = useState(null);

  const handleIncAge = (userId) => {
    setUser((prevUsers) => {
      const updatedUsers = prevUsers.map((currentUser) => {
        if (currentUser.id === userId) {
          const updatedUser = { ...currentUser, age: currentUser.age + 1 };
          setselectedUser(updatedUser);
          return updatedUser;
        }
        return currentUser;
      });
      return updatedUsers;
    });
  };
  return (
    <div>
      {users.map((user) => (
        <div>
          <UserComponent
            key={user.id}
            user={user}
            setselectedUser={setselectedUser}
            handleIncAge={handleIncAge}
            isSelecteButtonDisable={selectedUser?.id === user.id}
          />
        </div>
      ))}
      <h1> Selected User is :{selectedUser?.name} </h1>
      {selectedUser && (
        <UserComponent user={selectedUser} isButtonHidden={true} />
      )}
      <br /> <br />
      <br /> <br />
    </div>
  );
}
export default SessionTwo;
