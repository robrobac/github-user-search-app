import React from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'

function ShowUser({user, repos}) {
  return (
    <div>
        <UserInfo user={user}/>
        <UserRepos repos={repos}/>
    </div>
  )
}

export default ShowUser
