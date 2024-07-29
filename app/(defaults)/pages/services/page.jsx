'use client';
import { useEffect, useState } from 'react';
import CountUp from '../../components/elements/CounterUp';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import globalcard from '../../../../public/assets/imgs/page/homepage1/globalcard.png'
import networking from '../../../../public/assets/imgs/page/services/networking.png'
// import financial from '../../../../public/assets/imgs/page/services/financial.png'
import marketing from '../../../../public/assets/imgs/page/services/marketing.png'
import Insurance from '../../../../public/assets/imgs/page/services/Insurance.png'
export default function Service() {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp');
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Layout>
                <title>Services</title>
                <section className="section  pt-20  ">
                    <div className="cnt-center container">
                        <div className="  flex flex-col items-center justify-center text-center">
                            <span className="btn btn-tag-red wow animate__animated animate__fadeIn">What we offer</span>
                            <h2 className="color-primary-main mt-15 wow animate__animated animate__fadeIn mb-10">Our Services</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                                Delivering personalized services to match your specific goals and challenges.
                                <br className="d-none d-lg-block" />
                                <span> and challenges.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section my-10 max-md:px-20  max-sm:px-1">
                    <div className="cnt-center container">
                        <div className="row flex justify-evenly">
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/service1.png" alt="GCA" />
                                        </Link>
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#DE2910]  ">
                                                <Image className="h-fit w-fit" src={globalcard.src} alt="gca" width={100} height={100} />
                                            </div>
                                            <h6 className="color-brand-2">Global Reach</h6>
                                            <p className="font-xs color-grey-900">Worldwide Cargo Efficiency.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/service2.png" alt="GCA" />
                                        </Link>
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                            <Image className='w-fit h-fit' src={networking.src} alt="gca" width={42} height={42} />
                                            <h6 className="color-brand-2">Networking Events</h6>
                                            <p className="font-xs color-grey-900">Exclusive Industry Connections</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/service3.png" alt="GCA" />
                                        </Link> 
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                            <Image className='w-fit h-fit' src={marketing.src} alt="Financial" width={42} height={42} />
                                            <h6 className="color-brand-2">Financial Protection</h6>
                                            <p className="font-xs color-grey-900">Risk Mitigation Assurance</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/warehouse.png" alt="GCA" />
                                        </Link>
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                           <Image className='w-fit h-fit' src={marketing.src} alt="Marketing" width={42} height={42} />
                                            <h6 className="color-brand-2">Marketing and Promotion</h6>
                                            <p className="font-xs color-grey-900">Enhanced Market Visibility</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/train.png" alt="GCA" />
                                        </Link>
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                           <Image className='w-fit h-fit' src={Insurance.src} alt="Insurance" width={42} height={42} />
                                            <h6 className="color-brand-2">GCA Insurance</h6>
                                            <p className="font-xs color-grey-900">We offer specialized departments for continental GCAorts.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                        <Link href="/service-detail">
                                            <img src="/assets/imgs/page/services/ship.png" alt="GCA" />
                                        </Link>
                                    </div>
                                    <div className="cardInfo">
                                        {' '}
                                        <Link href="/service-detail">
                                        <Image className='w-fit h-fit' src={Insurance.src} alt="Insurance" width={42} height={42} />
                                            <h6 className="color-brand-2">Industry Updates</h6>
                                            <p className="font-xs color-grey-900">Current Sector Insights</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
                <section className="section pb-65 bg-whychooseus-2 pt-60">
                    <div className="cnt-center container">
                        <div className="row align-items-center">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 mb-30">
                                <h2 className="color-white mb-50 wow animate__animated animate__fadeIn">
                                    We take care about <span className="color-brand-1"> transportation</span> for your business
                                </h2>
                                <Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn w-fit" href="#">
                                    <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    View All Projects
                                </Link>
                            </div>
                            <div className="col-lg-5 mb-30">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="box-item-number box-item-number-white mb-30">
                                            <div className="item-number">
                                                <h2 className="color-brand-1">
                                                    <span className="counterUp count">{inViewport && <CountUp end={165} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-brand-1">Delivered packages.</h6>
                                            </div>
                                        </div>
                                        <div className="box-item-number box-item-number-2 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white">
                                                    <span className="count">{inViewport && <CountUp end={345} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-white">Countries covered</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="box-item-number box-item-number-3 mt-30 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white">
                                                    <span className="count">{inViewport && <CountUp end={245} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-white">Satisfied Clients</h6>
                                            </div>
                                        </div>
                                        <div className="box-item-number box-item-number-4 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white">
                                                    <span className="count">{inViewport && <CountUp end={546} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-white">Tons of goods</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* form section */}
                <section className="section bg-request-quote-3 mb-32  mt-52 " style={{ backgroundColor: 'rgba(243, 243, 243, 1)' }}>
                    <div className="cnt-center container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-form-request-quote-2 box-form-request-quote-3">
                                    <div className="box-form-contact-leading">
                                        <h2 className="title-favicon color-primary-main mb-15 wow animate__animated animate__fadeIn">Get in Touch</h2>
                                        <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                                            We are here to help you with all your logistics needs. Please fill in the form below and we will get back to you within 24 hours.
                                        </p>
                                        <div className="row align-items-center wow animate__animated animate__fadeIn flex justify-between">
                                            <div className="lg:w-[48%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your name *" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[48%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your email *" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[48%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Number *" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[48%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" rows={11} placeholder="Message / Note" defaultValue={''} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 flex">
                                                <Link className="btn btn-brand-1-big mr-25" href="#">
                                                    Send Message
                                                </Link>
                                                <Link className="btn btn-link-medium" href="/contact">
                                                    Contact Us
                                                    <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-how-works">
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <img src="/assets/imgs/page/homepage1/order.png" alt="GCA" />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Customer places order</h5>
                                            <p className="font-md color-grey-700">Inspection and quality check of goods</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <img src="/assets/imgs/page/homepage1/payment.png" alt="GCA" />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Payment successful</h5>
                                            <p className="font-md color-grey-700">Payoneer, Paypal, or Visa master card</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <img src="/assets/imgs/page/homepage1/forklift2.png" alt="GCA" />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Warehouse receives order</h5>
                                            <p className="font-md color-grey-700">Check the accuracy of the goods.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <img src="/assets/imgs/page/homepage1/deliverTruck.png" alt="GCA" />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Item picked, packed &amp; shipped</h5>
                                            <p className="font-md color-grey-700">Ship the goods to a local carrier</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <img src="/assets/imgs/page/homepage1/worlwideshipment.png" alt="GCA" />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Delivered &amp; Measure success</h5>
                                            <p className="font-md color-grey-700">Update order status on the system</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
