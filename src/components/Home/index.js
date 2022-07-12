import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import Logo from '../Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'e', 'e', 'a', 'n', 'J']
  const aspiringArray = ['a', 'n', ' ', 'a', 's', 'p', 'i', 'r', 'i', 'n', 'g']
  const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
            {/* <img src={Logosubtitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            ,
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aspiringArray}
              idx={22}
            />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={33}
            />
          </h1>
          <h2>Juninor Frontend Developer & working towards Fullstack.</h2>
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
