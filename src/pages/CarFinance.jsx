import React from 'react'
import CarFinanceHero from '../components/CarFinanceHero'
import CreditScore from '../components/CreditScore'
import FinanceFeatures from '../components/FinanceFeatures'
import FinanceGuide from '../components/FinanceGuide'
import CustomerReview from '../components/CustomerReview'
import FinanceFaq from '../components/FinanceFaq'
import Footer from '../components/Footer'
import FinanceContactHelp from '../components/FinanceContactHelp'

const CarFinance = () => {
  return (
    <div>
        <CarFinanceHero/>
        <CreditScore/>
        <FinanceFeatures/>
        <CustomerReview/>
        <FinanceGuide/>
        <FinanceFaq/>
        <FinanceContactHelp/>
        <Footer/>
    </div>
  )
}

export default CarFinance