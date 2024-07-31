import React from 'react';
import Hero from '../../components/home/Hero';
import Brands from '../../components/home/Brands';
import Services from '../../components/home/Services';
import Info1 from '../../components/home/globalLogistes';
import Testimonial1 from '../../components/home/Testimonial';
import Faqs1 from '../../components/home/Faqs';
import Cta1 from '../../components/home/Cta';
import News1 from '../../components/home/News';

const Home = () => {
    return (
        <>
            <title>GCA | Home</title>
        <section className='overflow-x-hidden'>

            <Hero />
            {/* <Brands /> */}
            <Services />
            <Info1 />
            {/* <Testimonial1 /> */}
            <Cta1 />
            <Faqs1 />
            {/* <News1 /> */}
        </section>
        </>
    );
};

export default Home;
