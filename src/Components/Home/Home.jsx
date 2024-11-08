import React from 'react'
import ProductList from '../Product/ProductList'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Gallary from '../Gallary/Gallary'
import LatestServices from '../LatestServices/LatestServices'
import Reveiw from '../Reveiw/Reveiw'
import OurBlogs from '../OurBlogs/OurBlogs'
import MessageBox from '../MessageBox/MessageBox'

function Home() {
  return (
    <>
      <WhyChooseUs></WhyChooseUs>
      <Gallary></Gallary>
      <LatestServices></LatestServices>
       <ProductList/>
      <Reveiw></Reveiw>
      <MessageBox></MessageBox>
      <OurBlogs></OurBlogs>
    </>
  )
}

export default Home

