import React from 'react'
import './UserRepos.scss';

function UserRepos({repos}) {

  return repos.map((repo) => (
    <li key={repo.id}>
        <a href={repo.html_url} target='blank'>
            <p>{repo.name}</p>
        </a>
        
        <p>{repo.description}</p>
    </li>
  ))
}

export default UserRepos
