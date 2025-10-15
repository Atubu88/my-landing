import PricingColumn from './PricingColumn';

import { pricingOverview, tiers } from '@/data/pricing';

const Pricing: React.FC = () => {
    return (
        <div className="space-y-8 lg:space-y-10">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    {pricingOverview.category}
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-base text-foreground-accent md:flex-row md:flex-wrap md:items-center md:gap-4">
                    {pricingOverview.highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {tiers.map((tier) => (
                    <PricingColumn key={tier.title} tier={tier} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;
