import React from 'react'
import Hero from '../../components/home/Hero';
import Brands from '../../components/home/Brands';
import Services from '../../components/home/Services';
import Info1 from '../../components/home/Info';
import InfoContact from '../../components/home/InfoContact';
import Howitwork1 from '../../components/home/Howitwork';
import Testimonial1 from '../../components/home/Testimonial';
import Projects1 from '../../components/home/Projects';
import Requestquote1 from '../../components/home/Requestquote';
import Pricing1 from '../../components/home/Pricing';
import Faqs1 from '../../components/home/Faqs';
import Cta1 from '../../components/home/Cta';
import News1 from '../../components/home/News';
import Bgmap from '../../components/home/Bgmap';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
                <title>GCA</title>
            </Head>
    <Hero />
    <Brands />
    <Services />
    <Info1 />
    {/* <InfoContact /> */}
    {/* <Howitwork1 /> */}
    <Testimonial1 />
    {/* <Projects1 /> */}
    {/* <Requestquote1 /> */}
    {/* <Pricing1 /> */}
    <Cta1 />     
    <Faqs1 />       
    <News1 />
    <Bgmap />         
    </>
  )
}

export default Home