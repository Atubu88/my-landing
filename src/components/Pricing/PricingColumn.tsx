import clsx from 'clsx';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { IPricing } from '@/types';
import { siteDetails } from '@/data/siteDetails';

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx('w-full max-w-sm mx-auto rounded-xl border border-gray-200 bg-white lg:max-w-full', { 'shadow-lg ring-1 ring-primary/40': highlight })}>
            <div className="rounded-t-xl border-b border-gray-200 p-6">
                <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
                <p className="mb-6 text-3xl font-bold text-secondary md:text-5xl">
                    {typeof price === 'number' ? `${price} ₽` : price}
                </p>
                <a
                    href={siteDetails.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx('inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-base font-semibold transition-colors', {
                        'bg-primary text-black hover:bg-primary-accent': highlight,
                        'bg-hero-background text-foreground hover:bg-gray-200': !highlight,
                    })}
                >
                    Обсудить проект
                </a>
            </div>
            <div className="p-6">
                <p className="mb-0 text-sm font-bold uppercase tracking-wide text-foreground">Что входит</p>
                <p className="mb-5 text-foreground-accent">Настрою пакет под вашу задачу и подсвечу шаги запуска.</p>
                <ul className="mb-8 space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="mr-2 h-5 w-5 text-secondary" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingColumn;
