import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters/index.js'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skills = [
    { icon: faJsSquare, color: '#efd81d' },
    { icon: faHtml5, color: '#f06529' },
    { icon: faCss3, color: '#28a4d9' },
    { icon: faReact, color: '#5ed4f4' },
    { icon: faNodeJs, color: 'forrestgreen' },
    { icon: faGitAlt, color: '#ec4d28' },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a newer developer looking for a role within a company where I
            can build upon my skills, work with the newest technologies, and
            engage with a diverse set of people and projects. Current skills and
            languages include JavaScript, jQuery, React, Redux / Redux Toolkit,
            Next.js, Express.js, beginner level Node.js and Python, Git, GitHub,
            Html5, Css3, SQL, as well as proficiency in Microsoft Office, Excel
            and fundamental understanding of PowerBI.
          </p>
          <p>
            I am calm, confident, self-motivated, naturally curious, and
            constantly learning how improve myself both personally and
            professionally.
          </p>
          <p>
            My personal hobbies include working out, learning how to dj, playing
            computer games with friends, spending time with my family and loved
            ones, and travelling the world.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <FontAwesomeIcon icon={skill.icon} color={skill.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
