import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import IconMenuLocation from '../components/icon/menu/icon-menu-widgets';
import IconsIndustry from '../components/icon/menu/iconsIndustory';
import IconsCompany from '../components/icon/menu/iconsCompany';
import IconsAddres from '../components/icon/menu/iconaddressProfile';

const Profile = () => {
    const googleMapsUrl =
        'https://www.google.com/maps/search/?api=1&query=Unit+39%2C14%2FF%2C+Block+D%2C+Wah+Lok+Industrial+Centre%2C+No.31-35+Shan+Mei+Street%2C+Fo+Tan%2C+Shatin%2C+New+Territories%2C+Hong+Kong';

    return (
        <>
            <h3 className="mb-2 text-2xl font-bold">Profile</h3>

            <div className="flex flex-col rounded shadow-lg shadow-black md:flex-row">
                <div className="red h-auto w-full p-7 text-white md:h-screen md:max-w-[437px]">
                    <div className="mb-4 flex flex-col items-center">
                        <Image className="h-fit w-fit" src="/assets/images/logo-profile.png" alt="GCA" width={100} height={100} />
                        <h5 className="color-main pt-4 text-center md:text-left">GREATBOXX PTE. LTD</h5>
                        <h5 className="color-main flex items-center text-center md:text-left">
                            <IconMenuLocation className="mr-2" />
                            <span>Singapore</span>
                        </h5>
                    </div>

                    <h6 className="pb-2 text-white">About Company</h6>
                    <p>
                        We create a product combining NVOCC SOC Freight and International Container Trading providing an effective and cost competitive container supply chain solution supported by a
                        Best-in-Class Global NVOCC SOC and Container Trading System.
                    </p>
                    <div className="flex gap-2 pt-2">
                        <IconsIndustry className="pr-2" />
                        <span>
                            <h6 className="flex text-white">
                                <span>Industry Classification</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">Container Traders</p>
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <IconsCompany className="pr-2" />
                        <span>
                            <h6 className="flex text-white">
                                <span>Company Type</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">Limited Liability Company</p>
                        </span>
                    </div>
                    <div className="flex justify-start gap-2 pt-2">
                        <IconsAddres className="pr-2" />
                        <span>
                            <h6 className="flex text-white">
                                <span>Company Address</span>
                            </h6>
                            <p className="text-lg font-normal">
                                <Link className="text-gray-300" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                    Unit 39,14/F, Block D, Wah Lok Industrial Centre, Hong Kong
                                </Link>
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Image className="h-fit w-fit" src="/assets/images/icon-global.png" alt="GCA" width={18} height={18} />
                        <span>
                            <h6 className="flex text-white">
                                <span>Website</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">www.gcahkg.com</p>
                        </span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Image className="h-fit w-fit" src="/assets/images/icon-email.png" alt="GCA" width={18} height={18} />
                        <span>
                            <h6 className="flex text-white">
                                <span>Email</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">Info@gcahkg.com</p>
                        </span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Image className="h-fit w-fit" src="/assets/images/icon-phone.png" alt="GCA" width={18} height={18} />
                        <span>
                            <h6 className="flex text-white">
                                <span>Telephone Number</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">+852 6932 7488</p>
                        </span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Image className="h-fit w-fit" src="/assets/images/icon-staf.png" alt="GCA" width={18} height={18} />
                        <span>
                            <h6 className="flex text-white">
                                <span>Staff Strength</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">20</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image className="h-fit w-fit" src="/assets/images/icon-flex.png" alt="GCA" width={18} height={18} />
                        <span>
                            <h6 className="mt-2 flex text-white">
                                <span>Fax</span>
                            </h6>
                            <p className="text-lg font-normal text-gray-300">N/A</p>
                        </span>
                    </div>
                </div>
                <div className="w-full p-4 md:p-[70px]">
                    <h3 className="color-brand-1 ">Primary Contact</h3>
                    <hr className="red my-3 h-2 w-full" />
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Contact Person 1</h5>
                        <h5 className="font-normal dark:text-white">Hobart Low</h5>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Email Address 1</h5>
                        <h5 className="font-normal dark:text-white">hobart.low@greatboxx.com</h5>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Office 1</h5>
                        <h5 className="font-normal dark:text-white">N/A</h5>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Designation</h5>
                        <h5 className="font-normal dark:text-white">Founder</h5>
                    </div>
                    <div className="my-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Mobile 1</h5>
                        <h5 className="font-normal dark:text-white">+6596496117</h5>
                    </div>

                    <h3 className="color-brand-1">Secondary Contact</h3>
                    <hr className="red my-3 h-2 w-full" />
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Contact Person 2</h5>
                        <h5 className="font-normal dark:text-white">Evil Low</h5>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Email Address 1</h5>
                        <h5 className="font-normal dark:text-white">evil.low@greatboxx.com</h5>
                    </div>

                    <div className="my-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Designation</h5>
                        <h5 className="font-normal dark:text-white">Founder</h5>
                    </div>
                    <h3 className="color-brand-1">Download Files</h3>
                    <hr className="red my-3 h-2 w-full" />
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">Company Registration Certificate Greatbox</h5>
                        <Image className="h-fit w-fit" src="/assets/images/icon-download.png" width={20} height={20} />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <h5 className="text-normal dark:text-white">ID Of The Beneficial Owner</h5>
                        <Image className="h-fit w-fit" src="/assets/images/icon-download.png" width={20} height={20} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
