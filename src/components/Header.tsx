'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mobileMenuClasses = useMemo(
        () =>
            `bg-white shadow-lg md:hidden origin-top transition duration-200 ease-out transform ${
                isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
            }`,
        [isOpen],
    );

    return (
        <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full bg-transparent md:absolute">
            <Container className="!px-0">
                <nav className="mx-auto flex items-center justify-between bg-white px-5 py-2 shadow-md md:bg-transparent md:py-10 md:shadow-none">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <FaFingerprint className="h-7 w-7 min-w-fit text-foreground" />
                        <span className="manrope cursor-pointer text-xl font-semibold text-foreground">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden space-x-6 md:flex">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground transition-colors hover:text-foreground-accent">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href={siteDetails.telegram}
                                className="rounded-full bg-primary px-8 py-3 text-black transition-colors hover:bg-primary-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Написать в Telegram
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <div
                id="mobile-menu"
                className={mobileMenuClasses}
                aria-hidden={!isOpen}
            >
                <ul className="flex flex-col space-y-4 px-6 pb-6 pt-1">
                    {menuItems.map(item => (
                        <li key={item.text}>
                            <Link href={item.url} className="block text-foreground hover:text-primary" onClick={toggleMenu}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={siteDetails.telegram}
                            className="block w-fit rounded-full bg-primary px-5 py-2 text-black hover:bg-primary-accent"
                            target="_blank"
                            rel="noreferrer"
                            onClick={toggleMenu}
                        >
                            Написать в Telegram
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
