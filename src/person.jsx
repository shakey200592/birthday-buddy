const Person = ({ imgSrc, name, age }) => {
  return (
    <div className="person">
      <img className="image" src={imgSrc} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
