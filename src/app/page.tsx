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
          title="Наши продукты"
          description="Два Telegram-бота, которые автоматизируют ваш бизнес."
        >
          <Portfolio />
        </Section>

        <Section
          id="services"
          title="Как это работает"
          description="Мы создали платформу готовых Telegram-ботов, которые вы можете арендовать под свой бизнес. Подключение занимает 5 минут, настройка — прямо в Telegram."
        >
          <Services />
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
