'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleTheme, toggleSidebar, toggleRTL,  } from '@/store/themeConfigSlice';
import Dropdown from '@/app/(dashboard)/components/Dropdown';
import IconMenu from '@/public/icon/icon-menu';
import IconSearch from '@/public/icon/icon-search';
import IconXCircle from '@/public/icon/icon-x-circle';
import IconSun from '@/public/icon/icon-sun';
import IconMoon from '@/public/icon/icon-moon';
import IconLaptop from '@/public/icon/icon-laptop';
import IconBellBing from '@/public/icon/icon-bell-bing';
import IconUser from '@/public/icon/icon-user';
import IconMail from '@/public/icon/icon-mail';
import IconLockDots from '@/public/icon/icon-lock-dots';
import IconLogout from '@/public/icon/icon-logout';
import IconMenuDashboard from '@/public/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/public/icon/icon-caret-down';
import IconMenuForms from '@/public/icon/menu/icon-menu-forms';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import IconCaretsDown from '@/public/icon/icon-carets-down';
import IconMenuMembers from '@/public/icon/menu/icon-menu-members';
import IconMenuInvoice from '@/public/icon/menu/icon-menu-invoice';
import AnimateHeight from 'react-animate-height';
import IconMenuNotes from '@/public/icon/menu/icon-menu-notes';
import IconSettings from '@/public/icon/icon-settings';

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();
    const [currentMenu, setCurrentMenu] = useState('');

    const toggleMenu = (value) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul = selector.closest('ul.sub-menu');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [pathname]);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    const themeConfig = useSelector((state) => state.themeConfig);
    const setLocale = (flag) => {
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
        router.refresh();
    };

  

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]);

    const removeNotification = (value) => {
        setNotifications(notifications.filter((user) => user.id !== value));
    };

    const [search, setSearch] = useState(false);

    return (
        <main className={toggleTheme ? 'white' : ''}>
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative flex w-full items-center  px-4 py-2.5   dark:bg-black" >
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                    <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="inline w-24 ltr:-ml-1 rtl:-mr-1" src="/assets/imgs/template/logo.png" alt="logo" />
                        </Link>
                       
                        <button
                            type="button"
                            className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2  hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconMenu className="h-5 w-5 dark:text-white" />
                        </button>
                    </div>

                 
                    <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                            <button
                                type="button"
                                onClick={() => setSearch(!search)}
                                className="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden"
                            >
                                <IconSearch className="mx-auto h-4.5 w-4.5 dark:text-[#d0d2d6]" />
                            </button>
                        </div>
                        <div>
                            {themeConfig.theme === 'light' ? (
                                <button
                                    className={`${
                                        themeConfig.theme === 'light' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('dark'))}
                                >
                                    <IconSun />
                                </button>
                            ) : (
                                ''
                            )}
                            {themeConfig.theme === 'dark' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'dark' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('system'))}
                                >
                                    <IconMoon />
                                </button>
                            )}
                            {themeConfig.theme === 'system' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'system' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('light'))}
                                >
                                    <IconLaptop />
                                </button>
                            )}
                        </div>
                        <div className="dropdown shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                button={i18n.language && <img className="h-5 w-5 rounded-full object-cover" src={`/assets/images/flags/${i18n.language.toUpperCase()}.svg`} alt="flag" />}
                            >
                                <ul className="grid w-[280px] grid-cols-2 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    {themeConfig.languageList.map((item) => {
                                        return (
                                            <li key={item.code}>
                                                <button
                                                    type="button"
                                                    className={`flex w-full hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                    onClick={() => {
                                                        i18n.changeLanguage(item.code);
                                                        setLocale(item.code);
                                                    }}
                                                >
                                                    <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="h-5 w-5 rounded-full object-cover" />
                                                    <span className="ltr:ml-3 rtl:mr-3 font-normal">{item.name}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Dropdown>
                        </div>
                     
                        <div className="dropdown shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                button={
                                    <span>
                                        <IconBellBing />
                                        <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                                            <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                                            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                                        </span>
                                    </span>
                                }
                            >
                                <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-between px-4 py-2 font-semibold">
                                            <h4 className=" font-normal">Notification</h4>
                                            {notifications.length ? <span className="badge bg-primary/80">{notifications.length}New</span> : ''}
                                        </div>
                                    </li>
                                    {notifications.length > 0 ? (
                                        <>
                                            {notifications.map((notification) => {
                                                return (
                                                    <li key={notification.id} className="dark:text-white-light/90" onClick={(e) => e.stopPropagation()}>
                                                        <div className="group flex items-center px-4 py-2">
                                                            <div className="grid place-content-center rounded">
                                                                <div className="relative h-12 w-12">
                                                                    <img className="h-12 w-12 rounded-full object-cover" alt="profile" src={`/assets/images/${notification.profile}`} />
                                                                    <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                                                                <div className="ltr:pr-3 rtl:pl-3">
                                                                    <h6 className='h6-dashboard  '
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: notification.message,
                                                                        }}
                                                                    ></h6>
                                                                    <span className="block text-xs font-normal dark:text-gray-500">{notification.time}</span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                                                    onClick={() => removeNotification(notification.id)}
                                                                >
                                                                    <IconXCircle />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                            <li>
                                                <div className="p-4">
                                                    <button className="btn btn-primary btn-small block w-full">Read All Notifications</button>
                                                </div>
                                            </li>
                                        </>
                                    ) : (
                                        <li onClick={(e) => e.stopPropagation()}>
                                            <button type="button" className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                                                <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                                                    <IconInfoCircle fill={true} className="h-10 w-10 text-primary" />
                                                </div>
                                                No data available.
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                        <div className="dropdown flex shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative group block"
                                button={<img className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />}
                            >
                                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    <li>
                                        <div className="flex items-center px-4 py-4">
                                            <img className="h-10 w-10 rounded-md object-cover" src="/assets/images/user-profile.jpeg" alt="userProfile" />
                                            <div className="truncate ltr:pl-4 rtl:pr-4">
                                                <h4 className="text-base ">
                                                    John Doe
                                                    <span className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">Pro</span>
                                                </h4>
                                                <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                                    johndoe@gmail.com
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/users/profile" className="dark:hover:text-white">
                                            <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/apps/mailbox" className="dark:hover:text-white">
                                            <IconMail className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Inbox
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-lockscreen" className="dark:hover:text-white">
                                            <IconLockDots className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            Lock Screen
                                        </Link>
                                    </li>
                                    <li className="border-t border-white-light dark:border-white-light/10">
                                        <Link href="/auth/boxed-signin" className="!py-3 text-danger">
                                            <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {/* horizontal menu */}
                <ul className="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black rtl:space-x-reverse dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8">
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
                                <Link href="/apps/members" className="group">
                                    <div className="flex items-center">
                                        <IconMenuMembers className="shrink-0 group-hover:!text-primary " />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('members')}</span>
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
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'invoice' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('invoice')}>
                                    <div className="flex items-center">
                                        <IconMenuInvoice className="shrink-0 group-hover:!text-primary" />
                                        <span className="font-normal text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">{t('invoice')}</span>
                                    </div>

                                    <div className={currentMenu !== 'invoice' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretsDown />
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
            </div>
        </header>
        </main>
    );
};

export default Header;
