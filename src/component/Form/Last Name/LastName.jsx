// LastName.js

const LastName = ({ setLastName, lastName }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  return (
    <div>
      <label>First Name:</label>
      <input type="text" value={lastName} onChange={handleChange} />
    </div>
  );
};

export default LastName;
