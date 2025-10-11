import Image from 'next/image';

import { portfolio } from '@/data/portfolio';

const Portfolio: React.FC = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            {portfolio.map(item => (
                <article
                    key={item.title}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-white/70 shadow-sm backdrop-blur"
                >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-foreground-accent">{item.description}</p>
                        </div>
                        <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-primary-accent"
                        >
                            Попробовать в Telegram
                        </a>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Portfolio;
