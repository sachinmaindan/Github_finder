import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import RepoList from "./RepoList";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]); // Define the 'repos' state
  const { anything } = useParams();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const result = await axios.get(`https://api.github.com/users/${anything}`);
        setUser(result.data);

        // Fetch user's repositories
        const reposResult = await axios.get(result.data.repos_url);
        setRepos(reposResult.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, [anything]);

  return (
    <div>
      <Link to="/" className="btn btn-dark">Back to Search</Link>

      {/* Display hireable status */}
      <p>Hireable: {user && user.hireable ? <i className="fa fa-check text-success" /> : <i className="fa fa-times-circle text-danger" />}</p>

      {/* Display user details */}
      <div className="card grid-2">
        {/* User avatar and basic info */}
        <div className="all-center">
          <img src={user && user.avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
          <h1>{user && user.name}</h1>
          <p>{user && user.location}</p>
        </div>
        {/* Additional user info */}
        <div>
          {user && user.bio && (
            <div>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </div>
          )}
          {user && (
            <a href={user.html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
          )}
          <ul>
            <li>{user && user.company && <strong>Company: {user.company}</strong>}</li>
            <li>{user && user.blog && <strong>Website: {user.blog}</strong>}</li>
            <li>{user && user.login && <strong>Username: {user.login}</strong>}</li>
          </ul>
        </div>
      </div>

      {/* User statistics */}
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {user && user.followers}</div>
        <div className="badge badge-success">Following: {user && user.following}</div>
        <div className="badge badge-danger">Public Repos: {user && user.public_repos}</div>
        <div className="badge badge-dark">Public Gists: {user && user.public_gists}</div>
      </div>

      {/* List of user repositories */}
      <RepoList repos={repos} />
    </div>
  );
};

export default UserDetail;
