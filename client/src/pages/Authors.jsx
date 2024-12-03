import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'

const authorData = [
  { id: 1, avatar: Avatar1, name: 'Percy Jackson', posts: 3 },
  { id: 2, avatar: Avatar2, name: 'Annabeth Chase', posts: 5 },
  { id: 3, avatar: Avatar3, name: 'Grover Underwood', posts: 0 },
  { id: 4, avatar: Avatar4, name: 'Thalia Grace', posts: 2 },
  { id: 5, avatar: Avatar5, name: 'Leo Valdez', posts: 1 },
]

const Authors = () => {

  const [authors, setAuthors] = useState(authorData);

  return (
    <section className="authors">
      {
        authors.length > 0
          ?
          <div className="container authors__container">
            {
              authors.map(({ id, avatar, name, posts }) => {
                return <Link className='author' key={id} to={`/posts/users/${id}`}>
                  <div className='author__avatar'>
                    <img src={avatar} alt={`Image of ${name}`} />
                  </div>
                  <div className="author__info">
                    <h4>{name}</h4>
                    <p>{posts}</p>
                  </div>
                </Link>
              })
            }
          </div>
          : <h2 className='center'>No Authors Found</h2>
      }
    </section>
  )
}

export default Authors