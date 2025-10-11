import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: 'Телеграм-боты, которые продают, консультируют и автоматизируют процессы прямо в Telegram.',
    quickLinks: [
        {
            text: 'Наши боты',
            url: '#portfolio',
        },
        {
            text: 'Услуги',
            url: '#services',
        },
        {
            text: 'Цены',
            url: '#pricing',
        },
        {
            text: 'FAQ',
            url: '#faq',
        },
    ],
    email: 'hello@codexbot.dev',
    telephone: '',
    socials: {
        telegram: 'https://t.me/codexdev',
        github: 'https://github.com/codex-bots',
        linkedin: 'https://www.linkedin.com/in/codexdev',
    },
};
