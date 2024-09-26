const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img className="image" src={image} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
