import { portfolio } from '@/data/portfolio';

const Portfolio: React.FC = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            {portfolio.map(item => (
                <article
                    key={item.title}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-white/70 shadow-sm backdrop-blur"
                >
                    <div className="flex items-center justify-center bg-foreground/5 p-6">
                        <div className="relative aspect-[9/19.5] w-full max-w-[280px]">
                            <div className="absolute inset-0 rounded-[2.8rem] border-[8px] border-black/80 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-[0_18px_36px_-18px_rgba(0,0,0,0.55)]">
                                <div className="absolute inset-0">
                                    <div className="absolute left-1/2 top-2.5 h-2.5 w-14 -translate-x-1/2 rounded-full bg-black/60" />
                                    <div className="absolute inset-[10px] rounded-[2.3rem] bg-gradient-to-br from-white via-white to-foreground/10">
                                        <div className="absolute inset-5 rounded-[1.7rem] border border-dashed border-foreground/25" />
                                    </div>
                                    <div className="absolute bottom-2.5 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-black/60" />
                                </div>
                                <div className="absolute right-[-10px] top-1/2 h-14 w-1.5 -translate-y-1/2 rounded-full bg-gray-800 shadow-[inset_0_0_2px_rgba(255,255,255,0.35)]" />
                            </div>
                        </div>
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
