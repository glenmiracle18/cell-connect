# Cell Connect 🏛️

Your digital companion for cell-based ministry management. Streamline attendance, leadership, and member engagement.

## Core Features 🌟

-   📊 Attendance Tracking
-   👥 Member Management
-   👑 Temporary Leadership
-   📖 Bible Study Resources
-   📢 Announcements
-   💰 Giving Records
-   🙏 Prayer Requests
-   💬 Leader Chat

## Tech Stack 🛠️

-   **Framework**: [Remix](https://remix.run)
-   **Database**: [Supabase](https://supabase.com)
-   **UI**: [shadcn/ui](https://ui.shadcn.com)
-   **Forms**: [Conform](https://conform.guide)
-   **Validation**: [Zod](https://zod.dev)
-   **Testing**:
    -   [Vitest](https://vitest.dev)
    -   [React Testing Library](https://testing-library.com)
    -   [Playwright](https://playwright.dev)

## Project Structure 📁

```
├── app/
│   ├── @types/                        # TypeScript type definitions
│   │   ├── attendance.d.ts
│   │   ├── member.d.ts
│   │   └── index.d.ts
│   │
│   ├── auth/                          # Authentication
│   │   ├── auth-service.ts
│   │   ├── auth-provider.tsx
│   │   └── policies.ts
│   │
│   ├── components/                    # Shared components
│   │   ├── atoms/                     # Basic building blocks
│   │   │   ├── attendance-marker.tsx
│   │   │   ├── member-card.tsx
│   │   │   └── prayer-item.tsx
│   │   │
│   │   ├── blocks/                    # Complex components
│   │   │   ├── attendance-grid.tsx
│   │   │   ├── member-list.tsx
│   │   │   └── prayer-wall.tsx
│   │   │
│   │   ├── layouts/                   # Page layouts
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── AuthLayout.tsx
│   │   │
│   │   └── ui/                        # shadcn/ui components
│   │
│   ├── config/                        # App configuration
│   │   ├── supabase.ts
│   │   ├── constants.ts
│   │   └── features.ts
│   │
│   ├── data/                          # Data layer
│   │   ├── models/                    # Database models
│   │   │   ├── attendance.ts
│   │   │   ├── member.ts
│   │   │   └── transaction.ts
│   │   │
│   │   └── services/                  # Business logic
│   │       ├── attendance-service.ts
│   │       ├── member-service.ts
│   │       └── prayer-service.ts
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── use-attendance.ts
│   │   ├── use-members.ts
│   │   └── use-prayers.ts
│   │
│   ├── lib/                           # Utility functions
│   │   ├── date-utils.ts
│   │   ├── formatting.ts
│   │   └── validation.ts
│   │
│   ├── routes/                        # Application routes
│   │   ├── _index/                    # Dashboard
│   │   │   ├── components/
│   │   │   │   ├── stats-overview.tsx
│   │   │   │   └── activity-feed.tsx
│   │   │   └── route.tsx
│   │   │
│   │   ├── attendance/
│   │   │   ├── components/
│   │   │   │   ├── attendance-form.tsx
│   │   │   │   └── attendance-stats.tsx
│   │   │   ├── $date.edit.tsx
│   │   │   └── route.tsx
│   │   │
│   │   └── members/
│   │       ├── components/
│   │       │   ├── member-form.tsx
│   │       │   └── member-details.tsx
│   │       ├── $id.edit.tsx
│   │       └── route.tsx
│   │
│   └── services/                      # External services
│       ├── sms/
│       │   └── sms-service.ts
│       └── storage/
│           └── storage-service.ts
│
├── public/                            # Static assets
│   ├── fonts/
│   └── images/
│
├── tests/                             # Test files
│   ├── e2e/
│   ├── integration/
│   └── unit/
│
├── .env.example                       # Environment variables template
├── drizzle.config.ts                  # Drizzle ORM config
├── package.json                       # Project dependencies
├── README.md                          # Project documentation
├── remix.config.js                    # Remix configuration
├── tailwind.config.js                 # Tailwind CSS config
└── tsconfig.json                      # TypeScript config
```

## Development 🚀

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Environment Variables 🔐

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
```

## Deployment 📦

1. Build the application:

```bash
npm run build
```

2. Deploy the following:

-   `build/`
-   `public/build/`

## Contributing 🤝

1. Branch naming: `feature/`, `fix/`, `docs/`
2. Commit using conventional commits
3. Submit PR for review

## Support 📞

Technical: jeremiah@chienda.com
