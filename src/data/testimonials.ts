import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Алексей Громов',
        role: 'Руководитель поддержки, CityDelivery',
        message: `${siteDetails.siteName} помог нам внедрить голосового и чат-бота для службы доставки. 68% обращений теперь закрывается автоматически, а команда сфокусировалась на сложных кейсах.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Мария Лебедева',
        role: 'Digital Lead, BankPoint',
        message: `Мы запустили консультационного бота на сайте и в Telegram. Благодаря ${siteDetails.siteName} заявки на ипотеку выросли на 32%, а CRM получает всё общение в карточке клиента.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Дмитрий Агеев',
        role: 'COO, SaaS-платформа OnFlow',
        message: `${siteDetails.siteName} сопровождал нас после релиза: каждую неделю команда обновляет знания бота и отслеживает SLA. Среднее время ответа сократилось до 7 секунд.`,
        avatar: '/images/testimonial-3.webp',
    },
];
