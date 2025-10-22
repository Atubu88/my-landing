import PricingColumn from './PricingColumn';

import { pricingOverview, tiers } from '@/data/pricing';

const Pricing: React.FC = () => {
    return (
        <div className="space-y-8 lg:space-y-10">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Продукты</p>
                <div className="mt-4 flex flex-wrap gap-3">
                    {pricingOverview.categories.map((item) => (
                        <span
                            key={item}
                            className="inline-flex items-center rounded-full bg-hero-background/60 px-4 py-2 text-sm font-medium text-foreground"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {tiers.map((tier) => (
                    <PricingColumn key={tier.title} tier={tier} />
                ))}
            </div>
            <div className="flex flex-col justify-center gap-3 text-center sm:flex-row">
                {pricingOverview.ctas.map((cta) => (
                    <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary-accent"
                    >
                        {cta.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
