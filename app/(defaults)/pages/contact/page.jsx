import Link from 'next/link';
import Layout from '../../components/layout/Layout';
export default function Contact() {
    return (
        <Layout >
         <title>Contact</title>
            <div className="section d-block">
                <div className="box-map-contact wow animate__animated animate__fadeIn">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                        height={570}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className="mt-110" />
            <section className="section">
                <div className="cnt-center position-relative container">
                    <div className="box-cover-contactform">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-7">
                                <div className="box-contactform-left">
                                    <h3 className="color-primary-main mb-15 wow animate__animated animate__fadeIn">Still have question?</h3>
                                    <p className="font-md color-grey-900 mb-50 wow animate__animated animate__fadeIn">Can’t find the answer you are looking for? Please chat to our friendly team.</p>
                                    <form action="#">
                                        <div className="row wow animate__animated animate__fadeIn flex justify-evenly">
                                            <div className="lg:w-[49%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your name *" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[49%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your email *" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[49%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your phone number" />
                                                </div>
                                            </div>
                                            <div className="lg:w-[49%]">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Message / Note" rows={8} defaultValue={''} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 position-relative">
                                <div className="box-contactform-right text-white">
                                    <h5 className=" mb-20 text-white wow animate__animated animate__fadeIn">Headquarters</h5>
                                    <div className="map-info ">
                                        <p className="   mb-25 wow animate__animated animate__fadeIn">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        4517 Washington Ave. Manchester, Kentucky 39495</p>
                                        <p className="   wow animate__animated animate__fadeIn mb-10">
                                            <svg
                                                className="icon-16 color-brand-1 mr-10 inline-block"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                                />
                                            </svg>
                                            Phone: +01-246-357 (Any time 24/7)
                                        </p>
                                        <p className="   mb-30 wow animate__animated animate__fadeIn">
                                            <svg
                                                className="icon-16 color-brand-1 mr-10 inline-block"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                />
                                            </svg>
                                            Email: contact@transp.eu.com
                                        </p>
                                        <div className="line-border mb-25" />
                                        <p className="font-md-bold wow animate__animated animate__fadeIn">Hours: 8:00 - 17:00, Mon - Sat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-100">
                <div className="cnt-center container">
                    <h2 className="color-primary-main wow animate__animated animate__fadeIn mb-20">
                        We have branches in many
                        <br className="d-none d-lg-block" />
                        regions of the world
                    </h2>
                    <div className="row flex justify-between">
                        <div className="col-lg-6 col-md-6 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                                We has experience in handling the formalities and documentation required for your imports and exports. We work with all international station to guarantee that your
                                load will safely reach without any delays.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-30 text-md-end text-start w-fit">
                            <Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote">
                               Join Us
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-50 flex justify-evenly">
                        <div className="lg:w-[24%] col-md-5 mb-50">
                            <div className="cardService">
                                <div className="cardImage wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/contact/branch1.png" alt="transp" />
                                </div>
                                <div className="cardInfo wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                    <h6 className="color-brand-2 mb-15">Transp Shipping Co. USA</h6>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Address:</strong>123 Main Street, Suite 500, New York, NY 10001, USA
                                    </p>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Phone Number:</strong>+1-555-555-5555
                                    </p>
                                    <p className="font-xs color-grey-900">
                                        <strong className="color-brand-2">Email:</strong>contact@transp.eu.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-md-5 mb-50">
                            <div className="cardService">
                                <div className="cardImage wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/contact/branch2.png" alt="transp" />
                                </div>
                                <div className="cardInfo wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                    <h6 className="color-brand-2 mb-15">Shipping Co. Europe</h6>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Address:</strong>25 Avenue des Champs-Élysées, Paris, France
                                    </p>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Phone Number:</strong>+33 1 55 73 70 00
                                    </p>
                                    <p className="font-xs color-grey-900">
                                        <strong className="color-brand-2">Email:</strong>contact.eu@transp.eu.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-md-5 mb-50">
                            <div className="cardService">
                                <div className="cardImage wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/contact/branch3.png" alt="transp" />
                                </div>
                                <div className="cardInfo wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                    <h6 className="color-brand-2 mb-15">Shipping Co. Asia Pacific</h6>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Address:</strong>1-2-1 Otemachi, Chiyoda-ku, Tokyo, Japan
                                    </p>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Phone Number:</strong>+81 3 5251 5300
                                    </p>
                                    <p className="font-xs color-grey-900">
                                        <strong className="color-brand-2">Email:</strong>contact.jp@transp.eu.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-md-5 mb-50">
                            <div className="cardService">
                                <div className="cardImage wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/contact/branch4.png" alt="transp" />
                                </div>
                                <div className="cardInfo wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                    <h6 className="color-brand-2 mb-15">Shipping Co. Middle East</h6>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Address:</strong>Dubai Logistics City, Building B, Office 203, Dubai, UAE
                                    </p>
                                    <p className="font-xs color-grey-900 mb-10">
                                        <strong className="color-brand-2">Phone Number:</strong>+971 4 887 8000
                                    </p>
                                    <p className="font-xs color-grey-900">
                                        <strong className="color-brand-2">Email:</strong>contact@transp.eu.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
            <div className="mt-20" />
           
        </Layout>
    );
}
