import "./Box.css";
const Box = ({ fullName, title, animal, age, id }) => {
  return (
    <div className="box">
      <p>{fullName}</p>
      <p>{title}</p>
      <p>{animal}</p>
      <p>{age}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Box;
