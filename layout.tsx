import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Aarya Kids Store | Little outfits, big smiles', description: 'Shop cute baby dresses, traditional outfits and party wear at Aarya Kids Store.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
