import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { resourceLinks, communityLinks } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-2xl bg-primary">
                <Image
                  src={"/logo.png"}
                  height={120}
                  width={120}
                  alt="Ritual Chain Logo"
                  className='justify-center object-contain items-center rounded-2xl'
                />
              </div>
              <span className="text-lg font-semibold">RitualChain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building decentralized AI infrastructure for the next generation of applications.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="grid grid-cols-1 space-y-1 text-sm text-muted-foreground">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex flex-cols gap-2 justify-start items-center transition-colors hover:text-foreground">
                    <Icon icon={link.icon} className='size-4' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {communityLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary transition-colors hover:border-primary hover:bg-primary/10"
                  title={link.name}
                >
                  <Icon icon={link.icon} className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Ritual Chain. Built by developers, for developers.</p>
        </div>
      </div>
    </footer>
  )
}
