'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar, toggleTheme } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { useState, useEffect } from 'react';
import IconMenuDashboard from '@/public/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/public/icon/icon-caret-down';
import IconMenuNotes from '@/public/icon/menu/icon-menu-notes';
import IconMenuInvoice from '@/public/icon/menu/icon-menu-invoice';
import IconMenuForms from '@/public/icon/menu/icon-menu-forms';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import IconCaretsDown from '@/public/icon/icon-carets-down';
import IconMenuMembers from '@/public/icon/menu/icon-menu-members';
import IconSettings from '@/public/icon/icon-settings';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state) => state.themeConfig);
    const semidark = useSelector((state) => state.themeConfig.semidark);
    const [currentMenu, setCurrentMenu] = useState('');
    const toggleMenu = (value) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul = selector.closest('ul.sub-menu');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);
    
 
 



    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    return (
        <main className={toggleTheme ? 'white' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white  dark:bg-black">
                    <div className="flex items-center justify-between px-3 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="ml-[5px] w-24 flex-none" src="/assets/imgs/template/logo.png" alt="logo" />
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-2 py-0 font-semibold">
                            <li className="menu nav-item">
                                <Link href={'/dashboard'} type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`}>
                                    <div className="flex items-center">
                                        <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('dashboard')}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/apps/users" className="group">
                                    <div className="flex items-center">
                                        <IconMenuMembers className="shrink-0 group-hover:!text-primary " />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('users')}</span>
                                    </div>
                                </Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link href="/apps/application" className="group">
                                    <div className="flex items-center">
                                        <IconMenuForms className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('applications')}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/apps/members" className="group">
                                    <div className="flex items-center">
                                        <IconMenuMembers className="shrink-0 group-hover:!text-primary " />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('members')}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'invoice' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('invoice')}>
                                    <div className="flex items-center">
                                        <IconMenuInvoice className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('invoice')}</span>
                                    </div>

                                    <div className={currentMenu !== 'invoice' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'invoice' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <Link href="/apps/invoice/list">{t('list')}</Link>
                                        </li>
                                        <li>
                                            <Link href="/apps/invoice/preview">{t('preview')}</Link>
                                        </li>
                                        <li>
                                            <Link href="/apps/invoice/add">{t('add')}</Link>
                                        </li>
                                        <li>
                                            <Link href="/apps/invoice/edit">{t('edit')}</Link>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="nav-item">
                                <Link href="/apps/reviewedit" className="group">
                                    <div className="flex items-center">
                                        <IconMenuNotes className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('reviewedits')}</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('users')}>
                                    <div className="flex items-center">
                                        <IconSettings className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('setting')}</span>
                                    </div>

                                    <div className={currentMenu !== 'users' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <Link href="/users/profile">{t('profile')}</Link>
                                        </li>
                                        <li>
                                            <Link href="/users/user-account-settings">{t('account_settings')}</Link>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </main>
    );
};

export default Sidebar;
