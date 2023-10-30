import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      navigate(`/users?search=${text}`);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
    </>
  );
};

export default Search;
