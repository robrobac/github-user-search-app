import React from 'react'
import './UserInfo.scss';

function UserInfo({user}) {
    
  return (
    <div className='userInfo'>
        <img
            src={user.avatar_url}
            alt="user_avatar"
            style={{display: user.id ? 'block' : 'none' }}>
        </img>
        <h3>
            {user.login}
        </h3>
        <p>
        {user.location}
        </p>
        <p>
            {user.bio}
        </p>
    </div>
  )
}

export default UserInfo
