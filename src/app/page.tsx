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
  ShoppingBag,
  Menu,
  X,
  Clock,
  User,
  ChevronRight
} from "lucide-react";

// Blog / News real data
const blogs = [
  {
    id: 1,
    title: "Tsunami de novedades en las cartas de Hispalis: nueva colección, nuevas normas, más Torneos…",
    date: "septiembre 29, 2025",
    image: "/IMG-PORTADA-COLECCION-INVICTA-Y-MARIANA-CARTAS-768x432.png",
    category: "Torneos & Cartas"
  },
  {
    id: 2,
    title: "La APP móvil de Hispalis Cardgame recibe su primera gran actualización",
    date: "junio 9, 2025",
    image: "/WhatsApp-Image-2025-06-05-at-02.46.05-e1749486169350-768x432.jpeg",
    category: "App Móvil"
  },
  {
    id: 3,
    title: "¡Última hora! Estos son los mejores jugadores de Duelo Jartible y los últimos cambios que habrá en la colección",
    date: "mayo 27, 2025",
    image: "/photo_5859611311019770795_y-e1748388061986-768x432.jpg",
    category: "Comunidad"
  },
  {
    id: 4,
    title: "Ya es oficial: estos son los cambios de normas que se introducirán en Duelo Jartible",
    date: "mayo 3, 2025",
    image: "/WhatsApp-Image-2025-05-03-at-13.58.08-e1746273581533-768x435.jpeg",
    category: "Normas"
  },
  {
    id: 5,
    title: "Todo lo que necesitas saber sobre las actualizaciones de la colección de cartas y próximos torneos",
    date: "marzo 9, 2025",
    image: "/torneo-cartas-namek-ok-e1741533541374-768x433.png",
    category: "Actualizaciones"
  },
  {
    id: 6,
    title: "Llega el parche 4.2 de Hispalis: el más grande hasta la fecha… ¡Y el último!",
    date: "diciembre 27, 2024",
    image: "/Descarga-la-demo-aqui-vf.png",
    category: "Parche PC"
  },
  {
    id: 7,
    title: "Subido el parche 4.1: ¡todas las novedades!",
    date: "diciembre 21, 2024",
    image: "/Juan-y-Medio-1024x763-1-e1734787706818-768x432.jpg",
    category: "Novedades"
  },
  {
    id: 8,
    title: "Dónde comprar las famosas cartas Pokémon de Sevilla que se agotaron en un día",
    date: "diciembre 12, 2024",
    image: "/WhatsApp-Image-2024-12-10-at-14.58.57-768x432.webp",
    category: "Venta Física"
  }
];

