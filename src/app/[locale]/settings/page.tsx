"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ]

  const currentLocale = pathname.split("/")[1]
  const active = languages.find((l) => l.code === currentLocale)?.code ?? "tr"

  const setLocale = (localeCode: string) => {
    if (["tr", "en", "ar"].includes(currentLocale)) {
      router.push(pathname.replace(`/${currentLocale}`, `/${localeCode}`))
    } else {
      router.push(`/${localeCode}`)
    }
  }

  return (
    <main className="app">
      <div className="section-head" style={{ marginBottom: 24 }}>
        <div className="idx">00</div>
        <h2>Ayarlar</h2>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="about-body">
          <div className="kicker">Dil</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className="tool-btn"
                onClick={() => setLocale(lang.code)}
                data-hover
                aria-pressed={active === lang.code}
                style={{
                  borderColor: active === lang.code ? "var(--fg)" : "var(--line)",
                  color: active === lang.code ? "var(--fg)" : "var(--fg-2)",
                }}
              >
                <span aria-hidden="true">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: 24 }} />

        <div className="about-body">
          <div className="kicker">Tema</div>
          <div>
            {mounted ? (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="tool-btn"
                  onClick={() => setTheme("light")}
                  data-hover
                  aria-pressed={theme === "light"}
                  style={{ borderColor: theme === "light" ? "var(--fg)" : "var(--line)" }}
                >
                  Açık
                </button>
                <button
                  type="button"
                  className="tool-btn"
                  onClick={() => setTheme("dark")}
                  data-hover
                  aria-pressed={theme === "dark"}
                  style={{ borderColor: theme === "dark" ? "var(--fg)" : "var(--line)" }}
                >
                  Koyu
                </button>
                <button
                  type="button"
                  className="tool-btn"
                  onClick={() => setTheme("system")}
                  data-hover
                  aria-pressed={theme === "system"}
                  style={{ borderColor: theme === "system" ? "var(--fg)" : "var(--line)" }}
                >
                  Sistem
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}

