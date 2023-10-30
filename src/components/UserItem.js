import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  console.log("user details are", user)
  return (
    <div className="card text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{user.login}</h3>
      
      
      <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">
  More
</Link>

    </div>
  );
};

export default UserItem;



