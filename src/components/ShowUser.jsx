import React from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'
import './ShowUser.scss';

function ShowUser({user, repos}) {
    if (user.message === 'Not Found') {
        return <p className='errorMessage'>
            There's no user found with that name.
            Please try again.
            </p>
    } else {
        return (
            <div className='showUser'>
                <UserInfo user={user}/>
                <ul className='repos'>
                    <UserRepos repos={repos}/>
                </ul>
            </div>
        )
    }
}

export default ShowUser
