'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Building2, GlobeIcon, Laptop, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { BlogPosts } from "@/components/blog-posts";

export default function Home() {
  const getWorkModeIcon = (mode: (typeof RESUME_DATA.workModes)[number]) => {
    switch (mode) {
      case "onSite":
        return Building2
      case "hybrid":
        return Users
      case "remote":
        return Laptop
    }
  }

  const getWorkModeLabel = (mode: (typeof RESUME_DATA.workModes)[number]) => {
    switch (mode) {
      case "onSite":
        return "Yerinde"
      case "hybrid":
        return "Hibrit"
      case "remote":
        return "Uzaktan"
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container relative mx-auto scroll-my-12 overflow-auto p-0 md:p-16 print:p-12"
    >
      <section className="mx-auto w-full max-w-2xl space-y-4 md:space-y-8 bg-white px-4 py-4 md:px-8 md:py-8 print:space-y-6 print:px-0 print:py-0">
        {/* Profile image and name at the top */}
        <div className="flex flex-col items-center justify-center gap-4 mb-4 md:mb-8">
          <Avatar className="size-36 border-2 border-muted bg-gradient-to-br from-primary to-primary-foreground shadow-lg">
            <AvatarImage src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-xl text-muted-foreground mt-2">{RESUME_DATA.about}</p>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground mt-2">
              {RESUME_DATA.homeSummary}
            </p>
            <div className="flex items-center mt-2">
              <GlobeIcon className="mr-1 size-3" />
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline text-xs text-muted-foreground"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {RESUME_DATA.cities.join(" / ")}
              </a>
            </div>
            {RESUME_DATA.workModes?.length ? (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                {RESUME_DATA.workModes.map((mode) => {
                  const Icon = getWorkModeIcon(mode)
                  return (
                    <Badge key={mode} variant="secondary" className="gap-1">
                      <Icon className="h-3.5 w-3.5" />
                      {getWorkModeLabel(mode)}
                    </Badge>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SocialLinks social={RESUME_DATA.contact.social} />
          <BlogPosts blogPosts={RESUME_DATA.blogPosts} />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Link href="/cv">
            <Button className="flex items-center gap-2">
              CV Sayfasına Git <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}