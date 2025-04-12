import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "./icons";
import { Button } from "./ui/button";
import { ResumeData } from "@/data/resume-data";

interface ProjectCardProps {
  project: ResumeData["projects"][number];
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-muted bg-gradient-to-br from-primary/5 to-primary-foreground/5 transition-colors hover:bg-accent">
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h2>
              {project.logo && typeof project.logo === "string" && (
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              )}
            </div>
            <div className="line-clamp-4 text-sm leading-snug text-muted-foreground">
              {project.description}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-full bg-gradient-to-br from-primary/20 to-primary-foreground/20 px-3 py-1 text-xs"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link href={project.link.href} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="w-full bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground hover:from-primary-foreground hover:to-primary">
              {project.link.label}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
