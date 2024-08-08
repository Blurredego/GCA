import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <ul className="main-menu ">
                <li>
                    <Link className="" href="/" title="HOME">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/pages/about">About Us</Link>
                </li>
                <li>
                    <Link href="/pages/benefits">Benefits</Link>
                </li>
                <li>
                    <Link href="/pages/events">Events</Link>
                </li>
                <li>
                    <Link href="/pages/blogs">News</Link>
                </li>

                <li>
                    <Link href="/pages/contact">Contact us</Link>
                </li>
                <li>
                    <Link href="/pages/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/pages/member">Members</Link>
                </li>
            </ul>
        </>
    );
}
