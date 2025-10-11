import SectionTitle from './SectionTitle';

interface Props {
    id: string;
    title: string;
    description?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className="py-16 lg:py-24">
            <SectionTitle>
                <h2 className="text-center mb-4">{title}</h2>
            </SectionTitle>
            {description && <p className="mb-12 text-center text-foreground-accent">{description}</p>}
            {children}
        </section>
    );
};

export default Section;
