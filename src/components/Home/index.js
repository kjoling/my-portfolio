import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import Logo from '../Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'e', 'e', 'a', 'n', ' ', 'J', 'o', 'l', 'i', 'n', 'g']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4500)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Juninor Developer / Business Analyst</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
