import { FiGrid, FiLifeBuoy, FiMessageSquare, FiTrendingUp, FiUsers } from 'react-icons/fi';

import { IService } from '@/types';

export const benefits: IService[] = [
    {
        title: '💬 Telegram-бот под ваш бизнес',
        description: 'Быстрое решение для заказов и записей — полностью под вашим именем и без сайта.',
        icon: <FiMessageSquare size={28} />,
    },
    {
        title: '🌐 Каталог локальных компаний',
        description: 'Ваш бизнес виден в Telegram-канале города среди других предпринимателей.',
        icon: <FiGrid size={28} />,
    },
    {
        title: '🚀 Бесплатное продвижение на старте',
        description: 'Когда сообщество соберёт достаточное число участников, мы запустим городскую рекламную кампанию — для первых участников продвижение бесплатно.',
        icon: <FiTrendingUp size={28} />,
    },
    {
        title: '🤝 Естественный обмен клиентами',
        description: 'Клиенты, взаимодействующие с одним бизнесом, видят и другие — вы получаете новых клиентов без вложений.',
        icon: <FiUsers size={28} />,
    },
    {
        title: '💡 Поддержка и развитие',
        description: 'Мы помогаем с настройкой и совершенствуем платформу вместе с первыми участниками.',
        icon: <FiLifeBuoy size={28} />,
    },
];
