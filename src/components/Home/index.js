import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoTitle from '../../assets/images/logo-y.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import About from './About'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['L', 'e', 't', "'", 's', ' ', 'b', 'u', 'i', 'l', 'd']
  const jobArray = [
    'a',
    'm',
    'a',
    'z',
    'i',
    'n',
    'g',
    ' ',
    'w',
    'e',
    'b',
    's',
    'i',
    't',
    'e',
    ' ',
    'w',
    'i',
    't',
    'h',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
            <img src={LogoTitle} alt="developer" />
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
        <img className="solid-logo" src={LogoS} />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
