import { SleepyLogo } from "@/images/logos";
import { BlueskyIcon, GitHubIcon, LinkedInIcon, SubstackIcon, XIcon } from "../components/icons";
import { icons } from "lucide-react";
import { StaticImageData } from "next/image";

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
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
  location: "Turkey",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "Software Developer | Digital Transformation",
  summary: "I combine software development with business strategy. Building on my technical background in Mobile, Web, and AI-Generated application development, I now focus on digital transformation and business process improvement. I modernize companies' digital infrastructures, databases, and operational workflows end-to-end. I ensure the healthy execution of IT operations and information flow. I don't just write code; I build sustainable systems that grow businesses.",
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
    }
  ],
  work: [
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["On-site"],
      title: "Head of Digital & Operations",
      logo: "",
      start: "August 2025",
      end: "Present",
      description: "Leading the digital transformation and operational strategy for a group company operating in Automotive, Construction, and Plastics. My role bridges the gap between software engineering and business development across 6 brands. I architected and developed B2B dealer management systems and mobile apps, and enforced data-driven production via ERP and database integrations. I also restructured internal hierarchies and IT processes, provided retail consulting to the dealer network to implement software-driven sales strategies, and managed the corporate identity and social media presence for all group brands to ensure a cohesive digital footprint.",
    },
    {
      company: "Eczacibasi Evital",
      link: "https://evital.com.tr/",
      badges: ["Hybrid"],
      title: "Mobile Application Developer",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      start: "August 2024",
      end: "August 2025",
      description:
        "Developed mobile applications for the company's products and services. Worked on the development of the 'Evital' mobile application, which is used by thousands of users. Engaged in the complete mobile application development lifecycle, including UI/UX design, state management, and API integration.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Remote"],
      title: "Flutter Developer",
      logo: "",
      start: "January 2023",
      end: "July 2024",
      description:
        "Published several applications developed with Flutter on the App Store and Play Store, including 'Sleepy Baby: White Noise', 'Kindertrack', and 'Kinderway'. Participated in all stages of the mobile application development process and solved various technical challenges. Worked with state management solutions like GetX and Provider. Implemented UI and UX on the code side by adhering to responsive design principles.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Remote"],
      title: "Flutter Developer Intern",
      logo: "",
      start: "August 2022",
      end: "January 2023",
      description:
        "Contributed to the development of 'Sleepy Baby: White Noise' and 'Sufi Sound: White Noise' mobile applications. Enhanced skills by engaging in the complete mobile application development lifecycle.",
    },
    {
      company: "Gorsentam Agriculture Technologies",
      link: "https://gorsentam.com",
      badges: ["Remote"],
      title: "Flutter Developer Intern",
      logo: "",
      start: "June 2022",
      end: "August 2023",
      description:
        "Developed a mobile application focused on agricultural technologies using Flutter. Gained proficiency in Dart and worked on UI/UX design and mobile app development.",
    }
  ],
  skills: [
    "Digital Transformation",
    "ERP Processes",
    "Business Analysis",
    "Process Design",
    "Dealer / Channel Management",
    "Data Analysis",
    "Corporate Identity",
    "Social Media Operations",
    "Flutter",
    "Leadership",
    "Clean Code",
    "HTML & CSS",
    "Webflow",
    "UI & UX Design",
    "JavaScript",
    "Dart"
  ],
  projects: [
    {
      title: "Falcon Motorcycle - Website",
      techStack: ["PHP"],
      description: "Corporate website developed for the Falcon Motorcycle brand.",
      logo: "",
      link: {
        label: "falconmotosiklet.com",
        href: "https://www.falconmotosiklet.com",
      },
    },
    {
      title: "Evital AI",
      techStack: ["Flutter (Web)"],
      description: "Developed the interface for an AI-powered chatbot in the healthcare sector. It is a web application built with Flutter.",
      logo: "",
      link: {
        label: "ai.evital.com.tr",
        href: "https://ai.evital.com.tr",
      },
    },
    {
      title: "evital - Online Healthcare Services",
      techStack: ["Flutter", "Dart"],
      description:
        "A mobile application for the company's products and services.",
      logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=tr.com.evital.public&hl=tr"
      }
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
      title: "White Sound",
      techStack: ["Flutter", "Dart"],
      description:
        "A mobile app providing white noise sounds for adults to help them relax.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.whitesound&pcampaignid=web_share"
      }
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "Parent-Child Tracking Application.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US"
      }
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "An application for tracking parent-child activities.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US"
      }
    }
  ],
  extracurricularActivities: [
    {
      role: "Member",
      organization: "KHS (Konya Hackerspace)",
      start: "September 2025",
      end: "Present",
      description:
        "Konya Hackerspace is where local hackers create awesome stuff. Konya Hackerspace supports hacker culture, brings together makers and inventors, and helps spread technical knowledge.",
    },
    {
      role: "Trainee",
      organization: "Game & App Academy (Google and T3)",
      start: "January 2024",
      end: "May 2024",
      description:
        "Received training on application development with Flutter and participated in various events. Attended courses such as Project Management and application development for iOS and Android devices with Flutter."
    },
    {
      role: "Event Organizer",
      organization: "DC Flutter Community",
      start: "October 2023",
      end: "November 2023",
      description:
        "Organized a mentor-mentee event to connect experienced developers with new entrants to the industry."
    },
    {
      role: "Core Team Member",
      organization: "GDSC Yalova",
      start: "September 2022",
      end: "June 2023",
      description:
        "Organized various software events and invited renowned software developers from Turkey. Strengthened the community by hosting a DevFest event."
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
  location: "Türkiye",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "Yazılım Geliştirici | Dijital Dönüşüm",
  summary: "Yazılım geliştirmeyi, iş stratejileriyle birleştiriyorum. Mobil, Web, AI Generated uygulama geliştirme kökenli teknik geçmişimi, dijital dönüşüm ve iş süreçlerini geliştirme ile devam ettiriyorum. Şirketlerin dijital altyapılarını, veritabanı ve operasyonel süreçlerini uçtan uca modernize ediyorum. Bilgi işlem operasyonları ve bilgi akışının sağlıklı şekilde yürütülmesi üstüne çalışıyorum. Sadece kod yazan değil, iş büyüten sürdürülebilir sistemler kuruyorum.",
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
  education: [
    {
      school: "Yalova Üniversitesi",
      degree: "Bilgisayar Mühendisliği Lisans Derecesi",
      start: "2021",
      end: "2024",
      additionalInfo: "Çukurova Üniversitesi'nden yatay geçiş yapıldı.",
    },
    {
      school: "Çukurova Üniversitesi",
      degree: "İngilizce Hazırlık Sınıfı ve birinci sınıf dersleri",
      start: "2020",
      end: "2021",
      additionalInfo: "3.43 not ortalaması ile tamamlandı.",
    },
  ],
  work: [
    {
      company: "Kolat Group",
      link: "https://kolatmotor.com.tr",
      badges: ["Yerinde"],
      title: "Dijital ve Operasyonel Süreçler Lideri",
      logo: "",
      start: "Ağustos 2025",
      end: "Şu an",
      description:
        "Otomotiv, İnşaat ve Plastik sektörlerinde faaliyet gösteren holding bünyesindeki 6 farklı markanın (Falcon, TOGO, vb.) uçtan uca dijital ve ticari dönüşümünü yönetiyorum. Sorumluluklarım teknik altyapıdan sahadaki satışa kadar geniş bir yelpazeyi kapsıyor. Bayi yönetim panellerinin ve mobil uygulamaların mimarisini tasarlayıp geliştirdim (Flutter & Web). Üretimde ERP ve veritabanı entegrasyonlarını sağlayarak veri akışını optimize ettim. Şirket içi hiyerarşik yapıyı ve bilgi işlem süreçlerini yeniden kurguladım. Perakende satış danışmanlığı yaparak bayilerin satış performansını artıracak dijital sistemler kurdum. Tüm grup markalarının kurumsal kimlik inşasını ve sosyal medya stratejilerini yöneterek bütünleşik bir marka dili oluşturdum.",
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
        "Şirketin ürün ve hizmetleri için mobil uygulamalar geliştirdim. Binlerce kullanıcı tarafından kullanılan 'Evital' mobil uygulamasının geliştirilmesinde çalıştım. UI/UX tasarımı, durum yönetimi ve API entegrasyonu dahil olmak üzere mobil uygulama geliştirme yaşam döngüsünün tamamında yer aldım.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Uzaktan"],
      title: "Flutter Geliştirici",
      logo: "",
      start: "Ocak 2023",
      end: "Temmuz 2024",
      description:
        "App Store ve Play Store'da 'Sleepy Baby: White Noise', 'Kindertrack' ve 'Kinderway' dahil olmak üzere Flutter ile geliştirilmiş birkaç uygulama yayınladım. Mobil uygulama geliştirme sürecinin tüm aşamalarında yer aldım ve çeşitli teknik zorlukları çözdüm. GetX ve Provider gibi durum yönetimi çözümleriyle çalıştım. Duyarlı tasarım ilkelerine uyarak kod tarafında UI ve UX uyguladım.",
    },
    {
      company: "Fabrikod",
      link: "https://fabrikod.com",
      badges: ["Uzaktan"],
      title: "Flutter Geliştirici Stajyeri",
      logo: "",
      start: "Ağustos 2022",
      end: "Ocak 2023",
      description:
        "'Sleepy Baby: White Noise' ve 'Sufi Sound: White Noise' mobil uygulamalarının geliştirilmesine katkıda bulundum. Mobil uygulama geliştirme yaşam döngüsünün tamamında yer alarak becerilerimi geliştirdim.",
    },
    {
      company: "Gorsentam Tarım Teknolojileri",
      link: "https://gorsentam.com",
      badges: ["Uzaktan"],
      title: "Flutter Geliştirici Stajyeri",
      logo: "",
      start: "Haziran 2022",
      end: "Ağustos 2023",
      description:
        "Flutter kullanarak tarım teknolojilerine odaklanan bir mobil uygulama geliştirdim. Dart dilinde uzmanlık kazandım ve UI/UX tasarımı ve mobil uygulama geliştirme üzerinde çalıştım.",
    },
  ],
  skills: [
    "Dijital Dönüşüm",
    "ERP Süreçleri",
    "İş Analizi",
    "Süreç Tasarımı",
    "Bayi / Kanal Yönetimi",
    "Veri Analizi",
    "Kurumsal Kimlik",
    "Sosyal Medya Operasyonları",
    "Flutter",
    "Liderlik",
    "Temiz Kod",
    "HTML & CSS",
    "Webflow",
    "UI & UX Tasarımı",
    "JavaScript",
    "Dart",
  ],
  projects: [
    {
      title: "Falcon Motosiklet - Web Sitesi",
      techStack: ["PHP"],
      description: "Falcon Motosiklet markası için geliştirilen kurumsal web sitesi.",
      logo: "",
      link: {
        label: "falconmotosiklet.com",
        href: "https://www.falconmotosiklet.com",
      },
    },
    {
      title: "Evital AI",
      techStack: ["Flutter (Web)"],
      description: "Sağlık alanında hizmet veren yapay zeka destekli chatbot arayüzünü geliştirdim. Flutter ile geliştirilmiş bir web uygulamasıdır.",
      logo: "",
      link: {
        label: "ai.evital.com.tr",
        href: "https://ai.evital.com.tr",
      },
    },
    {
      title: "evital - Online Sağlık Hizmeti",
      techStack: ["Flutter", "Dart"],
      description:
        "Şirketin ürün ve hizmetleri için bir mobil uygulama.",
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
        "Bebeklerin uyumasına yardımcı olmak için beyaz gürültü sesleri sağlayan bir mobil uygulama.",
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
        "Yetişkinlerin rahatlamasına yardımcı olmak için beyaz gürültü sesleri sağlayan bir mobil uygulama.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.whitesound&pcampaignid=web_share",
      },
    },
    {
      title: "Kindertrack",
      techStack: ["Flutter", "Dart"],
      description: "Ebeveyn-Çocuk Takip Uygulaması.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kindertrack&hl=en_CA&gl=US",
      },
    },
    {
      title: "Kinderway",
      techStack: ["Flutter", "Dart"],
      description: "Ebeveyn-çocuk aktivitelerini takip etmek için bir uygulama.",
      logo: "",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.fabrikod.kinderway&hl=en_CA&gl=US",
      },
    },
    {
      title: "Shipixy",
      techStack: ["Webflow"],
      description: "Bir nakliye şirketi için web sitesi. Bileşenlerin çoğunu Webflow ile geliştirdim. Webflow'un CRM ve e-posta altyapısı entegre edildi.",
      logo: "",
      link: {
        label: "shipixy.com",
        href: "https://www.shipixy.com",
      },
    },
  ],
  extracurricularActivities: [
    {
      role: "Üye",
      organization: "KHS (Konya Hackerspace)",
      start: "Eylül 2025",
      end: "Şu an",
      description:
        "Konya Hackerspace is where local hackers create awesome stuff. Konya Hackerspace supports hacker culture, brings together makers and inventors, and helps spread technical knowledge.",
    },
    {
      role: "Eğitmen",
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
      organization: "GDSC Yalova",
      start: "Eylül 2022",
      end: "Haziran 2023",
      description:
        "Organized various software events and invited renowned software developers from Turkey. Strengthened the community by hosting a DevFest event.",
    },
    {
      role: "Çekirdek Ekip Üyesi",
      organization: "GDSC Çukurova",
      start: "October 2020",
      end: "April 2021",
      description:
        "Organized various software events and invited renowned software developers from Turkey.",
    },
  ],
  languages: ["English", "Turkish"],
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
  about: "مطور برمجيات | التحول الرقمي",
  summary: "أدمج تطوير البرمجيات مع استراتيجيات العمل. أواصل مسيرتي المهنية التي بدأت بتطوير تطبيقات الهاتف المحمول والويب والتطبيقات المولدة بالذكاء الاصطناعي، بالتركيز الآن على التحول الرقمي وتحسين العمليات التجارية. أقوم بتحديث البنى التحتية الرقمية وقواعد البيانات والعمليات التشغيلية للشركات من البداية إلى النهاية. أعمل على ضمان سير عمليات تكنولوجيا المعلومات وتدفق المعلومات بشكل سليم. أنا لا أكتب التعليمات البرمجية فحسب، بل أقوم ببناء أنظمة مستدامة تساهم في نمو الأعمال.",
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