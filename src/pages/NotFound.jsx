import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
        <div className="text-content hero-centre">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-8">Oops!</h1>
            </div>
            <p className="text-xl mb-8">404 not found!</p>
            <Link to='/' className='btn btn-primary btn-lg'>
                <FaHome /> Go Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound
