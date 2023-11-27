import "./SessionTwo.css";
const UserComponent = (props) => {
  const { name, age, id } = props;

  return (
    <div className="usercomp">
      <p>Name : {name}</p>
      <p>Age : {age}</p>
    </div>
  );
};

export default UserComponent;
