import { BookOpen, Users, MessageSquare, Github, Send, MessageCircle } from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { links } from "@/lib/constants"

export function BentoGrid() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Large card — Feedback */}
        <BentoCard
          title="Feedback Dashboard"
          description="A public dashboard for developers to share feature requests, vote on ideas, and discuss priorities. Shape the roadmap through transparent, two-way communication with the Ritual Foundation."
          icon={MessageSquare}
          className="md:col-span-2 lg:row-span-2"
          href={links.feedback.href}
          featured
        />

        <BentoCard
          title="GitHub"
          description="Explore the Ritual Chain codebase, contribute to open source, and access starter templates."
          icon={Github}
          className="md:col-span-1"
          href={links.github.href}
        />

        <BentoCard
          title="Discord"
          description="Real-time collaboration, technical support, and community discussions with fellow developers."
          icon={MessageCircle}
          className="md:col-span-1"
          href={links.discord.href}
        />


        {/* Large card - Documentation */}
        <BentoCard
          title="Documentation"
          description="Comprehensive guides, API references, and tutorials to get you started with Ritual Chain development."
          icon={BookOpen}
          className="md:col-span-2 lg:row-span-2"
          href={links.docs.href}
          featured
        />

        <BentoCard
          title="Telegram"
          description="Join our Telegram channels for quick updates, announcements, and community chat."
          icon={Send}
          className="md:col-span-1"
          href={links.telegram.href}
        />

        <BentoCard
          title="Reddit"
          description="Engage in discussions, share insights, and stay updated with the Ritual community on Reddit."
          icon={Users}
          className="md:col-span-1"
          href={links.reddit.href}
        />
      </div>
    </section>
  )
}
