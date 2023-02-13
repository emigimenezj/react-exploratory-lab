import './App.css'
import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  
  const users = [
    {
      userName: 'emigimenezj',
      name: 'Emilio Giménez',
      isFollowing: true
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    },
    {
      userName: 'rauchg',
      name: 'Guillermo Rauch',
      isFollowing: false
    },
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
  ]

  return (
    <section className='App'>
      {users.map(({userName, name, isFollowing}) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard> 
      ))}
    </section>
  )
}