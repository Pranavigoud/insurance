import React, { useEffect } from 'react'
import OurStoryHero from '../components/OurStoryHero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import PurposeSection from '../components/PurposeSection'

const OurStory = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <OurStoryHero/>
        <AboutUs/>
        <PurposeSection/>
        <Footer/>
    </div>
  )
}

export default OurStory