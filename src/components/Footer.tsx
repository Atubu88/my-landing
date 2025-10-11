import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background py-10 text-foreground">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <FaFingerprint className="h-5 w-5 min-w-fit md:h-7 md:w-7" />
                        <h3 className="manrope cursor-pointer text-xl font-semibold">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 text-lg font-semibold">Навигация</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 text-lg font-semibold">Контакты</h4>

                    {footerDetails.email && (
                        <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">
                            Телефон: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="mt-5 flex flex-wrap items-center gap-5">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                const url = footerDetails.socials[platformName];
                                if (platformName && url) {
                                    return (
                                        <Link
                                            href={url}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="text-foreground transition-colors hover:text-primary"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 px-6 text-foreground-accent md:text-center">
                <p>© {new Date().getFullYear()} {siteDetails.siteName}. Telegram-разработчик Codex.</p>
                <p className="mt-2 text-sm text-gray-500">
                    Сайт собран на Next.js и Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
