import Link from "next/link";
import Image from "next/image";
import networkingImg  from '../../../../public/assets/imgs/page/homepage1/networking.png'
import globalcard from '../../../../public/assets/imgs/page/homepage1/globalcard.png'
import financial from '../../../../public/assets/imgs/page/homepage1/financial.png'
import marketing from '../../../../public/assets/imgs/page/homepage1/marketing.png'
import gca from '../../../../public/assets/imgs/page/homepage1/GCA.png'
import news from '../../../../public/assets/imgs/page/homepage1/news.png'
export default function Services() {
    return (
        <>
            <section className="section mt-100 ">
                <div className="container cnt-center">
                    <h2 className=" mb-20 wow animate__animated animate__fadeIn">What We Offer </h2>
                    <div className="row align-items-end">
                        <div className="col-lg-10 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Comprehensive Solutions Tailored for Independent Freight Forwarders</p>
                        </div>
                        <div className="col-lg-2 col-md-4 text-nowrap  mb-30 max-md:w-36 text-md-end text-start ">
                        <Link className="btn btn-brand-1 hover-up shadow-none" href="/register">

                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Join Us</Link></div>
                    </div>
                    <div className="mt-20 box-background-offer  ">
                    
                        <div className="bg-under max-[600px]:hidden" />
                        <div className="row gap-4 justify-center justify-self-center">
                            <div className="lg:w-[30%]  col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image ">
                                    <div className="w-[80px] h-[80px] rounded-full bg-[#DE2910] flex justify-center items-center  " >

                                   <Image className="w-fit h-fit" src={globalcard.src} alt="gca"  width={100} height={100}/>
                                    </div>
                                    
                                    </div>
                                    <div className="card-info">
                                        <h5 className=" mb-15">Global Reach</h5>
                                        <p className="font-sm color-grey-900 mb-35">Connect with a vast network of trusted freight forwarders worldwide. Our extensive global presence ensures that your cargo reaches any destination with efficiency and reliability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><Image className="w-fit h-fit" src={networkingImg.src} alt="gca"  width={100} height={100}/>
                                    </div>
                                    <div className="card-info">
                                        <h5 className="mb-15">Networking Events</h5>
                                        <p className="font-sm color-grey-900 mb-35">Participate in exclusive events designed to foster collaboration and build lasting relationships. Our networking opportunities allow you to connect with industry leaders and expand your business horizons.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                    <Image className="w-fit h-fit" src={financial.src} alt="gca"  width={100} height={100}/>

                                    </div>
                                    <div className="card-info">
                                        <h5 className=" mb-15">Financial Protection</h5>
                                        <p className="font-sm color-grey-900 mb-35">Safeguard your transactions with our robust financial protection programs. GCA offers comprehensive solutions to minimize risk and provide peace of mind in your business dealings.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up  " >
                                    <div className="card-image">
                                    <Image className="w-fit h-fit" src={marketing.src} alt="gca"  width={100} height={100}/>
                                    </div>
                                    <div className="card-info">
                                        <h5 className=" mb-15">Marketing &amp; Promotion </h5>
                                        <p className="font-sm color-grey-900 mb-35">We are professional in ocean freight with
                                            more than 12 years of experience and have shipped more than 100k shipments.</p>
                                      
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up ">
                                    <div className="card-image">
                                    <Image className="w-fit h-fit" src={gca.src} alt="gca"  width={100} height={100}/>
                                    </div>
                                    <div className="card-info">
                                        <h5 className=" mb-15">GCA Insurance</h5>
                                        <p className="font-sm color-grey-900 mb-35">Protect your shipments with GCA's comprehensive insurance coverage. Our specialized insurance solutions are designed to meet the unique needs of freight forwarders, ensuring your cargo is secure at every stage.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] col-md-5 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                    <Image className="w-fit h-fit" src={news.src} alt="gca"  width={100} height={100}/>
                                   
                                    
                                    </div>
                                    <div className="card-info">
                                        <h5 className=" mb-15">Latest News</h5>
                                        <p className="font-sm color-grey-900 mb-35">Discover the most recent developments and insights in the logistics industry with our up-to-date news and articles.</p>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
