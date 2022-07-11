import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoT from '../../assets/images/Trocity-removebg.png'
import LogoSubtitle from '../../assets/images/keeanj.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoT} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slogan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="linkedIn">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="GitHub">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
