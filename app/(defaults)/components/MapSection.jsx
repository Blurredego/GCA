import React from 'react';
import { usePathname } from 'next/navigation';
const MapSection = () => {
    const path = usePathname();

    if (path.match('login' || 'register')) {
        return null;
    }
    if (path.match('register')) {
        return null;
    }
    return (
        <div className="section bg-map d-block mt-12">
            <div className="cnt-center container">
                <div className="box-newsletter">
                    <h3 className="color-primary-main wow animate__animated animate__fadeIn mb-20">Get in Touch</h3>
                    <div className="row">
                        <div className="col-lg-5 mb-30">
                            <div className="form-newsletter wow animate__animated animate__fadeIn">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Your name *" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Your email *" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Weight" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Height" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={''} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-brand-1-big " style={{ backgroundColor: 'rgba(31, 20, 15, 1)' }} type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-30">
                            <div className="d-flex box-newsletter-right">
                                <div className="box-map-2 wow animate__animated animate__fadeIn">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s"
                                        height={242}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <ul className="list-info-footer">
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="cardImage">
                                            <span className="icon-brand-1 text-white" style={{ color: 'white' }}>
                                                <img src="/assets/imgs/page/homepage2/address.png" alt="transp" />
                                            </span>
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="font-sm-bold color-grey-900">Address</h6>
                                            <p className="font-sm color-grey-900">Lorem Ipsum is simply dummy tex</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="cardImage">
                                            <span className="icon-brand-1">
                                                <img src="/assets/imgs/page/homepage2/email.png" alt="transp" />
                                            </span>
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="font-sm-bold color-grey-900">Email</h6>
                                            <p className="font-sm color-grey-900">contact@demo.com</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="cardImage">
                                            <span className="icon-brand-1">
                                                <img src="/assets/imgs/page/homepage2/phone.png" alt="transp" />
                                            </span>
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                            <p className="font-sm color-grey-900">(+380) 50 318 47 07 - (+182) 50 318 47 07</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapSection;
