import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Icon } from '@iconify/react'

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
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </a>
            <a href="#community" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Community
            </a>
            <a href="#showcase" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Showcase
            </a>
            <a href="#resources" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Resources
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Icon icon="ri:github-fill" className="size-7" />
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
