import Image from 'next/image';
import clsx from 'clsx';

export interface PhoneFrameProps {
    image: string;
    alt?: string;
    className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
    image,
    alt = 'Preview inside phone mockup',
    className,
}) => {
    // Проверяем расширение, чтобы отличать видео от изображения
    const isVideo = /\.(mp4|webm|ogg)$/i.test(image);

    return (
        <div
            className={clsx(
                'relative mx-auto aspect-[9/19.5] w-full max-w-[280px]',
                className,
            )}
        >
            {/* Корпус телефона */}
            <div className="relative h-full w-full rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-950 to-black p-[6px] shadow-[0_25px_45px_-20px_rgba(0,0,0,0.65)]">
                {/* Металлическая рамка */}
                <div className="relative h-full w-full rounded-[2.7rem] border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-[5px]">
                    {/* Экран */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black">
                        {isVideo ? (
                            <video
                                src={image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="h-full w-full object-cover"
                                aria-label={alt}
                            />
                        ) : (
                            <Image
                                src={image}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 70vw, 280px"
                                className="object-cover"
                                priority={false}
                            />
                        )}

                        {/* Эффект блика на экране */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30 mix-blend-screen" />
                    </div>

                    {/* Полоска внизу (жестовая панель) */}
                    <div className="pointer-events-none absolute bottom-3 left-1/2 h-[6px] w-[80px] -translate-x-1/2 rounded-full bg-white/40" />
                </div>

                {/* Верхняя полоска (динамик) */}
                <div className="pointer-events-none absolute left-1/2 top-[6px] h-[5px] w-[60px] -translate-x-1/2 rounded-full bg-black/70 shadow-inner" />
            </div>

            {/* Боковая кнопка питания */}
            <div className="pointer-events-none absolute right-[-5px] top-1/3 h-[60px] w-[4px] rounded-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-700 shadow-[inset_0_0_1px_rgba(255,255,255,0.35)]" />
        </div>
    );
};

export default PhoneFrame;
