import { FiCpu, FiDatabase, FiGitMerge, FiGlobe, FiHeadphones, FiLayers, FiMessageCircle, FiUsers, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Проектирование сценариев",
        description: "Исследуем потребности, выстраиваем голос и тональность чат-бота и создаём сценарии, которые ведут пользователя к нужному действию.",
        bullets: [
            {
                title: "Диалоговые карты",
                description: "Визуализируем ветки общения и точки эскалации для команды и стейкхолдеров.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Омниканальные потоки",
                description: "Проектируем сценарии для сайта, мессенджеров и голосовых ассистентов одновременно.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Материалы для операторов",
                description: "Готовим подсказки и шаблоны ответов для команды поддержки.",
                icon: <FiUsers size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Интеграция и автоматизация",
        description: "Связываем чат-ботов с вашей CRM, базами знаний и сервисами, чтобы они выполняли рутинные процессы без участия оператора.",
        bullets: [
            {
                title: "Подключение к CRM",
                description: "Настраиваем двусторонний обмен данными с Bitrix24, amoCRM и другими системами.",
                icon: <FiGitMerge size={26} />
            },
            {
                title: "Работа с данными",
                description: "Передаём заявки, статусы и файлы в режиме реального времени.",
                icon: <FiDatabase size={26} />
            },
            {
                title: "Автопроцессы",
                description: "Запускаем цепочки писем, вебхуки и уведомления для команды и клиентов.",
                icon: <FiZap size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Обучение и поддержка ИИ-агентов",
        description: "Проводим обучение модели на ваших данных, обновляем знания и сопровождаем бота после запуска.",
        bullets: [
            {
                title: "Настройка AI-модели",
                description: "Подбираем промпты, temperature и память под бизнес-задачи.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Мультиязычность",
                description: "Обучаем ботов работать с несколькими языками и сценариями.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Саппорт 24/7",
                description: "Команда мониторинга обновляет знания и реагирует на аномалии.",
                icon: <FiHeadphones size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
