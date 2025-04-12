import React from 'react';
import { XIcon, LinkedInIcon, GitHubIcon, SubstackIcon } from './icons';

type SocialLinksProps = {
    className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
    return (
        <div className={className}>
            <a
                href="https://twitter.com/zalsolmus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="mr-4"
            >
                <XIcon className="h-5 w-5" />
            </a>
            <a
                href="https://linkedin.com/in/zalsolmus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="mr-4"
            >
                <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
                href="https://github.com/zalsolmus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="mr-4"
            >
                <GitHubIcon className="h-5 w-5" />
            </a>
            <a
                href="https://zalsolmus.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
            >
                <SubstackIcon className="h-5 w-5" />
            </a>
        </div>
    );
}; 