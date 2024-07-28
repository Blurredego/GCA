import React from 'react'
import Hero from '../../components/home/Hero';
import Brands from '../../components/home/Brands';
import Services from '../../components/home/Services';
import Info1 from '../../components/home/globalLogistes';
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

const Home = () => {
  return (
    <>

    <title>GCA | Home</title>
    {/* <div  className=' container-fluid'> */}
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
    {/* <Bgmap />          */}
    {/* </div> */}
    </>
  )
}

export default Home