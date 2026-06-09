import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hispalis: Proyecto NODO - El Fangame de Pokémon en Sevilla",
  description: "Descubre el videojuego gratuito hecho por dos fans sevillanos amantes de Pokémon que está revolucionando a toda Andalucía. Explora Sevilla en un entorno post-apocalíptico.",
  keywords: ["Hispalis", "Proyecto NODO", "Pokémon Sevilla", "Hispalis Fangame", "Videojuego Pokémon Sevilla", "Duelo Jartible", "Cartas de Hispalis", "Pablo Shurmano", "Onofre Wayne"],
  authors: [{ name: "Pablo Shurmano" }, { name: "Onofre Wayne" }],
  openGraph: {
    title: "Hispalis: Proyecto NODO - El Fangame de Pokémon en Sevilla",
    description: "Sumérgete en la historia de Hispalis, una Sevilla post-apocalíptica desolada tras una gran pandemia y donde ahora reinan los Pokémon. Juega en PC y móviles.",
    url: "https://hispalisfangame.com",
    siteName: "Hispalis: Proyecto NODO",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Hispalis: Proyecto NODO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hispalis: Proyecto NODO - El Fangame de Pokémon en Sevilla",
    description: "Sumérgete en la historia de Hispalis, una Sevilla post-apocalíptica desolada donde ahora reinan los Pokémon.",
  },
  alternates: {
    canonical: "https://hispalisfangame.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Hispalis: Proyecto NODO",
  "url": "https://hispalisfangame.com",
  "description": "Sumérgete en la historia de Hispalis, una Sevilla post-apocalíptica desolada tras una gran pandemia y donde ahora reinan los Pokémon.",
  "genre": "RPG, Fangame",
  "playMode": "SinglePlayer, MultiPlayer",
  "gamePlatform": ["PC Windows", "Android Mobile"],
  "author": {
    "@type": "Organization",
    "name": "Hispalis Fangame Team",
    "members": [
      { "@type": "Person", "name": "Pablo Shurmano" },
      { "@type": "Person", "name": "Onofre Wayne" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-zinc-900 dark:bg-[#050506] dark:text-zinc-100 selection:bg-red-650 selection:text-white overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
