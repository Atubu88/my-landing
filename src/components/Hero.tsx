import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const { heading, subheading, primaryCta, secondaryCta, centerImageSrc } = heroDetails;

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center px-5 pb-0 pt-32 md:pt-40"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
                <h1 className="mx-auto max-w-3xl text-4xl font-bold text-foreground sm:text-5xl md:max-w-4xl md:text-6xl md:leading-tight">
                    {heading}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground md:text-xl">{subheading}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={primaryCta.href}
                        className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-primary-accent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {primaryCta.label}
                    </a>
                    <a
                        href={secondaryCta.href}
                        className="w-full sm:w-auto rounded-full border border-foreground/20 px-8 py-3 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {secondaryCta.label}
                    </a>
                </div>
                <Image
                    src={centerImageSrc}
                    width={480}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                    unoptimized
                    alt="Демонстрация интерфейса Telegram-бота"
                    className="relative z-10 mx-auto mt-12 w-full max-w-md md:mt-16 md:max-w-xl"
                />
            </div>
        </section>
    );
};

export default Hero;
