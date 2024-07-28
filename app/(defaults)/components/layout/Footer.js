import Image from 'next/image';
import Link from 'next/link';

export default function Footer1({}) {
    return (
        <>
            <footer className="footer">
                <div className="footer-1 ">
                    <div className="cnt-center container">
                        <div className="row">
                            <div className="col-lg-4   mb-30">
                                <div className="mb-20">
                                    <Image src="/assets/imgs/template/logo-footer.png" alt="transp" width={182.62} height={80} />
                                </div>
                                <p className="font-xs color-white lg:w-[327px]  my-6 pr-3">
                                    Connecting freight forwarders worldwide, our platform fosters networking, collaboration, and business opportunities within the logistics industry. At GCA, we
                                    understand that the modern logistics landscape demands more than just connections; it requires a dynamic, supportive, and innovative community. That's why we've
                                    created a network that empowers independent freight forwarders to thrive in an increasingly competitive market.
                                </p>
                               
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 mb-30">
                                <h5 className="color-main mb-10">Quick Links</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/events">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="#">News</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-3 col-sm-4  mb-30">
                                <h5 className="color-main mb-10">Members</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="#">Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Search</Link>
                                    </li>
                                    <li>
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="/register">Join-Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-3 col-sm-4 mb-30">
                                <h5 className="color-main mb-10">Contact Us</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="#">Demo@email.com</Link>
                                    </li>
                                    <li> <Link href="#" >  +01-246-357 (Any time 24/7)</Link></li>
                                    <li><Link href="#" >  2972 Westheimer Rd. Santa Ana, Illinois 85486</Link></li>
                                </ul>
                                <div className="mt-15">
                                    <Link className="icon-socials icon-facebook" href="#" />
                                    <Link className="icon-socials icon-instagram" href="#" />
                                    <Link className="icon-socials icon-twitter" href="#" />
                                    <Link className="icon-socials icon-youtube" href="#" />
                                    <Link className="icon-socials icon-skype" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="cnt-center container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-lg-start text-center">
                                    <span className=" font-md">©GCA Official {new Date().getFullYear()}. All right reversed.</span>
                                </div>
                                <div className="col-lg-6 col-md-12 text-lg-end text-center">
                                    <ul className="menu-bottom">
                                        <li>
                                            <Link className="font-sm " href="#">
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="font-sm " href="#">
                                                Cookies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="font-sm " href="#">
                                                Terms of service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
