import './index.scss'
import LogoT from '../../assets/images/Trocity-removebg.png'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  //   const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoT}
        alt="Trocitybg"
      />
    </div>
  )
}

export default Logo
