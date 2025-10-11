import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Section
          id="portfolio"
          title="Наши боты"
          description="Пара реальных проектов, которые уже помогают автоматизировать рутину клиентов прямо в Telegram."
        >
          <Portfolio />
        </Section>

        <Section
          id="services"
          title="Что мы делаем"
          description="Прорабатываем полный цикл — от идеи и сценариев до автоматизации и поддержки прямо в Telegram."
        >
          <Services />
        </Section>

        <Section
          id="pricing"
          title="Цены"
          description="Прозрачные пакеты для старта, роста и запуска SaaS-решений."
        >
          <Pricing />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
