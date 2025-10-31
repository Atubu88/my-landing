import { FiBell, FiBarChart2, FiHeadphones, FiShare2 } from 'react-icons/fi';

import { IService } from '@/types';

export const benefits: IService[] = [
    {
        title: 'Telegram-бот для заказов и записей',
        description: 'Локальные клиенты находят услуги, выбирают время и оставляют заявки прямо в переписке с ботом.',
        icon: <FiShare2 size={28} />,
    },
    {
        title: 'Размещение в канале сообщества',
        description: 'Ваш бизнес появляется в подборках и рекомендациях внутри общего Telegram-канала Codex Community.',
        icon: <FiBarChart2 size={28} />,
    },
    {
        title: 'Уведомления и напоминания клиентам',
        description: 'Система сама напоминает о записи, отправляет купоны и помогает возвращать клиентов повторно.',
        icon: <FiBell size={28} />,
    },
    {
        title: 'Поддержка и аналитика',
        description: 'Команда помогает настроить сценарии и показывает, как растут заявки и вовлечённость.',
        icon: <FiHeadphones size={28} />,
    },
];
