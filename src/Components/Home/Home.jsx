import React from 'react'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Gallary from '../Gallary/Gallary'
import LatestServices from '../LatestServices/LatestServices'
import OurBlogs from '../OurBlogs/OurBlogs'

function Home() {
  return (
    <>
      {/* Ekhane ekta ekta kore component diba Navbar ar Footer bade */}
      <WhyChooseUs></WhyChooseUs>
      <Gallary></Gallary>
      <LatestServices></LatestServices>
      <OurBlogs></OurBlogs>
    </>
  )
}

export default Home

