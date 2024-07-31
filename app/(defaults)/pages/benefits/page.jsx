'use client';
import { useEffect, useState } from 'react';
import CountUp from '../../components/elements/CounterUp';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import globalcard from '../../../../public/assets/imgs/page/services/global.png';
import networking from '../../../../public/assets/imgs/page/services/networking.png';
import financial from '../../../../public/assets/imgs/page/services/financial.png';
import marketing from '../../../../public/assets/imgs/page/services/marketing.png';
import Insurance from '../../../../public/assets/imgs/page/services/Insurance.png';
import InsuranceUpdate from '../../../../public/assets/imgs/page/services/InsuranceUpdate.png';
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
                <title>Exclusive Benefits</title>
                <section className="section  pt-20  ">
                    <div className="cnt-center container">
                        <div className="  flex flex-col items-center justify-center text-center">
                            <span className="btn btn-tag-red wow animate__animated animate__fadeIn">What we offer</span>
                            <h2 className="color-primary-main mt-15 wow animate__animated animate__fadeIn mb-10">Exclusive Benefits</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Providing tailored solutions to meet your unique goals and 
                                <br className="d-none d-lg-block" />
                                <span> overcome specific challenges.</span>
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
                                    
                                        <Image className="h-fit w-fit" src={"/assets/imgs/page/services/globalcardbackImg.webp"} alt="gca" width={446} height={459} />
                                            {/* <img src="/assets/imgs/page/services/service1.png" alt="GCA" /> */}
                                    </div>
                                    <div className="cardInfo cursor-pointer">
                                        {' '}
                                            <Image className="h-fit w-fit" src={globalcard.src} alt="gca" width={100} height={100} />
                                            <h6 className="color-brand-2">Global Reach</h6>
                                            <p className="font-xs color-grey-900">Worldwide Cargo Efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                            <Image className="h-fit w-fit" src={"/assets/imgs/page/services/networkingbackImg.webp"} alt="gca" width={446} height={459} />
                                    </div>
                                    <div className="cardInfo cursor-pointer">
                                        {' '}
                                            <Image className="h-fit w-fit" src={networking.src} alt="gca" width={43} height={43} />
                                            <h6 className="color-brand-2">Networking Events</h6>
                                            <p className="font-xs color-grey-900">Exclusive Industry Connections</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                    
                                            <Image className="h-fit w-fit" src={"/assets/imgs/page/services/markitingmain.webp"} alt="gca" width={446} height={459} />
                                    </div>
                                    <div className="cardInfo cursor-pointer">
                                        {' '}
                                      
                                            <Image className="h-fit w-fit" src={marketing.src} alt="Marketing" width={43} height={43} />
                                            <h6 className="color-brand-2">Marketing and Promotion</h6>
                                            <p className="font-xs color-grey-900">Enhanced Market Visibility</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                    
                                            <Image className="h-fit w-fit" src={"/assets/imgs/page/services/financemainImg.webp"} alt="gca" width={446} height={459} />
                                    </div>
                                    <div className="cardInfo cursor-pointer">
                                        {' '}
                                      
                                            <Image className="h-fit w-fit" src={financial.src} alt="Marketing" width={43} height={43} />
                                            <h6 className="color-brand-2">Financial Protection</h6>
                                            <p className="font-xs color-grey-900">Risk Mitigation Assurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                     
                                           <Image className="h-fit w-fit" src={"/assets/imgs/page/services/insurancemian.webp"} alt="Insurance"width={446} height={459} />
                                    </div>
                                    <div className="cardInfo cursor-pointer">
                                        {' '}
                                     
                                            <Image className="h-fit w-fit" src={Insurance.src} alt="Insurance" width={43} height={43} />
                                            <h6 className="color-brand-2">GCA Insurance</h6>
                                            <p className="font-xs color-grey-900">We offer specialized departments for continental GCAorts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-50 wow  animate__animated animate__fadeIn md:w-[40%] lg:w-[31%]">
                                <div className="cardService">
                                    <div className="cardImage">
                                        {' '}
                                     <Image className="h-fit w-fit" src={"/assets/imgs/page/services/insurancemain.webp"} alt="InsuranceUpdate" width={446} height={459} />
                                    </div>
                                    <div className="cardInfo cursor-pointer ">
                                        {' '}
                                            <Image className="h-fit w-fit" src={InsuranceUpdate.src} alt="InsuranceUpdate" width={43} height={43} />
                                            <h6 className="color-brand-2">Industry Updates</h6>
                                            <p className="font-xs color-grey-900">Current Sector Insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
                {/* <section className="section pb-65 bg-whychooseus-2 pt-60">
                    <div className="cnt-center container">
                        <div className="row align-items-center">
                            <div className="col-lg-1 " />
                            <div className="col-lg-3 mb-30 ">
                                <h2 className="color-white max-md:flex max-md:justify-center mb-50 wow animate__animated animate__fadeIn">
                                    Where{' '}
                                    <span className="color-brand-1">
                                        {' '}
                                        we <br className='d-none max-md:d-block'/> stand
                                    </span>{' '}
                                    now
                                </h2>
                            </div>
                            <div className="col-lg-1 " />
                            <div className="col-lg-6 mb-30">
                                <div className="row  flex max-md:justify-center -ml-20 items-center">
                                    <div className="col-12 flex max-md:justify-center items-center col-md-6 col-lg-4 mb-30">
                                        <div className="box-item-number">
                                            <div className="item-number">
                                                <h2 className="color-white">
                                                    <span className="count">{inViewport && <CountUp end={5} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-white">Countries</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12  flex max-md:justify-center  col-md-6 col-lg-4 mb-30">
                                        <div className="box-item-number box-item-number-white">
                                            <div className="item-number">
                                                <h2 className="color-brand-1">
                                                    <span className="counterUp count">{inViewport && <CountUp end={10} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-brand-1">Members</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12  flex max-md:justify-center col-md-6 col-lg-4 mb-30">
                                        <div className="box-item-number box-item-number-white">
                                            <div className="item-number">
                                                <h2 className="color-brand-1">
                                                    <span className="counterUp count">{inViewport && <CountUp end={15} duration={10} />}</span>
                                                </h2>
                                                <h6 className="color-brand-1 max-md:mr-5">Events</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
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
                                            <div className="col-lg-12 flex space-x-2">
                                                <Link className="btn btn-brand-1-big text-nowrap " href="#">
                                                    Send Message
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
                                            <Image className='w-fit h-fit' src="/assets/imgs/page/services/signup.png" alt="GCA" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Sign Up</h5>
                                            <p className="font-md color-grey-700">Initiate your membership journey by providing your basic details.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                            <Image className='w-fit h-fit' src="/assets/imgs/page/services/Membership.png" alt="Membership" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Apply for Membership</h5>
                                            <p className="font-md color-grey-700">Submit a formal application to join our organization.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <Image className='w-fit h-fit' src="/assets/imgs/page/services/application.png" alt="Application" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Application Accepted</h5>
                                            <p className="font-md color-grey-700">Receive confirmation that your application has been reviewed and accepted.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <Image className='w-fit h-fit' src="/assets/imgs/page/services/payfee.png" alt="Payfee" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Pay Membership Fee</h5>
                                            <p className="font-md color-grey-700">Complete the payment process for your membership fee.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <Image className='w-fit h-fit' src="/assets/imgs/page/services/paymentVerify.png" alt="VerifiedPayment" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Payment Verified</h5>
                                            <p className="font-md color-grey-700">Ensure your payment is processed and verified.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how">
                                            <span className="img">
                                                <Image className='w-fit h-fit' src="/assets/imgs/page/services/Membershipgranted.png" alt="Membership" width={100} height={100} />
                                            </span>
                                        </div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2">Membership Granted</h5>
                                            <p className="font-md color-grey-700">Officially receive your membership status and benefits.</p>
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
