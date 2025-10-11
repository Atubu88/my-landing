import Image from 'next/image';
import clsx from 'clsx';

export interface PhoneFrameProps {
    image: string;
    alt?: string;
    className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ image, alt = 'Preview inside phone mockup', className }) => {
    return (
        <div
            className={clsx(
                'relative mx-auto aspect-[9/19.5] w-full max-w-[280px]',
                className,
            )}
        >
            <div className="relative h-full w-full rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-950 to-black p-2 shadow-[0_25px_45px_-20px_rgba(0,0,0,0.65)]">
                {/* Outer metallic rim */}
                <div className="relative h-full w-full rounded-[2.7rem] border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-2">
                    {/* Screen area */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black/90">
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 70vw, 280px"
                            className="object-cover"
                            priority={false}
                        />
                        {/* Subtle screen reflection */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 mix-blend-screen" />
                    </div>

                    {/* Gesture bar */}
                    <div className="pointer-events-none absolute bottom-4 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/40" />
                </div>

                {/* Top speaker notch */}
                <div className="pointer-events-none absolute left-1/2 top-3 h-3 w-20 -translate-x-1/2 rounded-full bg-black/70 shadow-inner" />
            </div>

            {/* Side power button */}
            <div className="pointer-events-none absolute right-[-6px] top-1/3 h-16 w-1.5 rounded-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-700 shadow-[inset_0_0_2px_rgba(255,255,255,0.35)]" />
        </div>
    );
};

export default PhoneFrame;
