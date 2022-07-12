import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()
  // }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', ' e']}
              idx={15}
              letterClass={letterClass}
            />{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:jolingkw@gmail.com&subject=Project Inquiry"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </a>
          </h1>
          <p>
            I am interested in opportunities at startups or established
            companies. However, if you have any other questions, don't hesitate
            to contact me.
          </p>
          <div className="contact-form">
            {/* <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message..." required name="message" />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> */}
          </div>
        </div>
        <div className="info">
          Keean Joling,
          <br />
          United States
          <br />
          Renton, WA
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jolingkw@gmail.com&subject=Project Inquiry"
          >
            <span>
              jolingkw@gmail.com{' '}
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </span>
          </a>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
