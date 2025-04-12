import { SleepyLogo } from "@/images/logos";
import { BlueskyIcon, GitHubIcon, LinkedInIcon, SubstackIcon, XIcon } from "../components/icons";

export const RESUME_DATA_TR = {
    name: "Zal Solmuş",
    initials: "ZS",
    location: "Türkiye",
    locationLink: "https://www.google.com/maps/place/Bursa",
    about: "Mobil Uygulama Geliştirici",
    summary: "Ben Zal. 2 yıldan fazla yazılım geliştirme deneyimine sahip bir Yazılım Geliştiricisiyim. Bilgisayar Mühendisliği lisans derecesine sahibim. 2021'den beri Flutter kullanarak Android ve iOS platformları için uygulamalar geliştiriyorum ve Flutter geliştirme ile geçimimi sağlıyorum. Profesyonel kariyerime öğrenciyken başladım ve hala aktif olarak geliştirme projelerinde yer alıyorum. Kariyerim boyunca hem gönüllü hem de profesyonel olarak birçok projede yer aldım.",
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
            company: "Eczacibasi Evital",
            link: "https://evital.com.tr/",
            badges: ["Hibrit"],
            title: "Mobil Uygulama Geliştirici",
            logo: "https://play-lh.googleusercontent.com/lwZHv_QctpYcfnSk95ewKEjYN3KEvoXJ72TBGTyNfqz1hsH3OItifDqSBUi6mtcyAgI",
            start: "Ağustos 2024",
            end: "Şu an",
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
                "Çeşitli yazılım etkinlikleri düzenledim ve Türkiye'den tanınmış yazılım geliştiricilerini davet ettim. Bir DevFest etkinliğine ev sahipliği yaparak topluluğu güçlendirdim.",
        },
        {
            role: "Çekirdek Ekip Üyesi",
            organization: "GDSC Çukurova",
            start: "Ekim 2020",
            end: "Nisan 2021",
            description:
                "Çeşitli yazılım etkinlikleri düzenledim ve Türkiye'den tanınmış yazılım geliştiricilerini davet ettim.",
        },
    ],
    languages: ["İngilizce", "Türkçe"],
    blogPosts: [
        {
            title: "Substack Blog",
            description: "Yazılım geliştirme, teknoloji ve kişisel deneyimlerim hakkında yazılarımı paylaştığım blog.",
            url: "https://zalsolmus.substack.com",
        }
    ],
} as const; 