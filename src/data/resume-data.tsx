import { SleepyLogo } from "@/images/logos";
import { BlueskyIcon, GitHubIcon, LinkedInIcon, SubstackIcon, XIcon } from "../components/icons";
import { icons } from "lucide-react";
import { StaticImageData } from "next/image";

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  cities: string[];
  workModes: ("onSite" | "hybrid" | "remote")[];
  about: string;
  summary: string;
  homeSummary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: any;
    }[];
  };
  certifications: string[];
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
    additionalInfo: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo: string | StaticImageData;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    logo: string | StaticImageData;
    link: {
      label: string;
      href: string;
    };
  }[];
  extracurricularActivities: {
    role: string;
    organization: string;
    start: string;
    end: string;
    description: string;
  }[];
  languages: string[];
  blogPosts: {
    title: string;
    description: string;
    url: string;
  }[];
};

export const RESUME_DATA_EN: ResumeData = {
  name: "Zal Solmuş",
  initials: "ZS",
  location: "Konya, Turkey • Open to Istanbul / Bursa • Hybrid or Remote",
  locationLink: "https://www.google.com/maps/place/Bursa",
  cities: ["Konya", "Istanbul", "Bursa"],
  workModes: ["hybrid", "remote", "onSite"],
  about: "Software Developer | Business Analyst",
  summary:
    "Software Developer and Business Analyst with approximately four years of experience building user-facing products. Specialized in cross-platform mobile development with Flutter since 2021, with growing expertise in full-stack development, infrastructure, and business analysis. Most of my career has been spent inside startup environments and end-to-end delivery teams — working hands-on across every layer of the product and collaborating closely with project management to take ideas from first requirements to release. Comfortable moving between technical execution and business process: writing code, modeling workflows, and translating stakeholder needs into clear specifications.",
  homeSummary:
    "Software Developer and Business Analyst with ~4 years of experience building products across mobile, SaaS, full-stack, and infrastructure.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72752991?s=400&u=13788f78610ac957e9ab779ebc20815f0e4713f3&v=4",
  personalWebsiteUrl: "https://zalsolmus.com",
  contact: {
    email: "zalsolmus@gmail.com",
    tel: "+90 543 747 89 77",
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
      {
        name: "Bluesky",
        url: "https://bsky.app/profile/zalsolmus.com",
        icon: BlueskyIcon,
      },
      {
        name: "Substack",
        url: "https://zalsolmus.substack.com",
        icon: SubstackIcon,
      }
    ],
  },
  certifications: [
    "Google Project Management Fundamentals",
    "Front-End & React 18.x from Scratch (52+ Hours Bootcamp)",
    "Flutter Bootcamp Participation Certificate",
    "GDSC Core Team Member — Certificate of Appreciation (2020 – 2021)",
  ],
  education: [
    {
      school: "Yalova University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "Sep 2021",
      end: "Jun 2024",
      additionalInfo: "Transferred from Çukurova University.",
    },
    {
      school: "Çukurova University",
      degree: "English Prep Class and first-year coursework",
      start: "2019",
      end: "2021",
      additionalInfo: "Completed with a GPA of 3.43.",
    }
    ,
    {
      school: "Ceylanpınar Science High School",
      degree: "High School Diploma",
      start: "2014",
      end: "2018",
      additionalInfo: "",
    },
  ],
  work: [
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["On-site"],
      title: "Full Stack Developer",
      logo: "",
      start: "August 2025",
      end: "Present",
      description:
        "Migrated legacy projects inherited from previous software agencies and freelance developers into the company's infrastructure by moving them to VPS servers and integrating version control systems. Planned and implemented a CI/CD workflow tailored for small development teams, improving release efficiency and reducing deployment friction. Relocated infrastructure to Cloudflare, strengthening security posture and improving performance across all active projects. Extended and modernized the Falcon Motorcycle website at the PHP source-code level, delivering UI and UX improvements; applied a similar modernization approach across seven additional projects. Rebuilt the Kolat Group corporate website from the ground up as an infographic-driven experience.",
    },
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["On-site"],
      title: "Business Analyst",
      logo: "",
      start: "August 2025",
      end: "Present",
      description:
        "Support the business analysis process within the production group by documenting existing workflows and gathering requirements from internal stakeholders. Help bridge business units and technical teams by translating operational needs into clear, actionable specifications. Contribute to the design of new workflows and assist in the planning and rollout of system integrations.",
    },
    {
      company: "Eczacibasi Evital",
      link: "https://evital.com.tr/",
      badges: ["Hybrid"],
      title: "Mobile Developer",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      start: "August 2024",
      end: "August 2025",
      description:
        "Developed mobile applications supporting the company's digital healthcare products and services. Contributed to the 'Evital' mobile application — downloaded by more than 200,000 users and actively serving thousands of concurrent users. Worked across the full mobile application lifecycle, including UI/UX implementation, state management, and API integration.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Remote"],
      title: "Flutter Developer",
      logo: "",
      start: "August 2022",
      end: "July 2024",
      description:
        "Designed, developed, and published multiple Flutter applications on the App Store and Google Play, including 'Sleepy Baby: White Noise', 'Kindertrack', and 'Kinderway'. Participated in every phase of the mobile development process and resolved a wide range of technical challenges, from performance tuning to platform-specific integrations. Applied state management solutions such as GetX and Provider, and built responsive, adaptive UIs aligned with modern design principles.",
    },
    {
      company: "Gorsentam Agriculture Technologies",
      link: "https://gorsentam.com",
      badges: ["Remote"],
      title: "Flutter Developer Intern",
      logo: "",
      start: "June 2022",
      end: "August 2022",
      description:
        "Built a mobile application focused on agricultural technologies using Flutter and Dart. Gained proficiency in Dart and contributed to UI/UX design decisions throughout the development process.",
    }
  ],
  skills: [
    "Flutter",
    "Dart",
    "PHP",
    "JavaScript",
    "React",
    "HTML & CSS",
    "VPS Administration",
    "Cloudflare",
    "CI/CD",
    "Git",
    "Version Control",
    "Requirements Gathering",
    "Process Modeling",
    "Business Development",
    "AI Integrations",
    "No-Code Development Tools",
    "UI & UX Development",
    "Algorithms",
    "Leadership",
    "Clean Code",
    "Jira",
    "Bitbucket",
    "ClickUp",
  ],
  projects: [
    {
      title: "evital AI Chatbot (Evo)",
      techStack: ["Flutter", "Dart", "AI Integration"],
      description:
        "Designed and developed the interface for Evo, an AI assistant that guides users across the evital platform, routes them to the right specialists, and supports the full appointment flow.",
      logo: "",
      link: {
        label: "evital",
        href: "https://evital.com.tr/",
      },
    },
    {
      title: "Evital – Online Healthcare Services",
      techStack: ["Flutter", "Dart"],
      description:
        "Mobile application supporting the company's digital healthcare products and services, serving more than 200,000 users.",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=tr.com.evital.public&hl=tr"
      }
    },
    {
      title: "Falcon Motorcycle Website",
      techStack: ["PHP", "HTML & CSS", "JavaScript"],
      description:
        "Extended and modernized the PHP source code with targeted UI/UX improvements for a live corporate website.",
      logo: "",
      link: {
        label: "falconmotosiklet.com",
        href: "https://www.falconmotosiklet.com",
      },
    },
    {
      title: "Kolat Group Corporate Website",
      techStack: ["HTML & CSS", "JavaScript"],
      description:
        "Corporate website rebuilt from the ground up with an infographic-driven presentation layer.",
      logo: "",
      link: {
        label: "kolatmotor.com.tr",
        href: "https://kolatmotor.com.tr",
      },
    },
    {
      title: "Sleepy Baby: White Noise",
      techStack: ["Flutter", "Dart"],
      description:
        "A mobile app providing white noise sounds for babies to help them sleep.",
      logo: SleepyLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.sleepy.baby"
      }
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "Parent–child tracking application designed to keep families connected.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US"
      }
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "Application for tracking parent–child activities and shared experiences.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US"
      }
    },
    {
      title: "Shipixy",
      techStack: ["Webflow"],
      description: "Marketing website built for customers of a U.S.-based logistics services company.",
      logo: "",
      link: {
        label: "shipixy.com",
        href: "https://www.shipixy.com",
      },
    }
  ],
  extracurricularActivities: [
    {
      role: "Trainee",
      organization: "Game & App Academy (Google and T3)",
      start: "January 2024",
      end: "May 2024",
      description:
        "Completed training on mobile application development with Flutter and participated in industry events, including courses on project management and native development for iOS and Android.",
    },
    {
      role: "Event Organizer",
      organization: "DC Flutter Community",
      start: "October 2023",
      end: "November 2023",
      description:
        "Organized a mentor–mentee program connecting experienced developers with newcomers to the industry.",
    },
    {
      role: "Core Team Member",
      organization: "GDSC Yalova & Çukurova",
      start: "2020",
      end: "2021",
      description:
        "Coordinated software events across both chapters, invited prominent developers from Turkey, and strengthened local student communities — including hosting a DevFest event at Yalova.",
    },
  ],
  languages: ["English", "Turkish"],
  blogPosts: [
    {
      title: "Substack Blog",
      description: "My personal blog where I write about software development, technology, and my experiences.",
      url: "https://zalsolmus.substack.com",
    }
  ]
};

