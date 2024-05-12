// FirstName.js

const FirstName = ({ setFirstName, firstName }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };

  return (
    <div>
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={handleChange} />
    </div>
  );
};

export default FirstName;
