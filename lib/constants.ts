import type { IconProps } from "@iconify/react"

export interface Link {
    name: string;
    href: string;
    icon: IconProps["icon"];
    type: "resource" | "community";
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
} as const;

// Array of all links for iteration 
export const linksArray: Link[] = Object.values(links);

// Filtered arrays by type
export const resourceLinks = linksArray.filter(link => link.type === "resource");
export const communityLinks = linksArray.filter(link => link.type === "community");