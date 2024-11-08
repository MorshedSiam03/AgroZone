import React from 'react'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Gallary from '../Gallary/Gallary'
import LatestServices from '../LatestServices/LatestServices'
import Reveiw from '../Reveiw/Reveiw'

function Home() {
  return (
    <>
      {/* Ekhane ekta ekta kore component diba Navbar ar Footer bade */}
      <WhyChooseUs></WhyChooseUs>
      <Gallary></Gallary>
      <LatestServices></LatestServices>
      <Reveiw></Reveiw>
    </>
  )
}

export default Home

