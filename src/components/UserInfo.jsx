import React from 'react'

function UserInfo({user}) {
  return (
    <div>
        <img src={user.avatar_url} alt='user_avatar'></img>
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
