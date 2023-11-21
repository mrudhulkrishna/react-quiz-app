import React from 'react'
import './Home.css'
import { Link, Route, Router } from 'react-router-dom';
import Quiz from '../quiz/Quiz'

function Home() {
  return (
    <div className='container_one'>
      <h1 className='welcome'>
            WELCOME TO THE QUIZ
        </h1>
    </div>
  )
}

export default Home