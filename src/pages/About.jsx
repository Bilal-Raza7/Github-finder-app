import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the learning you can get it's code from my
        <strong>
          <a href='https://github.com/Bilal-Raza7'> Github</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By :&nbsp;
        <a className='text-white' href='https://www.linkedin.com/in/mohd-bilal-/'>
        Mohd Bilal
        </a>
      </p>
    </div>
  )
}

export default About
