import Image from "next/image";
import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer">
                <div className="footer-1 ">
                    <div className="container cnt-center">
                        <div className="row">
                            <div className="col-lg-3 width-23 mb-30">
                                <div className="mb-20"><Image src="/assets/imgs/template/logo-footer.png" alt="transp" width={182.62} height={80} /></div>
                                <p className="font-xs mb-20 color-white pr-3">We fuse our global network with our depth of expertise in
                                    air freight, ocean freight, railway transportation, trucking, and multimode transportation,
                                    also we are providing sourcing, warehousing, E-commercial fulfillment, and value-added
                                    service to our customers including kitting, assembly, customized package and business
                                    inserts, etc.</p>
                                <h6 className="color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-youtube" href="#" /><Link className="icon-socials icon-skype" href="#" /></div>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-main">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/about">Mission &amp; Vision</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Advertising</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-main">Industries</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Global coverage</Link></li>
                                    <li><Link href="#">Distribution</Link></li>
                                    <li><Link href="#">Accounting Tools</Link></li>
                                    <li><Link href="#">Freight Recovery</Link></li>
                                    <li><Link href="#">Supply Chain</Link></li>
                                    <li><Link href="#">Warehousing</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-main">Services</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Air Freight</Link></li>
                                    <li><Link href="#">Ocean Freight</Link></li>
                                    <li><Link href="#">Railway Freight</Link></li>
                                    <li><Link href="#">Warehousing</Link></li>
                                    <li><Link href="#">Distribution</Link></li>
                                    <li><Link href="#">Value added</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container cnt-center">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className=" font-md">©Transp Official {new Date().getFullYear()}. All right reversed.</span></div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm " href="/term-conditions">Privacy policy</Link>
                                        </li>
                                        <li><Link className="font-sm " href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm " href="/term-conditions">Terms of service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
