"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CommandIcon, Search } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export function CommandMenu({ links }: Props) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    // Check if user is on mobile
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    // Check if user is on Windows
    setIsWindows(navigator.platform.indexOf('Win') > -1);

    // Add keyboard shortcut only for desktop devices
    if (!isMobile) {
      const down = (e: KeyboardEvent) => {
        // Windows: Ctrl+J, macOS: Command+J
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }
  }, [isMobile]);

  // Mobile Search Button Component
  const MobileSearchButton = () => {
    if (!isMobile) return null;

    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 rounded-full bg-gradient-to-br from-primary to-primary-foreground text-white"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    );
  };

  // Shortcut Key Display Component
  const ShortcutKey = () => {
    if (isMobile) return null;

    if (isWindows) {
      return (
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl</span>+J
        </kbd>
      );
    }

    return (
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>J
      </kbd>
    );
  };

  return (
    <>
      <MobileSearchButton />
      {/* Rest of your dialog component */}
      {!isMobile && (
        <div className="fixed bottom-4 right-4 text-sm text-muted-foreground">
          {t('commands.press')} <ShortcutKey /> {t('commands.toOpen')}
        </div>
      )}

      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl bg-gradient-to-br from-primary/50 to-primary-foreground/50 print:hidden"
      >
        {isMobile ? (
          <Search className="my-6 size-6" />
        ) : (
          <CommandIcon className="my-6 size-6" />
        )}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Komut yazın veya arayın..." />
        <CommandList>
          <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
          <CommandGroup heading="İşlemler">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Yazdır</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Bağlantılar">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
