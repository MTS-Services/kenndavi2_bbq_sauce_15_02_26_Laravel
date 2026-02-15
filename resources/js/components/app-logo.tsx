import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <>
            <img src='/assets/images/sauces.png' alt="App Logo" className={cn("w-full h-auto object-contain", className)} {...props} />
        </>
    );
}
