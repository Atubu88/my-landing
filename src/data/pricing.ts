import { IPricing } from '@/types';

export const pricingOverview = {
    category: '1️⃣ SaaS-боты аренда',
    highlights: ['💇 BotLab Beauty — Free / Pro', '🛍 BotLab Shop — Free / Pro'],
};

export const tiers: IPricing[] = [
    {
        title: '1️⃣ BotLab Beauty (для салонов)',
        description: '🧩 Онлайн-запись, напоминания, расписание и каталог мастеров.',
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
        title: '2️⃣ BotLab Shop (для магазинов)',
        description: '🛍 Каталог товаров, корзина и приём оплат прямо в Telegram.',
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
