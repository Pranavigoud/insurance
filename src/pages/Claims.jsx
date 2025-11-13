import React from 'react'
import ClaimsHero from '../components/ClaimsHero'
import ClaimsInstructions from '../components/ClaimsInstructions'
import ClaimsSteps from '../components/ClaimsSteps'
import CustomerReview from '../components/CustomerReview'
import GuideVideo from '../components/GuideVideo'
import Footer from '../components/Footer'  

const Claims = () => {
  return (
    <div>
        <ClaimsHero />
        <ClaimsInstructions />
        <ClaimsSteps />
        <CustomerReview />
        <GuideVideo />
        <Footer />
    </div>
  )
}

export default Claims