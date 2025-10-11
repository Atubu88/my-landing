'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BiMinus, BiPlus } from 'react-icons/bi';

import SectionTitle from './SectionTitle';
import { faqs } from '@/data/faq';
import { siteDetails } from '@/data/siteDetails';

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-16 lg:py-24">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="lg:max-w-sm">
                    <p className="hidden text-foreground-accent lg:block">FAQ</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug text-center lg:text-left">Частые вопросы</h2>
                    </SectionTitle>
                    <p className="text-center text-foreground-accent lg:text-left">
                        Если не нашли ответа — пишите в Telegram или на почту.
                    </p>
                    <a
                        href={siteDetails.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 block text-center text-xl font-semibold text-secondary hover:underline lg:text-left"
                    >
                        {siteDetails.telegramLabel}
                    </a>
                    {siteDetails.contactEmail && (
                        <a href={`mailto:${siteDetails.contactEmail}`} className="mt-2 block text-center text-lg text-secondary hover:underline lg:text-left">
                            {siteDetails.contactEmail}
                        </a>
                    )}
                </div>

                <div className="w-full border-b lg:max-w-2xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between border-t px-4 pt-6 text-left text-lg">
                                            <span className="text-2xl font-semibold text-foreground">{faq.question}</span>
                                            {open ? <BiMinus className="h-5 w-5 text-secondary" /> : <BiPlus className="h-5 w-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pb-4 pt-3 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
