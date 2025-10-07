import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface BentoCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  href: string
  featured?: boolean
}

export function BentoCard({ title, description, icon: Icon, className, href, featured }: BentoCardProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        featured && "bg-gradient-to-br from-card to-card/50",
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="mb-4 flex items-start justify-between">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",
              featured && "h-14 w-14",
            )}
          >
            <Icon className={cn("h-6 w-6", featured && "h-7 w-7")} />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div>
          <h3 className={cn("mb-2 font-semibold text-card-foreground", featured && "text-xl")}>{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  )
}
