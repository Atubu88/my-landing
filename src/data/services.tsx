import { FiGlobe, FiMessageCircle, FiRefreshCw, FiSliders } from 'react-icons/fi';

import { IService } from '@/types';

export const services: IService[] = [
    {
        title: 'Полный цикл автоматизации',
        description: 'От записи клиентов до напоминаний — платформа сама ведёт клиента и разгружает команду.',
        icon: <FiRefreshCw size={28} />,
    },
    {
        title: 'Управление в Telegram',
        description: 'Добавляйте мастеров, товары и услуги без отдельной панели — всё настраивается прямо в боте.',
        icon: <FiSliders size={28} />,
    },
    {
        title: 'Мультиязычность и часовые пояса',
        description: 'Работает для сетей в разных городах и странах — бот сам учитывает язык и локальное время.',
        icon: <FiGlobe size={28} />,
    },
    {
        title: 'Уведомления и рассылки',
        description: 'Автоматические сообщения и кампании в пару кликов — поддерживайте контакт с клиентами без рутины.',
        icon: <FiMessageCircle size={28} />,
    },
];
