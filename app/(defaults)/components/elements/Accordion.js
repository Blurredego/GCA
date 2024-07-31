'use client';
import { useState } from 'react';

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? 'accordion-button text-heading-5 ' : 'accordion-button text-heading-5 collapsed'}>What is the main purpose of your platform?</button>
                    </h5>
                    <div className={isActive.key == 1 ? 'accordion-collapse' : 'accordion-collapse collapse'}>
                        <div className="accordion-body">
                            Our platform is designed to connect freight forwarders from around the globe, facilitating networking, collaboration, and business opportunities within the logistics and
                            freight forwarding industry.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? 'accordion-button text-heading-5 ' : 'accordion-button text-heading-5 collapsed'}>
                            What benefits do members receive by joining your network?
                        </button>
                    </h5>
                    <div className={isActive.key == 2 ? 'accordion-collapse' : 'accordion-collapse collapse'}>
                        <div className="accordion-body">
                            Members gain access to a global network of freight forwarders, detailed information on Rates, Tariffs, and SOPs, and additional features such as container buying and
                            selling, all aimed at enhancing their operational efficiency and business reach.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? 'accordion-button text-heading-5 ' : 'accordion-button text-heading-5 collapsed'}>
                            How can I become a member and join your network?
                        </button>
                    </h5>
                    <div className={isActive.key == 3 ? 'accordion-collapse' : 'accordion-collapse collapse'}>
                        <div className="accordion-body">
                        You can join our network by signing up through our website. Once registered, you'll be able to connect with other freight forwarders worldwide and access all our resources and services.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? 'accordion-button text-heading-5 ' : 'accordion-button text-heading-5 collapsed'}>
                            How does your platform help in optimizing logistics operations?
                        </button>
                    </h5>
                    <div className={isActive.key == 4 ? 'accordion-collapse' : 'accordion-collapse collapse'}>
                        <div className="accordion-body">
                            We provide up-to-date information on Rates, Tariffs, and SOPs for container movements, enabling members to plan and execute their logistics efficiently, reducing delays and
                            costs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? 'accordion-button text-heading-5 ' : 'accordion-button text-heading-5 collapsed'}>
                            Can I access a list of alliance depots and their details?
                        </button>
                    </h5>
                    <div className={isActive.key == 5 ? 'accordion-collapse' : 'accordion-collapse collapse'}>
                        <div className="accordion-body">
                            Yes, members can access a detailed list of global alliance depots, including information on Rates, Tariffs, and SOPs, by contacting the depots directly through our platform
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
