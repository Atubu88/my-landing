import { benefits } from '@/data/benefits';

const Benefits: React.FC = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(benefit => (
                <article
                    key={benefit.title}
                    className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-foreground-accent">{benefit.description}</p>
                </article>
            ))}
        </div>
    );
};

export default Benefits;
