import React from 'react'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Gallary from '../Gallary/Gallary'
import LatestServices from '../LatestServices/LatestServices'
import OurBlogs from '../OurBlogs/OurBlogs'
import MessageBox from '../MessageBox/MessageBox'

function Home() {
  return (
    <>
      <WhyChooseUs></WhyChooseUs>
      <Gallary></Gallary>
      <LatestServices></LatestServices>
      <MessageBox></MessageBox>
      <OurBlogs></OurBlogs>
    </>
  )
}

export default Home

