import React from 'react'
import Hero from '../components/Hero'
import LetestCollection from '../components/LetestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewletterBox from '../components/NewletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection/>
      <BestSeller/>
      <OurPolicy />
      <NewletterBox />
    </div>
  )
}

export default Home