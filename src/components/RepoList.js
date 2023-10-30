import React from "react";
import Repo from './Repo';

const RepoList = (props) => {
  // Use slice to get the latest 5 repositories
  const latestRepos = props.repos.slice(0, 5);

  return (
    <div>
      {latestRepos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

export default RepoList;
