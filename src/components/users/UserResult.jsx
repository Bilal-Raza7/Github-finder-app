import React from 'react'
import UserItem from './UserItem'
import { useEffect, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserResult() {
    const {fetchUsers,loader,users} = useContext(GithubContext)
        useEffect (() => {
            fetchUsers()
        },[])
// ------------------------------------------------------------------------------------------
    
// --------------------------------------------------------------------------------------------
  
    if(!loader){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 pb-5">
        {users.map((user) => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div> 
        )
    }
    else{
        return (
            <h2>Loading..</h2>
        )
    }
  
  }


  export default UserResult
