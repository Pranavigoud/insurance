import React from 'react'
import NewToUkHero from '../components/NewToUkHero'
import NewToUkAd from '../components/NewToUkAd'
import CarHero from '../components/CarHero'
import InsuranceBenefits from '../components/InsuranceBenefits'
import CustomerReview from '../components/CustomerReview'
import CoverDetails from '../components/CoverDetails'
import InsuranceOfferDetails from '../components/InsuranceOfferDetails'
import DrivingTips from '../components/DrivingTips'
import ArticleList from '../components/ArticleList'
import FAQList from '../components/FAQList'
import PolicyInformation from '../components/PolicyInformation'
import Footer from '../components/Footer'
const NewtoUk = () => {
  return (
    <div>
        <NewToUkHero/>
        <NewToUkAd/>
        <CarHero/>
        <InsuranceBenefits/>
        <CustomerReview/>
        <CoverDetails/>
        <InsuranceOfferDetails/>
        <DrivingTips/>
        <ArticleList/>
        <FAQList/>
        <PolicyInformation/>
        <Footer/>
    </div>
  )
}

export default NewtoUk