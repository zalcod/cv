"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Home, Search, Settings, FileText } from "lucide-react"

function Item({
  active,
  label,
  children,
  href,
  onClick,
}: {
  active?: boolean
  label: string
  children: React.ReactNode
  href?: string
  onClick?: () => void
}) {
  const base =
    "flex flex-col items-center justify-center gap-1 px-3 py-2 text-[11px] leading-none select-none"
  const cls = active ? `${base} text-primary` : `${base} text-muted-foreground`

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={label}>
        {children}
        <span>{label}</span>
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls} aria-label={label}>
      {children}
      <span>{label}</span>
    </button>
  )
}

export function MobileBottomBar() {
  const pathname = usePathname()
  const { locale } = useParams()

  const loc = typeof locale === "string" ? locale : "tr"
  const homeHref = `/${loc}`
  const cvHref = `/${loc}/cv`
  const settingsHref = `/${loc}/settings`

  const isHome = pathname === homeHref
  const isCV = pathname === cvHref
  const isSettings = pathname === settingsHref

  const openCommandMenu = () => {
    document.getElementById("command-menu-trigger")?.click()
  }

  return (
    <nav
      className="sm:hidden fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto w-full max-w-2xl px-3 flex items-stretch justify-around">
        <Item href={homeHref} active={isHome} label="Ana Sayfa">
          <Home className="h-5 w-5" />
        </Item>
        <Item onClick={openCommandMenu} label="Ara">
          <Search className="h-5 w-5" />
        </Item>
        <Item href={cvHref} active={isCV} label="CV">
          <FileText className="h-5 w-5" />
        </Item>
        <Item href={settingsHref} active={isSettings} label="Ayarlar">
          <Settings className="h-5 w-5" />
        </Item>
      </div>
    </nav>
  )
}

