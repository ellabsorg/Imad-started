const ComponentForm = (props) => {
  const { addDetails, setHideMsg } = props;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    addDetails(name, value);
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHideMsg(false);
    console.log("SUBMITTED");
  };

  return (
    <div style={{ padding: "5%" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
        <br />

        <label htmlFor="lastname">lastname :</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">email :</label>
        <input id="email" name="email" type="text" onChange={handleChange} />
        <br />

        <label htmlFor="password">Password :</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ComponentForm;
