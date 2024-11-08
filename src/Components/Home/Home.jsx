import React from 'react'
import ProductList from '../Product/ProductList'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Gallary from '../Gallary/Gallary'
import LatestServices from '../LatestServices/LatestServices'
import Reveiw from '../Reveiw/Reveiw'

function Home() {
  return (
    <>
      <WhyChooseUs></WhyChooseUs>
      <Gallary></Gallary>
      <LatestServices></LatestServices>
     <ProductList/>
      <Reveiw></Reveiw>

    </>
  )
}

export default Home

