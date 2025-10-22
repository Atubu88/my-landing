import { IPricing } from '@/types';

export const pricingOverview = {
    categories: ['💇 BotLab Beauty', '🛍 BotLab Shop'],
    ctas: [
        {
            label: '🔗 Подключить салон / магазин',
            href: 'https://t.me/beauty_flow_bot',
        },
        {
            label: '💬 Задать вопрос в Telegram',
            href: 'https://t.me/codexdev',
        },
    ],
};

export const tiers: IPricing[] = [
    {
        title: 'BotLab Beauty',
        description: 'Онлайн-запись, напоминания, расписание и каталог мастеров — всё внутри Telegram.',
        plans: [
            {
                name: 'Free 💡',
                price: '0 ₽',
            },
            {
                name: 'Pro 🚀',
                price: '550 ₽/мес',
            },
        ],
        features: [
            {
                name: 'Онлайн-запись и напоминания',
                availability: {
                    'Free 💡': true,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Расписание и каталог мастеров',
                availability: {
                    'Free 💡': true,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Безлимит мастеров и записей',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Автоматические рассылки',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Аналитика и отчёты',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Мультиязычность',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
        ],
    },
    {
        title: 'BotLab Shop',
        description: 'Каталог, корзина и приём оплат — запускайте продажи прямо в Telegram без сайта.',
        plans: [
            {
                name: 'Free 💡',
                price: '0 ₽',
            },
            {
                name: 'Pro 🚀',
                price: '650 ₽/мес',
            },
        ],
        features: [
            {
                name: 'Каталог товаров',
                availability: {
                    'Free 💡': true,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Корзина и оформление заказов',
                availability: {
                    'Free 💡': true,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Онлайн-оплаты',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Скидки и промокоды',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Статистика и аналитика',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
            {
                name: 'Автоматические рассылки',
                availability: {
                    'Free 💡': false,
                    'Pro 🚀': true,
                },
            },
        ],
    },
];
