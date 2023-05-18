import React from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'
import './ShowUser.scss';

function ShowUser({user, repos}) {
    if (user.message === 'Not Found') {
        return <p>no user found</p>
    } else {
        return (
            <div className='showUser'>
                <UserInfo user={user}/>
                <ul className='userRepos'>
                    <UserRepos repos={repos}/>
                </ul>
            </div>
        )
    }
}

export default ShowUser
