'use client';

import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header from './Header';
import PageHead from './PageHead';
import Sidebar from './MobileSidebar';
import MapSection from '../../components/MapSection';

export const metadata = {
    title: 'GCA',
    description: 'GCA',
    
};

export default function Layout({ headerStyle, headTitle, children, topBarStyle }) {
    const [scroll, setScroll] = useState(0);

    const [openClass, setOpenClass] = useState('');

    const handleMobileMenuOpen = () => {
        document.body.classList.add('mobile-menu-active');
        setOpenClass('sidebar-visible');
    };

    const handleMobileMenuClose = () => {
        if (openClass === 'sidebar-visible') {
            setOpenClass('');
            document.body.classList.remove('mobile-menu-active');
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false,
        });
        window.wow.init();
    }, []);

    return (
        <main className="main-layout">
            <PageHead headTitle={headTitle} />
            <div className="body-overlay-1" onClick={handleMobileMenuClose} />
            {!headerStyle && <Header topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
            {headerStyle == 1 && <Header topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
            <Sidebar openClass={openClass} handleMobileMenuClose={handleMobileMenuClose} />
            <main className="main-ui">{children}</main>
            <MapSection />
            <Footer />

            <BackToTop />
        </main>
    );
}
