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
            {description && (
                <div className="mb-12 space-y-3 text-center text-foreground-accent">
                    {description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            )}
            {children}
        </section>
    );
};

export default Section;
