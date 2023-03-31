import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Latest from '../../components/Latest/Latest'
import AboutHp from '../../components/AboutHp/AboutHp'
import Product from '../../components/Product/Product'
import WhatYouGet from '../../components/WhatYouGet/WhatYouGet'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <>
        <Header />
        <Latest />
        <AboutHp />
        <Product />
        <WhatYouGet />
        <Subscribe />
        <Footer />
    </>
  )
}

export default Home