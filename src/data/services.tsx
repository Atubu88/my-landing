import { FiCheckCircle, FiSend, FiUsers, FiZap } from 'react-icons/fi';

import { IService } from '@/types';

export const services: IService[] = [
    {
        title: 'Подключаете бизнес к платформе',
        description: 'Рассказываете о салоне, магазине или студии и выбираете сценарии для Telegram-бота.',
        icon: <FiZap size={28} />,
    },
    {
        title: 'Мы публикуем в общем Telegram-канале',
        description: 'Ваше предложение появляется в сообществе рядом с другими локальными бизнесами.',
        icon: <FiSend size={28} />,
    },
    {
        title: 'Клиенты находят вас и записываются',
        description: 'Покупатели листают услуги и отправляют заявки через Telegram-бота без ожидания ответа администратора.',
        icon: <FiUsers size={28} />,
    },
    {
        title: 'Получаете заявки без сложных инструментов',
        description: 'Бот отправляет уведомления, а вы подтверждаете новые заказы и ведёте клиентов так, как привыкли.',
        icon: <FiCheckCircle size={28} />,
    },
];
