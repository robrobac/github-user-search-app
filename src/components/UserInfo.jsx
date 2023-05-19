import React from 'react'
import './UserInfo.scss';

function UserInfo({user}) {
    
  return (
    <div className='userInfo'>
        <img className='userImage'
            src={user.avatar_url}
            alt="user_avatar"
            style={{display: user.id ? 'block' : 'none' }}>
        </img>
        <h2 className='username'>{user.name}</h2>
        <h3 className='login'>{user.login}</h3>
        <p className='bio'>{user.bio}</p>
        <p className='location'>{user.location}</p>
        
    </div>
  )
}

export default UserInfo
