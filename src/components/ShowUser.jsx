import React from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'
import './ShowUser.scss';

function ShowUser({user, repos}) {
  return (
    <div className='showUser'>
        <UserInfo user={user}/>
        <p>{user.name}'s repositories</p>
        <ul className='userRepos'>
            <UserRepos repos={repos}/>
        </ul>
    </div>
  )
}

export default ShowUser
