import Person from "./person";

const List = ({ people }) =>
  people.map((person) => <Person {...person} key={person.id} />);

export default List;
