import { cn } from "@/lib/utils";

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GradientCard({ children, className, ...props }: GradientCardProps) {
    return (
        <div
            className={cn(
                "bg-gradient-to-br from-primary/5 to-primary-foreground/5 p-0.5 rounded-lg",
                className
            )}
            {...props}
        >
            <div className="bg-background rounded-lg p-5 h-full">
                {children}
            </div>
        </div>
    );
}