import "./App.css";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return <UserList key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
