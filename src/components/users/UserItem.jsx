import React from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router-dom'

function UserItem( {user :{ login, avatar_url }} ) {
    console.log(typeof(login))
  return (
    <div className='card shadow-md compact side bg-neutral p-3'>
        <div className="flex-row items-centre space-x-4 card-body">
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt="Profile" />
                </div>
            </div>
        </div>
        <div>
            <h2 className="card-title">{ login }</h2>
            <Link className='text-base-content text-opacity-40 ' to={`/user/${login}`}>
                Visit Profile
            </Link>
        </div>
    </div>
  )
}

// UserItem.prototype = {
//     user: PropTypes.object.isRequired,
// }

export default UserItem
