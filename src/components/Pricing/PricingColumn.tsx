import { FiMinus, FiPlus } from 'react-icons/fi';

import { IPricing } from '@/types';

interface Props {
    tier: IPricing;
}

const PricingColumn: React.FC<Props> = ({ tier }) => {
    const { title, description, plans, features } = tier;

    return (
        <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
                <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                <p className="mt-4 text-foreground-accent">{description}</p>
            </div>
            <div className="flex-1 p-6">
                <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-hero-background/60">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground-accent"
                                >
                                    Возможности
                                </th>
                                {plans.map((plan) => (
                                    <th
                                        key={plan.name}
                                        scope="col"
                                        className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-foreground-accent"
                                    >
                                        <div className="text-sm font-semibold text-foreground">{plan.name}</div>
                                        <div className="mt-1 text-xs font-medium text-secondary">{plan.price}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white text-foreground">
                            {features.map((feature) => (
                                <tr key={feature.name}>
                                    <th
                                        scope="row"
                                        className="px-4 py-3 text-left text-sm font-medium text-foreground"
                                    >
                                        {feature.name}
                                    </th>
                                    {plans.map((plan) => {
                                        const isAvailable = feature.availability[plan.name];

                                        return (
                                            <td key={plan.name} className="px-4 py-3 text-center">
                                                <span
                                                    className={`inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                                                        isAvailable
                                                            ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
                                                            : 'border-red-200 bg-red-50 text-red-600'
                                                    }`}
                                                >
                                                    {isAvailable ? (
                                                        <>
                                                            <FiPlus aria-hidden className="h-3.5 w-3.5" />
                                                            <span>Да</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FiMinus aria-hidden className="h-3.5 w-3.5" />
                                                            <span>Нет</span>
                                                        </>
                                                    )}
                                                </span>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PricingColumn;