// Merchandise items
const merchanItems = [
  {
    id: 1,
    name: "Camiseta Edición Primigenia",
    description: "Diseño exclusivo impreso en serigrafía de alta calidad. 5 modelos disponibles 100% ilustrados por los creadores.",
    price: "19,90 €",
    badge: "Más Vendido",
    image: "/camisa-curro-lover.jpeg"
  },
  {
    id: 2,
    name: "Póster Sevilla Post-Apocalíptica",
    description: "Impresión de alta resolución en papel satinado. 3 diseños artísticos increíbles que retratan la desolación de Hispalis.",
    price: "7,50 €",
    badge: "Arte Coleccionista",
    image: "/poster-curro-charca-819x1024.png"
  },
  {
    id: 3,
    name: "Sobre de cartas: Colección Primigenia",
    description: "Consigue el pack oficial con las cartas físicas oficiales ilustradas de la región de Hispalis. Edición limitada de lanzamiento.",
    price: "4,90 €",
    badge: "Edición Especial",
    image: "/mockup-4-cartas-coleccion-primigenia-con-fondo-y-logo-819x1024.png"
  }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMerchId, setActiveMerchId] = useState(1);

  // Sync state with HTML dark class
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Handle sticky scroll styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMerchItem = merchanItems.find((item) => item.id === activeMerchId) || merchanItems[0];

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${isDark ? "bg-[#050506] text-zinc-100" : "bg-[#f8fafc] text-zinc-900"}`}>
      
      {/* Background radial glows for Dark Mode */}
      {isDark && (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-emerald-950/10 rounded-full blur-[130px] pointer-events-none" />
        </>
      )}

      {/* HEADER / NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md border-b ${
          scrolled
            ? "border-zinc-200 dark:border-zinc-800 shadow-md"
            : "border-zinc-200/50 dark:border-zinc-800/50"
        }`}
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to bottom, rgba(24, 24, 27, 0.8), rgba(24, 24, 27, 0.8)), url('/fondo-header.png')"
            : "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/fondo-header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex flex-row items-center justify-between whitespace-nowrap gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/POKEMON-HISPALIS-LOGO-v3-big-300x251.webp"
                alt="Hispalis: Proyecto NODO Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight block uppercase bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                HISPALIS
              </span>
              <span className="text-[9px] tracking-widest font-black block uppercase text-zinc-500 dark:text-zinc-400 -mt-1.5">
                PROYECTO NODO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Large single row) */}
          <nav className="hidden xl:flex items-center gap-8 text-base font-bold">
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
                className="text-zinc-650 hover:text-red-600 dark:text-zinc-300 dark:hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Telegram CTA */}
            <a
              href="https://t.me/hispalisfangame"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0088cc] to-[#00a2ed] hover:from-[#007cbd] hover:to-[#009beb] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-sm border border-[#0088cc]/20 cursor-pointer animate-pulse-soft"
              id="telegram-cta"
            >
              <Send size={14} />
              <span>Únete a la comunidad en Telegram</span>
            </a>

            {/* Pokéball Theme Switch */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-1 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-550 transition-colors bg-white dark:bg-zinc-800 cursor-pointer shadow-sm shrink-0"
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isDark ? 360 : 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 10 }}
              title={isDark ? "Cambiar a Modo Claro (Centro Pokémon)" : "Cambiar a Modo Oscuro (Sevilla Post-Apocalíptica)"}
            >
              <div className="relative w-9 h-9">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" stroke="#1f2937" strokeWidth="6" fill="white" />
                    <path d="M 5 50 A 45 45 0 0 1 95 50 Z" fill="#ef4444" stroke="#1f2937" strokeWidth="6" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="18" fill="white" stroke="#1f2937" strokeWidth="6" />
                    <circle cx="50" cy="50" r="8" fill="white" stroke="#1f2937" strokeWidth="3" />
                  </svg>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}>
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
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex items-center gap-3 xl:hidden shrink-0">
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
              className="p-2 rounded-lg text-zinc-655 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-250 cursor-pointer"
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
              <span>Telegram de la Comunidad</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION (Limpieza y estética Nintendo corporativa) */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 mb-6 border border-amber-200/20 shadow-sm">
              🎮 Fangame Pokémon Gratuito
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight mb-4 uppercase bg-gradient-to-r from-red-600 via-amber-500 to-red-600 bg-clip-text text-transparent">
              Hispalis: Proyecto NODO
            </h1>

            <h2 className="text-lg sm:text-xl font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              Descubre el videojuego gratuito hecho por dos fans sevillanos amantes de Pokémon que está revolucionando a toda Andalucía.
            </h2>

            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
              Sumérgete en la historia de Hispalis, una Sevilla post-apocalíptica desolada tras una gran pandemia y donde ahora reinan los Pokémon.
            </p>
          </motion.div>

          {/* Hero Right Image (Clean, no AI indicators) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className={`relative w-full aspect-video rounded-3xl overflow-hidden border p-1 shadow-xl transition-all duration-300 ${
              isDark 
                ? "border-zinc-800 bg-[#16161a]" 
                : "border-zinc-200 bg-white"
            }`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Hispalis: Proyecto NODO - Sevilla Pokémon"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* NUEVA SECCIÓN EXCLUSIVA DE DESCARGAS */}
      <section className="relative w-full overflow-hidden border-t border-b border-zinc-200 dark:border-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image integrating banner-demo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-demo.png"
            alt="Banner Demo Hispalis"
            fill
            className="filter brightness-[0.4] dark:brightness-[0.3]"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-zinc-950/80 to-zinc-950/90 z-1" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white mb-4">Descarga la Demo de Hispalis</h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Obtén de manera 100% gratuita el instalador para PC o la app para tu dispositivo Android y empieza a recorrer la Sevilla de Hispalis.
            </p>
          </div>
          
          {/* Download Buttons (Gaming Premium) */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://hispalisfangame.com/jugarenpc/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg transition-colors duration-200 cursor-pointer border border-red-500/20 whitespace-nowrap active:scale-95"
            >
              <Laptop size={22} />
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider font-semibold opacity-80">Jugar en Ordenador</span>
                <span className="block text-sm font-black">Descargar para PC</span>
              </div>
            </a>
            <a
              href="https://hispalisfangame.com/jugarenmovil/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg transition-colors duration-200 cursor-pointer border border-zinc-700 whitespace-nowrap active:scale-95"
            >
              <Smartphone size={22} />
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider font-semibold opacity-80">Jugar en Teléfono</span>
                <span className="block text-sm font-black">Descargar para Android</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN ACCIONES RÁPIDAS (Integración de Imágenes) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Accesos Directos</h2>
          <p className="text-2xl sm:text-4xl font-heading font-black tracking-tight">Enlaces Oficiales del Proyecto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.a
            href="https://hispalisfangame.com/cartas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-red-950" 
                : "bg-white border-zinc-200 hover:border-red-200 hover:-translate-y-1"
            }`}
          >
            <div>
              {/* Client Cover Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/IMG-PORTADA-COLECCION-INVICTA-Y-MARIANA-CARTAS-768x432.png"
                  alt="Colección de Cartas"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold font-heading mb-2 text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Mira toda la colección
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Accede a la base de datos completa de las cartas físicas oficiales del juego. Descubre habilidades, estadísticas y el increíble arte regional.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center gap-2 text-xs font-black uppercase text-red-600 dark:text-red-500 text-left">
              <span>EXPLORAR CARTAS</span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.a>

          {/* Card 2 */}
          <motion.a
            href="https://www.namekjuegos.com/inicio/116198-hispalis-proyecto-nodo-coleccion-primigenia-cartas.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-amber-950" 
                : "bg-white border-zinc-200 hover:border-amber-200 hover:-translate-y-1"
            }`}
          >
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/Banners-web-hispalis-descarga-demo-aqui-1-scaled.jpg"
                  alt="Venta Online Cartas"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold font-heading mb-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                  Venta online aquí
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Compra sobres y cartas de la Colección Primigenia físicamente. Visita Namek Juegos, distribuidora y tienda oficial del juego en España.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center gap-2 text-xs font-black uppercase text-amber-600 dark:text-amber-500 text-left">
              <span>Comprar Cartas</span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.a>

          {/* Card 3 */}
          <motion.a
            href="https://hispalisfangame.com/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl ${
              isDark 
                ? "bg-[#111114] border-zinc-900 hover:border-purple-950" 
                : "bg-white border-zinc-200 hover:border-purple-200 hover:-translate-y-1"
            }`}
          >
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/pokedex-hispalis-banner.png"
                  alt="Pokédex de Hispalis"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold font-heading mb-2 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Pokédex de Hispalis
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Explora el registro oficial de Pokémon autóctonos de la región de Hispalis. Consulta sus tipos regionales, estadísticas y descripciones del lore.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center gap-2 text-xs font-black uppercase text-purple-600 dark:text-purple-500 text-left">
              <span>ABRIR POKÉDEX</span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* SECCIÓN ACTUALIZACIONES Y NOTICIAS (Identidad Andaluza & Compacto) */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-900/40 dark:border-slate-950 transition-colors duration-300 relative overflow-hidden"
        style={{
          backgroundColor: isDark ? "#050917" : "#09122a",
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
            : "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-2">Actualizaciones</h2>
            <p className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-white">Noticias y Actualizaciones</p>
          </div>

          {/* Grid of 8 actual blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className={`group relative rounded-2xl overflow-hidden border flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isDark
                    ? "bg-[#0b1226]/80 border-slate-800/80 hover:border-slate-700 text-white"
                    : "bg-white border-slate-200 hover:border-slate-300 text-zinc-900"
                }`}
              >
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
                      <Clock size={11} />
                      <span>{blog.date}</span>
                    </div>
                    <h3 className={`font-heading font-bold text-xs sm:text-sm leading-snug line-clamp-3 group-hover:text-red-500 dark:group-hover:text-amber-400 transition-colors ${
                      isDark ? "text-white" : "text-zinc-800"
                    }`}>
                      {blog.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-red-655 dark:text-amber-500">
                    <span>Leer Artículo</span>
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN MERCHANDISING (Accesibilidad de botones corregida) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="tienda">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Merchan Left Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Exclusivo</h2>
            <h3 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-6 text-zinc-900 dark:text-white">
              Consigue nuestro merchan exclusivo <span className="text-red-600 dark:text-red-500">antes de que se agote</span>
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl">
              Llévate a casa piezas únicas del proyecto hechas al 100% por nosotros. Contamos con 5 modelos de camisetas exclusivas, 3 diseños de pósters coleccionables de alta calidad artística, chapas con los Pokémon iniciales y pegatinas increíbles. Cada artículo apoya directamente al desarrollo del fangame.
            </p>

            <div className="space-y-4">
              {merchanItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveMerchId(item.id)}
                  className={`flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeMerchId === item.id
                      ? isDark
                        ? "bg-[#18181c] border-zinc-700 shadow-md"
                        : "bg-zinc-50 border-zinc-300 shadow-md"
                      : isDark 
                        ? "bg-[#111114]/50 border-zinc-900/60 hover:border-zinc-800" 
                        : "bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest rounded-md">
                        {item.badge}
                      </span>
                      <h4 className="font-heading font-bold text-zinc-850 dark:text-white text-sm sm:text-base">{item.name}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-100 dark:border-zinc-900 shrink-0">
                    <span className="text-base sm:text-lg font-black font-heading text-zinc-900 dark:text-amber-500">{item.price}</span>
                    
                    {/* CTA "¡Yo quiero!" (Alta visibilidad y contraste perfecto) */}
                    <a
                      href="https://t.me/hispalisfangame"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors duration-200 cursor-pointer active:scale-95"
                    >
                      <ShoppingBag size={13} />
                      <span>¡Yo quiero!</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchan Right Column */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-[460px] mx-auto">
            <div className={`relative w-full h-full rounded-3xl overflow-hidden border p-1 shadow-xl transition-all duration-300 ${
              isDark 
                ? "border-zinc-800 bg-[#16161a]" 
                : "border-zinc-200 bg-white"
            }`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={activeMerchItem.image}
                  alt={activeMerchItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md border border-white/10">
                Diseño Oficial
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CORPORATIVO PREMIUM */}
      <footer className={`relative border-t transition-colors duration-300 ${
        isDark 
          ? "bg-[#020203] border-zinc-950 text-zinc-400" 
          : "bg-zinc-900 border-zinc-950 text-zinc-300"
      }`}>
        {/* Top styling band inspired by Nintendo design */}
        <div className="h-1 bg-red-600 w-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            
            {/* Column 1: Branding */}
            <div className="md:col-span-5 flex flex-col items-start text-left">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/POKEMON-HISPALIS-LOGO-v3-big-300x251.webp"
                    alt="Hispalis Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-heading font-black text-lg sm:text-xl tracking-tight block uppercase text-white">
                    HISPALIS
                  </span>
                  <span className="text-[9px] tracking-widest font-black block uppercase text-red-500 -mt-1.5">
                    PROYECTO NODO
                  </span>
                </div>
              </Link>
              
              <p className="text-xs text-zinc-450 dark:text-zinc-450 leading-relaxed mb-4 max-w-sm">
                Un videojuego RPG de Pokémon gratuito ambientado en una Sevilla post-apocalíptica. Proyecto sin fines lucrativos desarrollado bajo la política de uso justo para fans de Pokémon.
              </p>
            </div>

            {/* Column 2: Sobre Nosotros */}
            <div className="md:col-span-4 flex flex-col items-start text-left">
              <h4 className="font-heading font-bold text-white uppercase text-[10px] tracking-widest mb-4">Sobre Nosotros</h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Creado y desarrollado con pasión por los fans sevillanos:
              </p>
              <div className="flex flex-col gap-1.5 text-xs text-zinc-300 mb-4">
                <span className="font-bold">Pablo Shurmano</span>
                <span className="font-bold">Onofre Wayne</span>
              </div>
              
              <a
                href="https://t.me/hispalisfangame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
              >
                <Send size={12} className="text-[#0088cc]" />
                <span>Únete a Telegram</span>
              </a>
            </div>

            {/* Column 3: Social Links */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <h4 className="font-heading font-bold text-white uppercase text-[10px] tracking-widest mb-4">Redes Oficiales</h4>
              <ul className="space-y-2.5 text-xs font-semibold">
                <li>
                  <a
                    href="https://tiktok.com/@hispalis.proyectonodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-red-500 transition-colors"
                  >
                    TikTok Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/hispalis.proyectonodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors"
                  >
                    Instagram Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hispalisnodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors"
                  >
                    Twitter / X Oficial
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal bottom row (Aviso Legal, Política de Cookies, Política de Privacidad) */}
          <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500">
            <div className="flex flex-wrap justify-center gap-6 font-bold">
              <Link href="/aviso-legal" className="hover:text-red-500 transition-colors">
                Aviso Legal
              </Link>
              <Link href="/politica-cookies" className="hover:text-red-500 transition-colors">
                Política de Cookies
              </Link>
              <Link href="/politica-privacidad" className="hover:text-red-500 transition-colors">
                Política de Privacidad
              </Link>
            </div>
            
            <p className="text-center sm:text-right">
              &copy; {new Date().getFullYear()} Hispalis: Proyecto NODO. Pokémon y sus marcas son de Nintendo / TPC.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
