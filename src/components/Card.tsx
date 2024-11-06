import grainImage from '@/assets/images/grain.jpg'
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge'

const Card = ({ className, children }: PropsWithChildren<{
    className?: string;
}>) => {
    return (
        <div>
            <div
                className={twMerge("bg-gray-800 rounded-3xl relative overflow-hidden p-6 border border-white/60"
                    , className)}>
                <div
                    className="absolute inset-0 -z-10 opacity-5 bg-cover"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div>
                {children}
            </div>
        </div>
    )
}

export default Card