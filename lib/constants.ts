import type { IconProps } from "@iconify/react"

export interface Link {
    name: string;
    href: string;
    icon: IconProps["icon"];
    type: "resource" | "community";
    discordEventUrl?: string;
}

/**
 * Links object for easy access by key
 * Usage: links.docs.href, links.github.href, etc.
 */
export const links = {
    docs: {
        name: "Documentation",
        href: "https://docs.ritual.net",
        icon: "ri:book-open-fill",
        type: "resource" as const
    },
    feedback: {
        name: "Feedback",
        href: "https://feedback.ritual.tools",
        icon: "ri:message-3-fill",
        type: "resource" as const
    },
    github: {
        name: "GitHub",
        href: "https://github.com/RitualChain",
        icon: "ri:github-fill",
        type: "community" as const
    },
    discord: {
        name: "Discord",
        href: "https://discord.gg/8hcc3EAZt8",
        icon: "ri:discord-fill",
        type: "community" as const
    },
    telegram: {
        name: "Telegram",
        href: "https://t.me/RitualChain",
        icon: "ri:telegram-fill",
        type: "community" as const
    },
    reddit: {
        name: "Reddit",
        href: "https://reddit.com/r/RitualChain",
        icon: "ri:reddit-fill",
        type: "community" as const
    },
    twitter: {
        name: "Twitter",
        href: "https://x.com/BunsDev",
        icon: "ri:twitter-x-fill",
        type: "community" as const
    },
    officeHours: {
        name: "Office Hours",
        href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ritual+DevRel+Office+Hours&dates=20251106T170000Z%2F20251106T180000Z&details=Join+Ritual%27s+Lead+DevRel+Engineer%2C+Val+Alexander%2C+to+ask+questions%2C+explore+new+features%2C+and+get+assistance+with+summoning+your+ideas+from+prototype+to+production.%0A%0AJoin+here%3A+https%3A%2F%2Fdiscord.com%2Fevents%2F1210468736205852672%2F1425703047253856287&location=https%3A%2F%2Fdiscord.com%2Fevents%2F1210468736205852672%2F1425703047253856287&recur=RRULE%3AFREQ%3DWEEKLY%3BBYDAY%3DTH",
        discordEventUrl: "https://discord.com/events/1210468736205852672/1425703047253856287",
        icon: "ri:calendar-event-fill",
        type: "resource" as const
    },
} as const;

// Array of all links for iteration 
export const linksArray: Link[] = Object.values(links);

// Filtered arrays by type
export const resourceLinks = linksArray.filter(link => link.type === "resource" && link.name !== "Office Hours");
export const communityLinks = linksArray.filter(link => link.type === "community");