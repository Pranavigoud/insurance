import React from 'react'
import VanHero from '../components/VanHero'
import VanDriverBenefits from '../components/VanDriverBenefits'
import VanCoverageDetails from '../components/VanCoverageDetails'
import VanPolicy from '../components/VanPolicy'
import VanInsuranceDetails from '../components/VanInsuranceDetails'
import VanFaq from '../components/VanFaq'
import Footer from '../components/Footer'
import PolicyInformation from '../components/PolicyInformation'

const Van = () => {
  return (
    <div>
        <VanHero/>
        <VanDriverBenefits/>
        <VanCoverageDetails/>
        <VanPolicy/>
        <VanInsuranceDetails/>
        <VanFaq/>
        <PolicyInformation/>
        <Footer/>
    </div>
  )
}

export default Van