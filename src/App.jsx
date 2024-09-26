import { useState } from "react";
import data from "./data";
import List from "./list";

const App = () => {
  const [reminders, setReminders] = useState(data);
  const numberOfReminders = reminders.length;

  const clearReminders = () => {
    setReminders([]);
  };

  const resetReminders = () => {
    setReminders(data);
  };

  return (
    <main>
      <div className="container">
        <h3>{numberOfReminders} birthdays today</h3>
        <List people={reminders}></List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="btn" onClick={clearReminders}>
            Clear Reminders
          </button>
          <button className="btn" onClick={resetReminders}>
            Reset Reminders
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