export const RESUME_DATA_TR: ResumeData = {
  name: "Zal Solmuş",
  initials: "ZS",
  location: "Konya, Türkiye • İstanbul / Bursa'ya açık • Hibrit veya Uzaktan",
  locationLink: "https://www.google.com/maps/place/Bursa",
  cities: ["Konya", "İstanbul", "Bursa"],
  workModes: ["hybrid", "remote", "onSite"],
  about: "Yazılım Geliştirici | İş Analisti",
  summary:
    "Yaklaşık dört yıllık deneyime sahip, ürün odaklı çalışan bir Yazılım Geliştiriciyim. 2021'den bu yana Flutter ile mobil uygulamalar geliştiriyorum; son dönemde full-stack geliştirme, altyapı yönetimi ve iş analizi alanlarında da uzmanlığımı genişletiyorum. Kariyerimin büyük bölümünü start-up ortamlarında ve ürünü baştan sona geliştiren ekiplerde geçirdim; proje yönetim ekipleriyle paralel çalışarak fikir aşamasından yayına uzanan süreçlerin her katmanında aktif rol aldım. Teknik geliştirme ile iş süreçleri arasında rahatça köprü kurabiliyor; kod yazmak, iş akışlarını modellemek ve ihtiyaçları belirleyip dönüştürmek arasında akıcı biçimde geçiş yapıyorum.",
  homeSummary:
    "Yaklaşık 4 yıllık deneyime sahip Yazılım Geliştirici & İş Analisti. Mobil, SaaS, full-stack ve altyapı alanlarında çalışıyorum.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72752991?s=400&u=13788f78610ac957e9ab779ebc20815f0e4713f3&v=4",
  personalWebsiteUrl: "https://zalsolmus.com",
  contact: {
    email: "zalsolmus@gmail.com",
    tel: "+90 543 747 89 77",
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
      {
        name: "Bluesky",
        url: "https://bsky.app/profile/zalsolmus.com",
        icon: BlueskyIcon,
      },
      {
        name: "Substack",
        url: "https://zalsolmus.substack.com",
        icon: SubstackIcon,
      }
    ],
  },
  certifications: [
    "Google Proje Yönetimi Temelleri",
    "Sıfırdan Projelerle Front-End ve React 18.x (52+ Saat)",
    "Flutter Kampı Katılım Sertifikası",
    "GDSC Çekirdek Ekip Üyesi — Takdir Sertifikası (2020 – 2021)",
  ],
  education: [
    {
      school: "Yalova Üniversitesi",
      degree: "Bilgisayar Mühendisliği Lisans Derecesi",
      start: "Eyl 2021",
      end: "Haz 2025",
      additionalInfo: "Çukurova Üniversitesi'nden yatay geçiş yapıldı.",
    },
    {
      school: "Çukurova Üniversitesi",
      degree: "Bilgisayar Mühendisliği Lisans",
      start: "2019",
      end: "2021",
      additionalInfo: "İngilizce Hazırlık Sınıfı ve birinci sınıf derslerini 3.43 GPA ile tamamladım.",
    },
    {
      school: "Ceylanpınar Fen Lisesi",
      degree: "Lise Diploması",
      start: "2014",
      end: "2018",
      additionalInfo: "",
    },
  ],
  work: [
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["Yerinde"],
      title: "Full Stack Geliştirici",
      logo: "",
      start: "Ağustos 2025",
      end: "Şu an",
      description:
        "Önceki yazılım ajanslarından ve serbest çalışan geliştiricilerden devralınan projeleri şirket bünyesine taşıdım; projeleri VPS sunucularına aktarıp versiyon yönetim sistemlerini entegre ettim. Küçük geliştirme ekipleri için verimlilik sağlayacak şekilde CI/CD süreçlerini planlayıp hayata geçirdim. Altyapıyı Cloudflare'a taşıyarak tüm aktif projelere ek güvenlik ve performans kazandırdım. Falcon Motosiklet web sitesinin PHP kaynak kodu üzerinde geliştirmeler yaparak UI ve UX iyileştirmeleri gerçekleştirdim; aynı modernizasyon yaklaşımını 7 ayrı projede uyguladım. Kolat Group kurumsal web sitesini infografik yapıda baştan tasarlayıp geliştirdim.",
    },
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["Yerinde"],
      title: "İş Analisti",
      logo: "",
      start: "Ağustos 2025",
      end: "Şu an",
      description:
        "Üretim grubumuzdaki iş süreçlerinin modellenmesine ve iç paydaşlardan gereksinimlerin toplanmasına destek veriyorum. İş birimleri ile teknik ekipler arasında iletişimi kolaylaştırıyor, operasyonel ihtiyaçların anlaşılır teknik gereksinimlere dönüştürülmesine katkı sağlıyorum. Yeni iş akışlarının tasarımına ve sistem entegrasyonlarının planlanıp canlıya alınması süreçlerine aktif olarak katılıyorum.",
    },
    {
      company: "Eczacibasi Evital",
      link: "https://evital.com.tr/",
      badges: ["Hibrit"],
      title: "Mobil Uygulama Geliştirici",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      start: "Ağustos 2024",
      end: "Ağustos 2025",
      description:
        "Şirketin dijital sağlık ürün ve hizmetlerini destekleyen mobil uygulamalar geliştirdim. 200.000'i aşkın indirmeye ulaşan ve binlerce kullanıcının aynı anda aktif olarak kullandığı 'evital' mobil uygulamasının geliştirme ekibinde yer aldım. UI/UX geliştirme, durum yönetimi (state management) ve API entegrasyonu dahil olmak üzere mobil uygulama geliştirme yaşam döngüsünün tüm aşamalarında görev aldım.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Uzaktan"],
      title: "Flutter Geliştirici",
      logo: "",
      start: "Ağustos 2022",
      end: "Temmuz 2024",
      description:
        "App Store ve Google Play'de 'Sleepy Baby: White Noise', 'Kindertrack' ve 'Kinderway' başta olmak üzere birden fazla Flutter uygulaması yayımladım. Mobil uygulama geliştirme sürecinin tüm aşamalarında aktif rol aldım; performans optimizasyonundan platforma özel entegrasyonlara kadar çeşitli teknik zorlukları çözüme kavuşturdum. GetX ve Provider gibi durum yönetimi çözümleriyle çalıştım; modern tasarım ilkelerine uygun, duyarlı ve uyarlanabilir kullanıcı arayüzleri geliştirdim.",
    },
    {
      company: "Gorsentam Tarım Teknolojileri",
      link: "https://gorsentam.com",
      badges: ["Uzaktan"],
      title: "Flutter Geliştirici Stajyeri",
      logo: "",
      start: "Haziran 2022",
      end: "Ağustos 2022",
      description:
        "Flutter ile tarım teknolojileri odaklı bir mobil uygulama geliştirdim. Dart dilinde uzmanlaşarak geliştirme sürecinin tamamında UI/UX tasarım kararlarına katkı sağladım.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "PHP",
    "JavaScript",
    "React",
    "HTML & CSS",
    "VPS Yönetimi",
    "Cloudflare",
    "CI/CD",
    "Git",
    "Versiyon Yönetimi",
    "Gereksinim Analizi",
    "Süreç Modelleme",
    "İş Geliştirme",
    "İş Analizi için Yapay Zeka",
    "Jira",
    "Bitbucket",
    "ClickUp",
    "Yapay Zeka Entegrasyonları",
    "No-Code Geliştirme Araçları",
    "Temiz Kod",
    "UI & UX Geliştirme",
    "Algoritmalar",
  ],
  projects: [
    {
      title: "evital Yapay Zeka Asistanı (Evo)",
      techStack: ["Flutter", "Dart", "Yapay Zeka Entegrasyonu"],
      description:
        "evital platformunda kullanıcılara rehberlik eden, onları doğru uzmanlara yönlendiren ve randevu sürecini uçtan uca destekleyen yapay zekâ asistanı Evo'nun arayüzünü tasarlayıp geliştirdim.",
      logo: "",
      link: {
        label: "evital",
        href: "https://evital.com.tr/",
      },
    },
    {
      title: "Evital – Online Sağlık Hizmetleri",
      techStack: ["Flutter", "Dart"],
      description:
        "Şirketin dijital sağlık ürün ve hizmetlerini destekleyen, 200.000'i aşkın kullanıcıya hitap eden mobil uygulama.",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=tr.com.evital.public&hl=tr"
      },
    },
    {
      title: "Falcon Motosiklet Web Sitesi",
      techStack: ["PHP", "HTML & CSS", "JavaScript"],
      description:
        "PHP kaynak kodu üzerinde yapılan geliştirmeler ve hedefe yönelik UI/UX iyileştirmelerini içeren kurumsal web sitesi.",
      logo: "",
      link: {
        label: "falconmotosiklet.com",
        href: "https://www.falconmotosiklet.com",
      },
    },
    {
      title: "Kolat Group Kurumsal Web Sitesi",
      techStack: ["HTML & CSS", "JavaScript"],
      description:
        "İnfografik yapıda baştan tasarlanıp geliştirilen kurumsal web sitesi.",
      logo: "",
      link: {
        label: "kolatmotor.com.tr",
        href: "https://kolatmotor.com.tr",
      },
    },
    {
      title: "Sleepy Baby: White Noise",
      techStack: ["Flutter", "Dart"],
      description:
        "Bebeklerin uyumasına yardımcı olmak için beyaz gürültü sesleri sağlayan bir mobil uygulama.",
      logo: SleepyLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.sleepy.baby",
      },
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "Aileleri birbirine bağlayan ebeveyn–çocuk takip uygulaması.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US",
      },
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "Ebeveyn–çocuk aktivitelerini ve paylaşılan deneyimleri takip etmeye yönelik uygulama.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US",
      },
    },
    {
      title: "Shipixy",
      techStack: ["Webflow"],
      description: "ABD merkezli bir lojistik firmasının müşterileri için geliştirilen pazarlama web sitesi.",
      logo: "",
      link: {
        label: "shipixy.com",
        href: "https://www.shipixy.com",
      },
    },
  ],
  extracurricularActivities: [
    {
      role: "Kursiyer",
      organization: "Game & App Academy (Google ve T3)",
      start: "Ocak 2024",
      end: "Mayıs 2024",
      description:
        "Flutter ile uygulama geliştirme eğitimi aldım ve çeşitli etkinliklere katıldım. Proje Yönetimi ve Flutter ile iOS ve Android cihazlar için uygulama geliştirme gibi derslere katıldım.",
    },
    {
      role: "Etkinlik Organizatörü",
      organization: "DC Flutter Community",
      start: "Ekim 2023",
      end: "Kasım 2023",
      description:
        "Deneyimli geliştiricileri sektöre yeni girenlerle buluşturmak için mentor-mentee etkinliği düzenledim.",
    },
    {
      role: "Çekirdek Ekip Üyesi",
      organization: "GDSC Yalova & Çukurova",
      start: "2020",
      end: "2021",
      description:
        "Her iki şubede yazılım etkinlikleri düzenleyip Türkiye'nin tanınmış geliştiricilerini davet ettim; öğrenci topluluklarını güçlendirdim ve Yalova'da DevFest etkinliğine ev sahipliği yaptım.",
    },
  ],
  languages: ["Türkçe (Ana Dil)", "İngilizce (Profesyonel Çalışma Yeterliliği)"],
  blogPosts: [
    {
      title: "Substack Blog",
      description: "A blog where I share articles about software development, technology, and personal experiences.",
      url: "https://zalsolmus.substack.com",
    }
  ],
} as const;

