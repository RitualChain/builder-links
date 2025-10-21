# Builder Links

<div align="center">
  <h3>🔗 Ritual Chain Developer Hub</h3>
  <p>Curated collection of resources for builders on Ritual Chain</p>
  <p>
    <a href="https://links.ritual.tools"><strong>Visit Live Site »</strong></a>
  </p>
</div>

---

## 📖 Overview

**Builder Links** is a modern, centralized developer hub that serves as the primary gateway for builders on Ritual Chain. This beautifully designed landing page provides quick access to essential resources, documentation, community channels, and developer tools needed to build decentralized AI applications on the Ritual Chain blockchain.

### ✨ Key Features

- **🎨 Modern UI/UX** - Responsive bento grid layout with smooth animations and dark mode support
- **📚 Centralized Resources** - Quick access to documentation, GitHub, Discord, and other essential links
- **🚀 Fast Performance** - Built with Next.js 15 App Router for optimal loading speeds
- **♿ Accessible** - WCAG compliant components using Radix UI primitives
- **📱 Mobile First** - Fully responsive design that works seamlessly across all devices
- **🔍 SEO Optimized** - Complete metadata and Open Graph tags for better discoverability
- **📊 Analytics Ready** - Integrated with Vercel Analytics for tracking user engagement

---

## 🛠️ Tech Stack

This project leverages modern web technologies for a superior developer experience:

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Geist Font](https://vercel.com/font)** - Vercel's modern font family

### Developer Tools

- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[pnpm](https://pnpm.io/)** - Efficient package manager
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics platform

### Additional Libraries

- `react-hook-form` - Form state management
- `zod` - Schema validation
- `next-themes` - Theme management
- `class-variance-authority` - CSS variant utilities
- `tailwind-merge` - Tailwind class merging utility

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **pnpm** 8.x or higher ([Install](https://pnpm.io/installation))

```bash
# Verify installations
node --version
pnpm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/RitualChain/builder-links.git
cd builder-links
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on `localhost:3000` |
| `pnpm build` | Create optimized production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run linting checks |

---

## 📁 Project Structure

```
builder-links/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero component
│   ├── bento-grid.tsx       # Resource grid
│   ├── bento-card.tsx       # Individual cards
│   └── footer.tsx           # Site footer
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
│   ├── icons/               # App icons
│   └── og-image.png         # Open Graph image
├── styles/                  # Additional stylesheets
├── biome.json              # Biome configuration
├── components.json         # Shadcn UI config
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── pnpm-lock.yaml          # Lock file
├── postcss.config.mjs      # PostCSS config
├── tailwind.config.ts      # Tailwind CSS config
└── tsconfig.json           # TypeScript config
```

---

## 🎨 Customization

### Adding New Resource Cards

Edit `components/bento-grid.tsx` to add new resource cards:

```tsx
<BentoCard
  title="Your Resource"
  description="Description of your resource"
  icon={YourIcon}
  className="md:col-span-1"
  href="https://your-link.com"
/>
```

### Modifying Theme Colors

Update Tailwind configuration in `app/globals.css` to customize the color palette:

```css
@layer base {
  :root {
    --primary: your-color;
    --secondary: your-color;
    /* ... */
  }
}
```

### Updating Metadata

Modify SEO metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RitualChain/builder-links)

Or manually:

1. Install Vercel CLI: `pnpm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **Netlify**: Connect your repository and deploy
- **AWS Amplify**: Follow the Next.js deployment guide
- **Railway**: One-click deployment from GitHub
- **Self-hosted**: Run `pnpm build && pnpm start`

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Keep PRs focused and atomic

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Important Links

- **Documentation**: [https://docs.ritual.net](https://docs.ritual.net)
- **GitHub**: [https://github.com/RitualChain](https://github.com/RitualChain)
- **Discord**: [https://discord.gg/ritual](https://discord.gg/ritual)
- **Telegram**: [https://t.me/ritual_net](https://t.me/ritual_net)
- **Feedback Dashboard**: [https://feedback.ritual.tools](https://feedback.ritual.tools)
- **Website**: [https://ritual.net](https://ritual.net)

---

## 💬 Support

Need help? Have questions?

- **Discord**: Join our [Discord community](https://discord.gg/ritual) for real-time support
- **GitHub Issues**: Report bugs or request features
- **Feedback Dashboard**: Share ideas and vote on feature requests

---

## 🙏 Acknowledgments

Built with ❤️ by the Ritual team and community contributors.

Special thanks to:

- [Vercel](https://vercel.com) for Next.js and hosting
- [Shadcn](https://ui.shadcn.com) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- All our amazing contributors

---

<div align="center">
  <p>Made for builders, by builders 🛠️</p>
  <p>
    <a href="https://ritual.net">Ritual Chain</a> •
    <a href="https://docs.ritual.net">Documentation</a> •
    <a href="https://github.com/RitualChain">GitHub</a>
  </p>
</div>
