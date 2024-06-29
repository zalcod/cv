import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zal Solmuş",
  initials: "ZS",
  location: "Turkey",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "A Mobile App developer with a passion for software.",
  summary: "This is Zal. I'm a Software Developer with over 2 years of experience in software development. I hold a Bachelor's degree in Computer Engineering. I've been developing applications for Android and iOS platforms using Flutter since 2021 and making a living out of Flutter development. I started my professional career while still a student and continue to actively engage in development projects. Throughout my career, I have participated in numerous projects both voluntarily and professionally.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72752991?s=400&u=e87faf52f7e267b08c937f01b1e5f16da85ca6ff&v=4",
  personalWebsiteUrl: "https://zalsolmus.com",
  contact: {
    email: "zalsolmus@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zalcod",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zalcod/",
        icon: LinkedInIcon,
      },
      /* {
        name: "X",
        url: "https://x.com/zalcod",
        icon: XIcon,
      }, */
    ],
  },
  education: [
    {
      school: "Yalova University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2021",
      end: "2024",
      additionalInfo: "Transferred from Çukurova University.",
    },
    {
      school: "Çukurova University",
      degree: "English Prep Class and first-year coursework",
      start: "2020",
      end: "2021",
      additionalInfo: "Completed with a GPA of 3.43.",
    },
  ],
  work: [
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Remote"],
      title: "Flutter Developer",
      logo: "", // Add the appropriate logo URL if available
      start: "January 2023",
      end: "Present",
      description:
        "Published several applications developed with Flutter on the App Store and Play Store, including 'Sleepy Baby: White Noise', 'Kindertrack', and 'Kinderway'. Participated in all stages of the mobile application development process and solved various technical challenges. Worked with state management solutions like GetX and Provider. Implemented UI and UX on the code side by adhering to responsive design principles.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Remote"],
      title: "Flutter Developer Intern",
      logo: "", // Add the appropriate logo URL if available
      start: "August 2022",
      end: "January 2023",
      description:
        "Contributed to the development of 'Sleepy Baby: White Noise' and 'Sufi Sound: White Noise' mobile applications. Enhanced skills by engaging in the complete mobile application development lifecycle.",
    },
    {
      company: "Gorsentam Agriculture Technologies",
      link: "", // Add the appropriate link if available
      badges: ["Remote"],
      title: "Flutter Developer Intern",
      logo: "", // Add the appropriate logo URL if available
      start: "August 2022",
      end: "January 2023",
      description:
        "Developed a mobile application focused on agricultural technologies using Flutter. Gained proficiency in Dart and worked on UI/UX design and mobile app development.",
    },
  ],
  skills: [
    "Flutter",
    "Leadership",
    "Clean Code",
    "HTML & CSS",
    "Webflow",
    "UI & UX Design",
    "JavaScript",
    "Dart",
  ],
  projects: [
    {
      title: "Sleepy Baby: White Noise",
      techStack: ["Flutter", "Dart"],
      description:
        "A mobile app providing white noise sounds for babies to help them sleep.",
      logo: "", // Add the appropriate logo URL if available
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.whitesound&hl=en_CA&gl=US",
      },
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "Parent-Child Tracking Application.",
      logo: "", // Add the appropriate logo URL if available
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US",
      },
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "An application for tracking parent-child activities.",
      logo: "", // Add the appropriate logo URL if available
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US",
      },
    },
  ],
  extracurricularActivities: [
    {
      role: "Trainee",
      organization: "Game & App Academy (Google and T3)",
      start: "January 2024",
      end: "May 2024",
      description:
        "Received training on application development with Flutter and participated in various events. Attended courses such as Project Management and application development for iOS and Android devices with Flutter.",
    },
    {
      role: "Event Organizer",
      organization: "DC Flutter Community",
      start: "October 2023",
      end: "November 2023",
      description:
        "Organized a mentor-mentee event to connect experienced developers with new entrants to the industry.",
    },
    {
      role: "Core Team Member",
      organization: "GDSC Yalova",
      start: "September 2022",
      end: "June 2023",
      description:
        "Organized various software events and invited renowned software developers from Turkey. Strengthened the community by hosting a DevFest event.",
    },
    {
      role: "Core Team Member",
      organization: "GDSC Çukurova",
      start: "October 2020",
      end: "April 2021",
      description:
        "Organized various software events and invited renowned software developers from Turkey.",
    },
  ],
  languages: ["English", "Turkish"],
} as const;
