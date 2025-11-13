import React from 'react'
import ReferFriendHero from '../components/ReferFriendHero'
import ReferFriend from '../components/ReferFriend'
import ReferInstructions from '../components/ReferInstructions'
import Footer from '../components/Footer'

const ReferAFriend = () => {
  return (
    <div>
      <ReferFriendHero/>
      <ReferFriend/>
      <ReferInstructions/>
      <Footer/>
    </div>
  )
}

export default ReferAFriend