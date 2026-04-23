'use client';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Briefcase,
  Wrench,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface SkillCategory {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  skillNames: string[];
  gradient: string;
}

interface SkillsWidgetProps {
  skills: readonly string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: "mobile",
    icon: Smartphone,
    skillNames: ["Flutter", "Dart"],
    gradient: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
  },
  {
    key: "web",
    icon: Globe,
    skillNames: [
      "PHP",
      "JavaScript",
      "React",
      "HTML & CSS",
      "Webflow",
    ],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    key: "infrastructure",
    icon: Server,
    skillNames: [
      "VPS Administration",
      "VPS Yönetimi",
      "Cloudflare",
      "CI/CD",
      "Git",
      "Version Control",
      "Versiyon Yönetimi",
      "عمليات ERP",
    ],
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  },
  {
    key: "business",
    icon: Briefcase,
    skillNames: [
      "Requirements Gathering",
      "Gereksinim Analizi",
      "Process Modeling",
      "Süreç Modelleme",
      "Business Development",
      "İş Geliştirme",
      "AI Integrations",
      "Yapay Zeka Entegrasyonları",
      "İş Analizi için Yapay Zeka",
      "التحول الرقمي",
      "تحليل الأعمال",
      "تصميم العمليات",
      "إدارة الوكلاء / القنوات",
      "تحليل البيانات",
      "هوية الشركة",
      "عمليات وسائل التواصل الاجتماعي",
    ],
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    key: "tools",
    icon: Wrench,
    skillNames: [
      "Jira",
      "Bitbucket",
      "ClickUp",
      "No-Code Development Tools",
      "No-Code Geliştirme Araçları",
    ],
    gradient: "from-rose-500/20 via-pink-500/20 to-red-500/20",
  },
  {
    key: "design",
    icon: Sparkles,
    skillNames: [
      "UI & UX Development",
      "UI & UX Geliştirme",
      "تصميم واجهة المستخدم وتجربة المستخدم",
      "Clean Code",
      "Temiz Kod",
      "كود نظيف",
      "Algorithms",
      "Algoritmalar",
      "Leadership",
      "القيادة",
    ],
    gradient: "from-primary/20 via-blue-400/20 to-teal-400/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export function SkillsWidget({ skills }: SkillsWidgetProps) {
  const t = useTranslations();

  const categorizedSkills = SKILL_CATEGORIES.map((category) => {
    const matchedSkills = skills.filter((skill) =>
      category.skillNames.includes(skill)
    );
    return {
      ...category,
      matchedSkills,
    };
  }).filter((category) => category.matchedSkills.length > 0);

  const uncategorizedSkills = skills.filter(
    (skill) =>
      !SKILL_CATEGORIES.some((category) =>
        category.skillNames.includes(skill)
      )
  );

  return (
    <div className="space-y-6">
      <div className="relative mb-2">
        <h2 className="text-2xl font-bold mb-2">{t('sections.skills')}</h2>
        <div className="h-1 w-full bg-gradient-to-br from-primary via-blue-400 to-teal-400 rounded-full" />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {categorizedSkills.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.key}
              variants={cardVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="group h-full"
            >
              <div
                className={`bg-gradient-to-br ${category.gradient} p-px rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5 h-full`}
              >
                <div className="bg-background dark:bg-background rounded-lg p-4 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`bg-gradient-to-br ${category.gradient} p-1.5 rounded-md`}
                    >
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-sm">
                      {t(`skillCategories.${category.key}`)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.matchedSkills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        custom={i}
                        variants={badgeVariants}
                      >
                        <Badge
                          className={`bg-gradient-to-br ${category.gradient} hover:opacity-80 border-0 text-xs transition-opacity cursor-default`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {uncategorizedSkills.length > 0 && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="group h-full"
          >
            <div className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 p-px rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5 h-full">
              <div className="bg-background dark:bg-background rounded-lg p-4 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 p-1.5 rounded-md">
                    <Sparkles className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">
                    {t('skillCategories.other')}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {uncategorizedSkills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      custom={i}
                      variants={badgeVariants}
                    >
                      <Badge className="bg-gradient-to-br from-primary/10 via-blue-400/10 to-teal-400/10 hover:opacity-80 border-0 text-xs transition-opacity cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
