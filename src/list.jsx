import Person from "./person";

const List = ({ people }) => {
  return people.map((person) => {
    return (
      <Person
        imgSrc={person.image}
        name={person.name}
        age={person.age}
        key={person.id}
      ></Person>
    );
  });
};

export default List;
