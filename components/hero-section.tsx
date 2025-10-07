import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { links } from '@/lib/constants'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="font-medium">Building the future of AI on blockchain</span>
        </div>
        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Ritual Chain Developer Hub
        </h1>
        <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Join the community of blockchain and AI developers building decentralized intelligence. Access comprehensive
          documentation, collaborate with peers, and showcase your innovations.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={links.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg" className="gap-2"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href={links.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg" variant="outline"
            >
              Join Telegram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
