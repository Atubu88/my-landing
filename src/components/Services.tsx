import { services } from '@/data/services';

const Services: React.FC = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
                <article
                    key={service.title}
                    className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-foreground-accent">{service.description}</p>
                </article>
            ))}
        </div>
    );
};

export default Services;
