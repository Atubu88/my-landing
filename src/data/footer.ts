import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: 'Платформа Codex объединяет локальные бизнесы в Telegram, помогает находить клиентов и удерживать их вниманием.',
    quickLinks: [
        {
            text: 'Боты в действии',
            url: '#portfolio',
        },
        {
            text: 'Как это работает',
            url: '#services',
        },
        {
            text: 'Что вы получаете',
            url: '#benefits',
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
