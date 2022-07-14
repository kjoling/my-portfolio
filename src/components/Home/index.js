import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import Logo from '../Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4500)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="tag">{'<h1>'}</div>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Keean']}
              idx={15}
            />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Joling']}
              idx={20}
            />
          </h1>
          <div className="tag">{'</h1>'}</div>
          <h2>Junior Developer / Business Intelligence</h2>
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
