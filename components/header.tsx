'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Calendar } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { communityLinks, links, resourceLinks } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-2xl bg-primary">
              <Image
                src={"/logo.png"}
                height={120}
                width={120}
                alt="Ritual Chain Logo"
                className='justify-center object-contain items-center rounded-2xl'
              />
            </div>
            <span className="text-lg font-semibold">Ritual Chain</span>
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            {resourceLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {communityLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className={link.name === "Telegram" ? "bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] hover:text-[#0088cc]" : ""}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  <Icon icon={link.icon} className="size-5" />
                </Link>
              </Button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Office Hours"
                >
                  <Calendar className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link
                    href={links.officeHours.discordEventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Office Hours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={links.officeHours.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Calendar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href={links.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