export const RESUME_DATA_AR: ResumeData = {
  name: "زال سولموش",
  initials: "ZS",
  location: "تركيا",
  locationLink: "https://www.google.com/maps/place/Bursa",
  cities: [],
  workModes: [],
  about: "مطور برمجيات | التحول الرقمي",
  summary: "أدمج تطوير البرمجيات مع استراتيجيات العمل. أواصل مسيرتي المهنية التي بدأت بتطوير تطبيقات الهاتف المحمول والويب والتطبيقات المولدة بالذكاء الاصطناعي، بالتركيز الآن على التحول الرقمي وتحسين العمليات التجارية. أقوم بتحديث البنى التحتية الرقمية وقواعد البيانات والعمليات التشغيلية للشركات من البداية إلى النهاية. أعمل على ضمان سير عمليات تكنولوجيا المعلومات وتدفق المعلومات بشكل سليم. أنا لا أكتب التعليمات البرمجية فحسب، بل أقوم ببناء أنظمة مستدامة تساهم في نمو الأعمال.",
  homeSummary: "مطور برمجيات يطوّر منتجات (موبايل وSaaS) ويجمع بين التنفيذ التقني واحتياجات الأعمال.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72752991?s=400&u=13788f78610ac957e9ab779ebc20815f0e4713f3&v=4",
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
      {
        name: "Bluesky",
        url: "https://bsky.app/profile/zalsolmus.com",
        icon: BlueskyIcon,
      },
      {
        name: "Substack",
        url: "https://zalsolmus.substack.com",
        icon: SubstackIcon,
      }
    ],
  },
  certifications: [],
  education: [
    {
      school: "جامعة يالوفا",
      degree: "بكالوريوس في هندسة الكمبيوتر",
      start: "2021",
      end: "2024",
      additionalInfo: "تم النقل من جامعة تشوكوروفا.",
    },
    {
      school: "جامعة تشوكوروفا",
      degree: "فصل تحضيري باللغة الإنجليزية ودورات السنة الأولى",
      start: "2020",
      end: "2021",
      additionalInfo: "تم إكماله بمعدل 3.43.",
    },
  ],
  work: [
    {
      company: "Kolat Group",
      link: "",
      badges: ["في الموقع"],
      title: "رئيس العمليات الرقمية والتشغيلية",
      logo: "",
      start: "أغسطس 2025",
      end: "حالياً",
      description: "أقود التحول الرقمي والاستراتيجية التشغيلية لمجموعة شركات تعمل في مجالات السيارات والبناء والبلاستيك. دوري يربط الفجوة بين هندسة البرمجيات وتطوير الأعمال عبر 6 علامات تجارية. قمت بتصميم وتطوير أنظمة إدارة الوكلاء B2B وتطبيقات الهاتف المحمول، وفرضت الإنتاج القائم على البيانات عبر تكامل ERP وقواعد البيانات. كما قمت بإعادة هيكلة التسلسل الهرمي الداخلي وعمليات تكنولوجيا المعلومات، وقدمت استشارات البيع بالتجزئة لشبكة الوكلاء لتنفيذ استراتيجيات المبيعات القائمة على البرمجيات، وأدرت هوية الشركة وحضور وسائل التواصل الاجتماعي لجميع العلامات التجارية للمجموعة لضمان بصمة رقمية متماسكة.",
    },
    {
      company: "إكزاجيباسي إيفيتال",
      link: "https://evital.com.tr/",
      badges: ["هجين"],
      title: "مطور تطبيقات جوال",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      start: "أغسطس 2024",
      end: "أغسطس 2025",
      description:
        "قمت بتطوير تطبيقات جوال لمنتجات وخدمات الشركة. عملت على تطوير تطبيق 'إيفيتال' الجوال الذي يستخدمه الآلاف من المستخدمين. شاركت في دورة حياة تطوير التطبيق الجوال بالكامل، بما في ذلك تصميم واجهة المستخدم وتجربة المستخدم، وإدارة الحالة، ودمج API.",
    },
    {
      company: "فابريكود",
      link: "https://fabrikod.com",
      badges: ["عن بعد"],
      title: "مطور Flutter",
      logo: "",
      start: "يناير 2023",
      end: "يوليو 2024",
      description:
        "نشرت عدة تطبيقات تم تطويرها باستخدام Flutter على متجر App Store و Play Store، بما في ذلك 'Sleepy Baby: White Noise' و 'Kindertrack' و 'Kinderway'. شاركت في جميع مراحل عملية تطوير التطبيق الجوال وحلت تحديات تقنية مختلفة. عملت مع حلول إدارة الحالة مثل GetX و Provider. نفذت واجهة المستخدم وتجربة المستخدم على جانب الكود من خلال الالتزام بمبادئ التصميم المتجاوب.",
    },
    {
      company: "فابريكود",
      link: "https://fabrikod.com",
      badges: ["عن بعد"],
      title: "متدرب مطور Flutter",
      logo: "",
      start: "أغسطس 2022",
      end: "يناير 2023",
      description:
        "'Sleepy Baby: White Noise' و 'Sufi Sound: White Noise' mobil uygulamalarının geliştirilmesine katkıda bulundum. عززت مهاراتي من خلال المشاركة في دورة حياة تطوير التطبيق الجوال بالكامل.",
    },
    {
      company: "جورسينتام تكنولوجيات الزراعة",
      link: "https://gorsentam.com",
      badges: ["عن بعد"],
      title: "متدرب مطور Flutter",
      logo: "",
      start: "يونيو 2022",
      end: "أغسطس 2023",
      description:
        "قمت بتطوير تطبيق جوال يركز على تكنولوجيات الزراعة باستخدام Flutter. اكتسبت الكفاءة في Dart وعملت على تصميم واجهة المستخدم وتجربة المستخدم وتطوير التطبيق الجوال.",
    },
  ],
  skills: [
    "التحول الرقمي",
    "عمليات ERP",
    "تحليل الأعمال",
    "تصميم العمليات",
    "إدارة الوكلاء / القنوات",
    "تحليل البيانات",
    "هوية الشركة",
    "عمليات وسائل التواصل الاجتماعي",
    "Flutter",
    "القيادة",
    "كود نظيف",
    "HTML & CSS",
    "Webflow",
    "تصميم واجهة المستخدم وتجربة المستخدم",
    "JavaScript",
    "Dart",
  ],
  projects: [
    {
      title: "فالكون للدراجات النارية - موقع الكتروني",
      techStack: ["PHP"],
      description: "موقع ويب للشركة تم تطويره لعلامة فالكون للدراجات النارية التجارية.",
      logo: "",
      link: {
        label: "falconmotosiklet.com",
        href: "https://www.falconmotosiklet.com",
      },
    },
    {
      title: "Evital AI",
      techStack: ["Flutter (Web)"],
      description: "قمت بتطوير واجهة لروبوت دردشة مدعوم بالذكاء الاصطناعي في قطاع الرعاية الصحية. إنه تطبيق ويب تم بناؤه باستخدام Flutter.",
      logo: "",
      link: {
        label: "ai.evital.com.tr",
        href: "https://ai.evital.com.tr",
      },
    },
    {
      title: "إيفيتال - خدمة صحية عبر الإنترنت",
      techStack: ["Flutter", "Dart"],
      description:
        "تطبيق جوال لمنتجات وخدمات الشركة.",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=tr.com.evital.public&hl=tr"
      },
    },
    {
      title: "Sleepy Baby: White Noise",
      techStack: ["Flutter", "Dart"],
      description:
        "تطبيق جوال يوفر أصوات الضوضاء البيضاء لمساعدة الأطفال على النوم.",
      logo: SleepyLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.sleepy.baby",
      },
    },
    {
      title: "White Sound",
      techStack: ["Flutter", "Dart"],
      description:
        "تطبيق جوال يوفر أصوات الضوضاء البيضاء لمساعدة البالغين على الاسترخاء.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.whitesound&pcampaignid=web_share",
      },
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "تطبيق تتبع الوالدين والطفل.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US",
      },
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "تطبيق لتتبع أنشطة الوالدين والطفل.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US",
      },
    },
    {
      title: "Shipixy",
      techStack: ["Webflow"],
      description: "موقع ويب لشركة شحن. تم تطوير معظم المكونات باستخدام Webflow. تم دمج البنية التحتية لـ CRM والبريد الإلكتروني في Webflow.",
      logo: "",
      link: {
        label: "shipixy.com",
        href: "https://www.shipixy.com",
      },
    },
  ],
  extracurricularActivities: [
    {
      role: "عضو",
      organization: "KHS (Konya Hackerspace)",
      start: "سبتمبر 2025",
      end: "حالياً",
      description:
        "كونيا هاكرسبيس هو المكان الذي يبدع فيه الهاكرز المحليون أشياء رائعة. يدعم كونيا هاكرسبيس ثقافة الهاكرز، ويجمع بين المصنعين والمخترعين، ويساعد في نشر المعرفة التقنية.",
    },
    {
      role: "متدرب",
      organization: "Game & App Academy (Google و T3)",
      start: "يناير 2024",
      end: "مايو 2024",
      description:
        "تلقيت تدريباً على تطوير التطبيقات باستخدام Flutter وشاركت في أحداث متنوعة. حضرت دورات مثل إدارة المشاريع وتطوير التطبيقات لأجهزة iOS و Android باستخدام Flutter.",
    },
    {
      role: "منظم الفعاليات",
      organization: "DC Flutter Community",
      start: "أكتوبر 2023",
      end: "نوفمبر 2023",
      description:
        "نظمت فعالية مرشد-متدرب لربط المطورين ذوي الخبرة بالقادمين الجدد إلى الصناعة.",
    },
    {
      role: "عضو الفريق الأساسي",
      organization: "GDSC Yalova",
      start: "سبتمبر 2022",
      end: "يونيو 2023",
      description:
        "نظمت أحداث برمجية متنوعة ودعوت مطوري برمجيات مشهورين من تركيا. عززت المجتمع من خلال استضافة حدث DevFest.",
    },
    {
      role: "عضو الفريق الأساسي",
      organization: "GDSC Çukurova",
      start: "أكتوبر 2020",
      end: "أبريل 2021",
      description:
        "نظمت أحداث برمجية متنوعة ودعوت مطوري برمجيات مشهورين من تركيا.",
    },

  ],
  languages: ["الإنجليزية", "التركية"],
  blogPosts: [
    {
      title: "مدونة Substack",
      description: "مدونة حيث أشارك مقالات حول تطوير البرمجيات والتكنولوجيا والتجارب الشخصية.",
      url: "https://zalsolmus.substack.com",
    }
  ],
} as const;

export const RESUME_DATA = RESUME_DATA_TR;

export default RESUME_DATA;