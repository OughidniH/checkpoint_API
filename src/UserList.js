import React from "react";
import "./UserList.css";
function UserList({ user }) {
  return (
    <>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci5BTo3zLFXJIu5Ku8XMCkOav0tz9no4fs2t0uCIQkCZqp-N89g"
          alt="Bosi"
        />
        <h1>{user.name}</h1>
        <p className="title">{user.email}</p>
        <p>{user.phone}</p>
        <a href={user.website}>{user.website}</a>
      </div>
    </>
  );
}

export default UserList;
