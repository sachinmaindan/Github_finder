import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchValue, setSearchValue] = useState(searchQuery);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue(searchQuery); // Set searchValue to match searchQuery
    if (searchQuery) {
      // Fetch users based on the search query
      fetch(`https://api.github.com/search/users?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setUsers(data.items))
        .catch((error) => console.error(error));
    }
  }, [searchQuery]);

  const handleSearch = () => {
    // Update the URL with the new search query
    setSearchParams({ search: searchValue });
  };

  return (
    <div>
      <div className="search-bar">
        <form className="form" onSubmit={(e) => {e.preventDefault(); handleSearch();}}>
          <input
            type="text"
            name="text"
            placeholder="Search here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="btn btn-dark btn-block">
            Search
          </button>
        </form>
      </div>
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
