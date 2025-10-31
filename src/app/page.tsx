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
          description="Четыре шага, чтобы подключить свой бизнес к платформе и стать частью сообщества в Telegram."
        >
          <Services />
        </Section>

        <Section
          id="benefits"
          title="Что вы получаете"
          description="Платформа объединяет локальные бизнесы в Telegram и даёт готовые инструменты для роста — без рекламы и технических сложностей."
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
