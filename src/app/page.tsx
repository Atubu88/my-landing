import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Section
          id="portfolio"
          title="Боты в действии"
          description={
            'Вот как ваши клиенты будут взаимодействовать с вами через Telegram.\nДва сценария — для салонов и магазинов в одном Telegram-формате.'
          }
        >
          <Portfolio />
        </Section>

        <Section
          id="services"
          title="Как это работает"
          description="Четыре простых шага, чтобы представить свой салон, магазин или студию в сообществе и получать клиентов из Telegram."
        >
          <Services />
        </Section>

        <Section
          id="benefits"
          title="Что вы получаете"
          description="Инструменты платформы помогают держать связь с клиентами и расти без сложных IT-настроек."
        >
          <Benefits />
        </Section>

        <Section
          id="pricing"
          title="Прозрачные тарифы"
          description="Выберите бота и тариф, который подходит вашему бизнесу."
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
