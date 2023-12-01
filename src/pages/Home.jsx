import React from 'react'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div>
     {/* <h1 className="text-6xl">Welcome</h1> */}
     <UserSearch/>
     <UserResult/>
    </div>
  )
}

export default Home
