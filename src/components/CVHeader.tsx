import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import { ResumeData } from "@/data/resume-data";

interface CVHeaderProps {
    resumeData: ResumeData;
}

export function CVHeader({ resumeData }: CVHeaderProps) {
    return (
        <div className="cv-header mb-6">
            <div className="cv-header-photo">
                <Avatar className="size-24 relative border-2 border-muted bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10">
                    <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
                    <AvatarFallback>{resumeData.initials}</AvatarFallback>
                </Avatar>
            </div>
            <div className="cv-header-details">
                <h1 className="text-3xl font-bold">{resumeData.name}</h1>
                <p className="text-xl text-muted-foreground">{resumeData.about}</p>
                {resumeData.location && (
                    <p className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{resumeData.location}</span>
                    </p>
                )}
            </div>
        </div>
    );
}