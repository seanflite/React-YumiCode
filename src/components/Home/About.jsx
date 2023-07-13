import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { services } from '../../constants'
import { SectionWrapper } from '../../hoc'
import Loader from 'react-loaders'
import { fadeIn, textVariant } from '../../utils/motion'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 2)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Our Services'.split('')}
            idx={15}
          />
        </h1>
        <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          With our comprehensive range of services, YumiCode is dedicated to
          delivering tailor-made internet marketing solutions that elevate your
          online presence, broaden your reach, and generate valuable leads.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default SectionWrapper(About, 'about')
