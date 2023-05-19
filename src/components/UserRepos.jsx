import React from 'react'
import './UserRepos.scss';

function UserRepos({repos}) {

    if(!repos.message === "Not Found") {
        return
    }

  return repos.map((repo) => (
    <li key={repo.id} className='repoItem'>
        <a href={repo.html_url} target='blank' className='repoLink'>
            <p>{repo.name}</p>
        </a>
        
        <p className='repoDescription'>{repo.description}</p>
    </li>
  ))
}

export default UserRepos
