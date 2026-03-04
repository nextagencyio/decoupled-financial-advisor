# Decoupled Financial Advisor

A financial advisory firm website starter template for Decoupled Drupal + Next.js. Built for wealth management firms, financial planners, investment advisors, and fiduciary practices.

![Decoupled Financial Advisor Screenshot](docs/screenshot.png)

## Features

- **Service Catalog** - Present wealth management, retirement planning, estate planning, and tax optimization services with minimum investment details
- **Advisor Directory** - Showcase certified financial advisors with credentials, specialties, experience, and contact information
- **Resource Library** - Publish market insights, retirement guides, and estate planning education for clients and prospects
- **Client Statistics** - Highlight assets under management, client families served, retention rates, and years of service
- **Modern Design** - Clean, accessible UI optimized for building trust and credibility in financial services

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-financial-advisor my-advisory-firm
cd my-advisory-firm
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Advisory Firm"
```

Note the space ID returned. Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, statistics, featured services, and CTA
- 4 Services (Wealth Management, Retirement Planning, Estate Planning, Tax Optimization)
- 3 Advisors (Catherine Sterling CFP/CFA/CIMA, Richard Hayes CFP/ChFC, Anika Patel CFP/CPA/PFS)
- 3 Resources (2026 Market Outlook, Retirement Planning Mistakes, Estate Planning Essentials)
- 2 Static Pages (About, Contact)

</details>

## Content Types

### Service
- **minimum_investment**: Minimum investment threshold for the service
- **image**: Featured image for the service
- **body**: Detailed description of the advisory service

### Advisor
- **specialty**: Area of financial expertise
- **certifications**: Professional certifications (CFP, CFA, CPA, etc.)
- **experience_years**: Years in financial services
- **email**: Professional email address
- **phone**: Contact phone number
- **photo**: Professional headshot

### Resource
- **resource_category**: Category (Market Insights, Retirement, Estate Planning, etc.)
- **image**: Featured image for the resource
- **body**: Educational content and financial guidance

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/financial-advisor-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-financial-advisor)

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
