"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ExternalLink,
  Send,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  Clock,
  User,
  Heart,
  ChevronRight
} from "lucide-react";

// Blog / News real data
const blogs = [
  {
    id: 1,
    title: "Tsunami de novedades en las cartas de Hispalis: nueva colección, nuevas normas, más Torneos…",
    date: "septiembre 29, 2025",
    image: "/IMG-PORTADA-COLECCION-INVICTA-Y-MARIANA-CARTAS-768x432.png",
    category: "Torneos & Cartas",
    glow: "rgba(239, 68, 68, 0.4)",
  },
  {
    id: 2,
    title: "La APP móvil de Hispalis Cardgame recibe su primera gran actualización",
    date: "junio 9, 2025",
    image: "/WhatsApp-Image-2025-06-05-at-02.46.05-e1749486169350-768x432.jpeg",
    category: "App Móvil",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: 3,
    title: "¡Última hora! Estos son los mejores jugadores de Duelo Jartible y los últimos cambios que habrá en la colección",
    date: "mayo 27, 2025",
    image: "/photo_5859611311019770795_y-e1748388061986-768x432.jpg",
    category: "Comunidad",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  {
    id: 4,
    title: "Ya es oficial: estos son los cambios de normas que se introducirán en Duelo Jartible",
    date: "mayo 3, 2025",
    image: "/WhatsApp-Image-2025-05-03-at-13.58.08-e1746273581533-768x435.jpeg",
    category: "Normas",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: 5,
    title: "Todo lo que necesitas saber sobre las actualizaciones de la colección de cartas y próximos torneos",
    date: "marzo 9, 2025",
    image: "/torneo-cartas-namek-ok-e1741533541374-768x433.png",
    category: "Actualizaciones",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: 6,
    title: "Llega el parche 4.2 de Hispalis: el más grande hasta la fecha… ¡Y el último!",
    date: "diciembre 27, 2024",
    image: "/Descarga-la-demo-aqui-vf.png",
    category: "Parche PC",
    glow: "rgba(236, 72, 153, 0.4)",
  },
  {
    id: 7,
    title: "Subido el parche 4.1: ¡todas las novedades!",
    date: "diciembre 21, 2024",
    image: "/Juan-y-Medio-1024x763-1-e1734787706818-768x432.jpg",
    category: "Novedades",
    glow: "rgba(20, 184, 166, 0.4)",
  },
  {
    id: 8,
    title: "Dónde comprar las famosas cartas Pokémon de Sevilla que se agotaron en un día",
    date: "diciembre 12, 2024",
    image: "/WhatsApp-Image-2024-12-10-at-14.58.57-768x432.webp",
    category: "Venta Física",
    glow: "rgba(244, 63, 94, 0.4)",
  }
];

// Merchandise showcase items
const merchanItems = [
  {
    id: 1,
    name: "Camiseta Edición Primigenia",
    description: "Diseño exclusivo impreso en serigrafía de alta calidad. 5 modelos disponibles 100% ilustrados por los creadores.",
    price: "19,90 €",
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Póster Sevilla Post-Apocalíptica",
    description: "Impresión de alta resolución en papel satinado. 3 diseños artísticos increíbles que retratan la desolación de Hispalis.",
    price: "7,50 €",
    badge: "Arte Coleccionista"
  },
  {
    id: 3,
    name: "Pack de Chapas y Pegatinas NODO",
    description: "Chapas metálicas y pegatinas de vinilo resistentes al agua con los Pokémon iniciales de Hispalis y el logo oficial del proyecto.",
    price: "4,90 €",
    badge: "Esenciales"
  }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Sync state with DOM HTML dark class
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Handle sticky scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${isDark ? "bg-grid-dark bg-[#050506]" : "bg-grid-light bg-[#f8fafc] text-zinc-900"}`}>
      
      {/* Background radial glows */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-650/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[400px] left-10 w-[500px] h-[500px] bg-purple-650/10 rounded-full blur-[140px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[110px] pointer-events-none" />
        </>
      )}

      {/* HEADER / NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#050506]/90 border-b border-zinc-900 backdrop-blur-md shadow-2xl shadow-black/10"
              : "bg-white/90 border-b border-zinc-200 backdrop-blur-md shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/POKEMON-HISPALIS-LOGO-v3-big-300x251.webp"
                alt="Hispalis: Proyecto NODO Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-black text-xl tracking-tight block uppercase bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                HISPALIS
              </span>
              <span className="text-[10px] tracking-widest font-black block uppercase text-zinc-500 dark:text-zinc-400 -mt-1.5">
                PROYECTO NODO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold">
            {[
              { label: "Colección de cartas físicas", href: "https://hispalisfangame.com/cartas/" },
              { label: "Aprende a jugar", href: "https://hispalisfangame.com/cartas/" },
              { label: "Compra packs de cartas", href: "https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html" },
              { label: "App móvil", href: "https://hispalisfangame.com/jugarenmovil/" },
              { label: "El Flamador", href: "https://hispalisfangame.com/cartas/" },
              { label: "Tienda", href: "https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html" }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-650 hover:text-red-650 dark:text-zinc-300 dark:hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {/* Telegram CTA */}
            <a
              href="https://t.me/hispalisfangame"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-5 py-2.5 bg-gradient-to-r from-[#0088cc] to-[#00a2ed] hover:from-[#007cbd] hover:to-[#009beb] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg shadow-[#0088cc]/20 flex items-center gap-2 cursor-pointer border border-[#0088cc]/20 animate-pulse-soft"
              id="telegram-cta"
            >
              <Send size={15} />
              <span>Únete a la comunidad en Telegram</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            {/* Pokéball / Master Ball Toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-1 rounded-full border-2 border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors bg-white dark:bg-zinc-900 cursor-pointer shadow-md"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isDark ? 360 : 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              title={isDark ? "Cambiar a Modo Claro (Centro Pokémon)" : "Cambiar a Modo Oscuro (Sevilla Post-Apocalíptica)"}
            >
              <div className="relative w-10 h-10">
                {/* Pokéball SVG (Light Mode) */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" stroke="#1f2937" strokeWidth="6" fill="white" />
                    <path d="M 5 50 A 45 45 0 0 1 95 50 Z" fill="#ef4444" stroke="#1f2937" strokeWidth="6" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="18" fill="white" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="8" fill="white" stroke="#1f2937" strokeWidth="3" />
                  </svg>
                </div>
                {/* Master Ball SVG (Dark Mode) */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" stroke="#111827" strokeWidth="6" fill="white" />
                    <path d="M 5 50 A 45 45 0 0 1 95 50 Z" fill="#8b5cf6" stroke="#111827" strokeWidth="6" />
                    {/* Master Ball nodes */}
                    <circle cx="28" cy="28" r="9" fill="#ec4899" />
                    <circle cx="72" cy="28" r="9" fill="#ec4899" />
                    {/* Letter M */}
                    <path d="M 42 22 L 46 22 L 50 29 L 54 22 L 58 22 L 58 35 L 53 35 L 53 28 L 50 33 L 47 28 L 47 35 L 42 35 Z" fill="white" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#111827" strokeWidth="6" />
                    <circle cx="50" cy="50" r="18" fill="white" stroke="#111827" strokeWidth="6" />
                    <circle cx="50" cy="50" r="8" fill="white" stroke="#111827" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3 xl:hidden">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer"
              animate={{ rotate: isDark ? 360 : 0 }}
              title="Cambiar Tema"
            >
              <div className="w-8 h-8 relative">
                <div className={`absolute inset-0 transition-opacity duration-350 ${isDark ? "opacity-0" : "opacity-100"}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" stroke="#1f2937" strokeWidth="6" fill="white" />
                    <path d="M 5 50 A 45 45 0 0 1 95 50 Z" fill="#ef4444" stroke="#1f2937" strokeWidth="6" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="18" fill="white" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="8" fill="white" stroke="#1f2937" strokeWidth="3" />
                  </svg>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-350 ${isDark ? "opacity-100" : "opacity-0"}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" stroke="#111827" strokeWidth="6" fill="white" />
                    <path d="M 5 50 A 45 45 0 0 1 95 50 Z" fill="#8b5cf6" stroke="#111827" strokeWidth="6" />
                    <circle cx="28" cy="28" r="9" fill="#ec4899" />
                    <circle cx="72" cy="28" r="9" fill="#ec4899" />
                    <path d="M 42 22 L 46 22 L 50 29 L 54 22 L 58 22 L 58 35 L 53 35 L 53 28 L 50 33 L 47 28 L 47 35 L 42 35 Z" fill="white" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#111827" strokeWidth="6" />
                    <circle cx="50" cy="50" r="18" fill="white" stroke="#111827" strokeWidth="6" />
                    <circle cx="50" cy="50" r="8" fill="white" stroke="#111827" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-650 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-250 cursor-pointer"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-20 z-40 w-full border-b xl:hidden flex flex-col p-6 gap-5 shadow-xl ${
              isDark
                ? "bg-[#050506]/98 border-zinc-900 text-zinc-300"
                : "bg-white/98 border-zinc-200 text-zinc-900"
            }`}
          >
            {[
              { label: "Colección de cartas físicas", href: "https://hispalisfangame.com/cartas/" },
              { label: "Aprende a jugar", href: "https://hispalisfangame.com/cartas/" },
              { label: "Compra packs de cartas", href: "https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html" },
              { label: "App móvil", href: "https://hispalisfangame.com/jugarenmovil/" },
              { label: "El Flamador", href: "https://hispalisfangame.com/cartas/" },
              { label: "Tienda", href: "https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html" }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="https://t.me/hispalisfangame"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 py-3 bg-gradient-to-r from-[#0088cc] to-[#00a2ed] text-white font-bold rounded-xl text-center shadow-lg shadow-[#0088cc]/20 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              <span>Únete a la comunidad en Telegram</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,var(--color-bg-mesh)_100%)] opacity-80" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-6 bg-red-100 text-red-650 dark:bg-red-950/40 dark:text-red-500 border border-red-200 dark:border-red-500/25">
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Pokémon Fangame Sevilla</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight mb-6">
              Descubre el videojuego gratuito hecho por dos fans sevillanos amantes de Pokémon que está{" "}
              <span className={isDark ? "text-gradient-gold" : "text-red-650"}>revolucionando a toda Andalucía.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl">
              Sumérgete en la historia de Hispalis, una Sevilla post-apocalíptica desolada tras una gran pandemia y donde ahora reinan los Pokémon. Disfruta del juego en ordenadores Windows y móviles Android.
            </p>

            {/* Download CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://hispalisfangame.com/jugarenpc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-650 text-white font-bold rounded-2xl shadow-lg hover:shadow-red-600/30 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border border-red-500/20 active:scale-98"
              >
                <Laptop size={20} className="group-hover:-translate-y-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider font-semibold opacity-85">Descargar para</span>
                  <span className="block font-black text-sm">PC Windows (Gratis)</span>
                </div>
              </a>

              <a
                href="https://hispalisfangame.com/jugarenmovil/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-850 text-white font-bold rounded-2xl shadow-lg dark:border dark:border-zinc-750 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer active:scale-98"
              >
                <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider font-semibold opacity-85">Descargar para</span>
                  <span className="block font-black text-sm">Android Móvil (Gratis)</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Hero Right Image - Custom Styled Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className={`relative w-full aspect-video rounded-3xl overflow-hidden border p-1 shadow-2xl transition-all duration-300 ${
              isDark 
                ? "border-zinc-850 bg-[#16161a] shadow-red-955/20" 
                : "border-zinc-200 bg-white"
            }`}>
              {/* Radial gradient mask for gaming glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Hispalis: Proyecto NODO - Sevilla Pokémon post-apocalíptica"
                  fill
                  priority
                  className="object-cover object-center scale-100 hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Dynamic Overlay HUD Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5">
                <div>
                  <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-1">Última Versión</span>
                  <h3 className="font-heading font-bold text-lg text-white">Hispalis: Proyecto NODO</h3>
                  <p className="text-zinc-300 text-xs mt-0.5">Explora las ruinas de Sevilla y combate.</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-ping" />
                  <span className="text-[10px] font-mono text-zinc-300 uppercase">Servidores Activos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS SECTION (ACCIONES RÁPIDAS Y ENLACES OFICIALES) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs font-black uppercase tracking-widest text-red-650 dark:text-amber-500 mb-3">Accesos Directos</h2>
          <p className="text-2xl sm:text-4xl font-heading font-black tracking-tight">Enlaces Oficiales del Proyecto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.a
            href="https://hispalisfangame.com/cartas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-red-950/80 shadow-black/30" 
                : "bg-white border-zinc-200 hover:border-red-200 hover:-translate-y-1"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow animation background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/40 text-red-650 dark:text-red-500 flex items-center justify-center mb-6 border border-red-200/20">
                <Sparkles size={26} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Mira toda la colección
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Accede a la base de datos completa de las cartas físicas oficiales del juego. Descubre habilidades, estadísticas y el increíble arte regional.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase text-red-650 dark:text-red-400">
              <span>Explorar Cartas</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Card 2 */}
          <motion.a
            href="https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-amber-950/80 shadow-black/30" 
                : "bg-white border-zinc-200 hover:border-amber-200 hover:-translate-y-1"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-6 border border-amber-200/20">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white group-hover:text-amber-655 dark:group-hover:text-amber-500 transition-colors">
                Venta online aquí
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Compra sobres y cartas de la Colección Primigenia físicamente. Visita Namek Juegos, distribuidora y tienda oficial del juego en España.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-650 dark:text-amber-500">
              <span>Comprar Cartas</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Card 3 */}
          <motion.a
            href="https://hispalisfangame.com/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-purple-950/80 shadow-black/30" 
                : "bg-white border-zinc-200 hover:border-purple-200 hover:-translate-y-1"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950/40 text-purple-650 dark:text-purple-400 flex items-center justify-center mb-6 border border-purple-200/20">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white group-hover:text-purple-605 dark:group-hover:text-purple-400 transition-colors">
                Pokédex de Hispalis
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Explora el registro oficial de Pokémon autóctonos de la región de Hispalis. Consulta sus tipos regionales, estadísticas y descripciones del lore.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-650 dark:text-purple-400">
              <span>Abrir Pokédex</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* FEED DE NOTICIAS Y BLOGS PROFESIONAL */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-950 bg-zinc-50 dark:bg-[#070709] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl text-left">
              <h2 className="text-xs font-black uppercase tracking-widest text-red-655 dark:text-amber-500 mb-3">Actualizaciones</h2>
              <p className="text-3xl sm:text-5xl font-heading font-black tracking-tight">Noticias y Actualizaciones</p>
              <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-2">
                Mantente al día con los parches del juego, cambios de normas y novedades del torneo del Duelo Jartible.
              </p>
            </div>
          </div>

          {/* Grid of 8 actual blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative rounded-3xl overflow-hidden border flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-350 ${
                  isDark
                    ? "bg-[#111114] border-zinc-900 hover:border-zinc-800"
                    : "bg-white border-zinc-200 hover:border-zinc-350"
                }`}
                onMouseEnter={() => setHoveredCard(blog.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Blog Cover Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
                      <Clock size={12} />
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base leading-snug text-zinc-850 dark:text-white line-clamp-3 group-hover:text-red-655 dark:group-hover:text-amber-500 transition-colors">
                      {blog.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs font-bold text-red-650 dark:text-amber-500">
                    <span>Leer Artículo</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Hover Glow effect for dark mode */}
                {isDark && hoveredCard === blog.id && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none border-2 transition-all duration-300"
                    style={{
                      borderColor: blog.glow,
                      boxShadow: `0 0 20px ${blog.glow}`
                    }}
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MERCHANDISING SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="tienda">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Merchan Left Column: Info & Showcase cards */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-red-650 dark:text-amber-500 mb-3">Exclusivo</h2>
            <h3 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-6">
              Consigue nuestro merchan exclusivo <span className="text-red-650 dark:text-red-500">antes de que se agote</span>
            </h3>
            
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Llévate a casa piezas únicas del proyecto hechas al 100% por nosotros. Contamos con 5 modelos de camisetas exclusivas, 3 diseños de pósters coleccionables de alta calidad artística, chapas con los Pokémon iniciales y pegatinas increíbles. Cada artículo apoya directamente al desarrollo del fangame.
            </p>

            <div className="space-y-4">
              {merchanItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? "bg-[#111114] border-zinc-900 hover:border-zinc-800" 
                      : "bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-red-100 text-red-655 dark:bg-red-950/40 dark:text-red-400 text-[10px] font-black uppercase tracking-widest rounded-md">
                        {item.badge}
                      </span>
                      <h4 className="font-heading font-bold text-zinc-850 dark:text-white">{item.name}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-100 dark:border-zinc-900">
                    <span className="text-lg font-black font-heading text-red-655 dark:text-amber-500">{item.price}</span>
                    
                    {/* CTA "¡Yo quiero!" */}
                    <a
                      href="https://t.me/hispalisfangame"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-red-650 to-red-750 hover:from-red-500 hover:to-red-650 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-red-655/15 cursor-pointer active:scale-95 transition-transform"
                    >
                      <ShoppingBag size={12} />
                      <span>¡Yo quiero!</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchan Right Column: Image with polished presentation */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-[500px] mx-auto">
            <div className={`relative w-full h-full rounded-3xl overflow-hidden border p-1.5 shadow-2xl transition-all duration-300 ${
              isDark 
                ? "border-zinc-850 bg-[#16161a] shadow-red-955/10" 
                : "border-zinc-200 bg-white"
            }`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/merchan-web-1-1024x1024.png"
                  alt="Hispalis Merchandising Oficial"
                  fill
                  className="object-cover scale-100 hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Graphic Overlay Badge */}
              <div className="absolute top-6 right-6 z-20 bg-gradient-to-br from-red-600 to-amber-500 text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white/20">
                100% Hecho por Fans
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER PREMIUM DE ALTO IMPACTO */}
      <footer className="relative bg-[#0d0d10] dark:bg-[#040405] text-zinc-400 border-t border-zinc-950 transition-colors duration-300">
        
        {/* Top styling band inspired by Pokédex/Pokémon aesthetic */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-amber-500 to-purple-650 w-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
            
            {/* Column 1: Branding */}
            <div className="md:col-span-5 flex flex-col items-start text-left">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14">
                  <Image
                    src="/POKEMON-HISPALIS-LOGO-v3-big-300x251.webp"
                    alt="Hispalis: Proyecto NODO Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-heading font-black text-2xl tracking-tight block uppercase bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                    HISPALIS
                  </span>
                  <span className="text-[10.5px] tracking-widest font-black block uppercase text-zinc-300 dark:text-zinc-400 -mt-1.5">
                    PROYECTO NODO
                  </span>
                </div>
              </Link>
              
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
                Un videojuego RPG de Pokémon gratuito ambientado en una Sevilla post-apocalíptica y devastada por una gran pandemia, donde los Pokémon ahora reinan y los entrenadores luchan por restaurar el NODO.
              </p>
              
              <div className="text-xs text-zinc-500">
                © {new Date().getFullYear()} Hispalis: Proyecto NODO. Todos los derechos reservados.<br />
                Este es un proyecto sin fines lucrativos desarrollado bajo la política de uso justo para fans de Pokémon.
              </div>
            </div>

            {/* Column 2: Sobre Nosotros (Creators & Telegram) */}
            <div className="md:col-span-4 flex flex-col items-start text-left">
              <h4 className="font-heading font-bold text-white uppercase text-xs tracking-widest mb-6">Sobre Nosotros</h4>
              <div className="space-y-4 mb-8">
                <p className="text-sm leading-relaxed text-zinc-400">
                  Creado y desarrollado con pasión por los fans y diseñadores sevillanos:
                </p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                    <User size={14} className="text-red-500" />
                    <span>Pablo Shurmano</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                    <User size={14} className="text-amber-500" />
                    <span>Onofre Wayne</span>
                  </div>
                </div>
              </div>
              
              {/* Telegram Button in Footer */}
              <a
                href="https://t.me/hispalisfangame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl text-sm border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
              >
                <Send size={14} className="text-[#0088cc]" />
                <span>Únete a Telegram</span>
              </a>
            </div>

            {/* Column 3: Social Links */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <h4 className="font-heading font-bold text-white uppercase text-xs tracking-widest mb-6">Redes Sociales</h4>
              <p className="text-sm leading-relaxed text-zinc-400 mb-6">
                Sigue el progreso diario, clips de gameplay y sorteos en nuestras redes oficiales:
              </p>
              <ul className="space-y-3.5 text-sm font-semibold">
                <li>
                  <a
                    href="https://tiktok.com/@hispalis.proyectonodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-zinc-300 hover:text-red-500 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    TikTok Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/hispalis.proyectonodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-500 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Instagram Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hispalisnodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-zinc-300 hover:text-purple-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Twitter / X Oficial
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
