# Aarya Kids Store — starter website

A responsive Next.js storefront with demo baby clothing products, category filters, search, size selection, and WhatsApp order links. It is a starter template, not yet a production-ready payment or admin system.

## Run on a computer
1. Install Node.js 20 or newer.
2. Extract this ZIP and open a terminal in the `aarya-kids-store` folder.
3. Run `npm install`
4. Copy `.env.example` to `.env.local`.
5. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your WhatsApp number including country code, digits only (India example: `919876543210`).
6. Run `npm run dev` and open `http://localhost:3000`.

## Supabase setup (optional at this stage)
1. Create a project at https://supabase.com.
2. In Project Settings → API, copy the Project URL and anon/public key into `.env.local`.
3. Run `supabase-schema.sql` in the Supabase SQL Editor.

The current storefront uses sample products in `lib/products.ts`; connect product fetching and an authenticated admin CRUD screen before using the Supabase table for live inventory. The SQL intentionally does not permit public writes.

## Before launch
- Replace sample photos and product details with photos you own or have permission to use.
- Add real contact, shipping, returns, privacy, and terms information.
- Implement Supabase Auth and role-restricted admin CRUD. Keep service-role secrets server-side only.
- Use a payment provider's hosted checkout for UPI/card payments; never collect or store UPI PINs or card details yourself.
- Test WhatsApp ordering with your real number. The placeholder number will not work until configured.
- Deploy to Vercel or another Next.js host and add environment variables there.
