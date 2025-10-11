import { FiCpu, FiGlobe, FiLayers, FiSettings, FiZap } from 'react-icons/fi';

import { IService } from '@/types';

export const services: IService[] = [
    {
        title: 'Создание Telegram-ботов под ключ',
        description: 'Проектируем структуру, диалоги и визуал, подключаем аналитику и запускаем без вашего погружения в технические детали.',
        icon: <FiSettings size={28} />,
    },
    {
        title: 'Оплаты и подписки в Telegram',
        description: 'Настраиваем платежи, подписки и выдачу доступа через официальные инструменты Telegram, без сторонних сервисов.',
        icon: <FiLayers size={28} />,
    },
    {
        title: 'Управление прямо в боте',
        description: 'Создаём удобные меню и мини-приложения в Telegram, чтобы обновлять контент и отслеживать заявки в пару кликов.',
        icon: <FiCpu size={28} />,
    },
    {
        title: 'Умная логика и сценарии',
        description: 'Подключаем LLM, квизы, напоминания и сложные ветвления, чтобы бот разговаривал так, как нужно вашему бизнесу.',
        icon: <FiZap size={28} />,
    },
    {
        title: 'Мультиязычность и SaaS-системы',
        description: 'Делаем ботов, которые обслуживают клиентов на нескольких языках и работают как продукт для ваших партнёров.',
        icon: <FiGlobe size={28} />,
    },
];
