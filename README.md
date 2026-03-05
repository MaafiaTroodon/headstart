# HEADSTART Tennis Academy (Halifax) Demo

Modern, mobile-first client demo website built with Next.js App Router + TypeScript.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Zustand + LocalStorage persistence
- Mock data in `/src/data/*.ts`
- Service layer in `/src/lib/services/*`

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Routes included

- `/` Home
- `/court-bookings`
- `/programs`
- `/programs/[id]`
- `/programs/adults`
- `/programs/juniors`
- `/membership`
- `/merchandise`
- `/about`
- `/meet-the-team`
- `/contact`
- `/login`
- `/dashboard`

## Where mock data lives

- Programs: `/src/data/programs.ts`
- Membership plans: `/src/data/memberships.ts`
- Team members: `/src/data/team.ts`
- Merchandise products: `/src/data/products.ts`
- Shared model interfaces: `/src/types/models.ts`

## Client-side persistence

Zustand store with persistence (`zustand/middleware/persist`) stores:

- Auth session (member/admin)
- Bookings
- Program registrations/waitlist
- Membership purchases
- Cart

Store file:

- `/src/store/useAppStore.ts`

## Service layer (for easy backend swap)

Current mock services:

- `/src/lib/services/authService.ts`
- `/src/lib/services/bookingService.ts`
- `/src/lib/services/programService.ts`
- `/src/lib/services/membershipService.ts`
- `/src/lib/services/commerceService.ts`

### Replace with Node/Express + MongoDB later

1. Keep UI components/pages unchanged.
2. Replace service methods to call REST endpoints (`fetch` or Axios).
3. Add API contracts matching model interfaces in `/src/types/models.ts`.
4. Keep optimistic UI/persistence in Zustand or shift to server-truth as needed.
5. Migrate mock validation (invite codes, checkout forms) to backend endpoints.

Example migration target:

- `programService.all()` -> `GET /api/programs`
- `programService.byId(id)` -> `GET /api/programs/:id`
- `bookingService.create(...)` -> `POST /api/bookings`
- `authService.signIn(...)` -> `POST /api/auth/login`

## Notes

- All forms are mock-only (no payment gateway, no real email delivery).
- Imagery uses public placeholder CDNs configured in `next.config.ts` remote patterns.
- Footer content and navigation follow the requested brand/content spec.
