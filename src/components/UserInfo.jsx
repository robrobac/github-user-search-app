import React from 'react'
import './UserInfo.scss';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function UserInfo({user}) {
    if(user.login) {
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
                <a href={`https://github.com/${user.login}`} target='blank' className='profileLink'>
                    <p>View Profile</p>
                </a>
                <div className='follow'>
                    <PeopleIcon className='followIcon'/>
                    <p>
                        <span>{user.followers} </span>
                        {user.followers === 1 ? "follower" : "followers"}
                    </p>
                    -
                    <p><span>{user.following} </span>following</p>
                </div>
                <p className='location'>
                    <LocationOnOutlinedIcon className='locationIcon'/>
                    {user.location}</p>
            </div>
          )
    }
}

export default UserInfo
