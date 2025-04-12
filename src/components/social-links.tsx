import { Button } from "@/components/ui/button";

interface Props {
    social: {
        name: string;
        url: string;
        icon: React.ComponentType<{ className?: string }>;
    }[];
}

export function SocialLinks({ social }: Props) {
    return (
        <div className="flex flex-wrap gap-2">
            {social.map((socialItem) => {
                const Icon = socialItem.icon;
                return (
                    <Button
                        key={socialItem.name}
                        className="h-9 w-9 bg-gradient-to-br from-primary/20 to-primary-foreground/20 p-0"
                        variant="ghost"
                        size="icon"
                        asChild
                        title={socialItem.name}
                    >
                        <a
                            href={socialItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <Icon className="size-5" />
                            <span className="sr-only">{socialItem.name}</span>
                        </a>
                    </Button>
                );
            })}
        </div>
    );
} 