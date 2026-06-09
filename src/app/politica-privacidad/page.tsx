import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050506] text-zinc-655 dark:text-zinc-350 py-16 px-4 sm:px-6 lg:px-8 bg-grid-light dark:bg-grid-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-red-650 dark:hover:text-amber-500 font-bold text-sm mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver a Hispalis
        </Link>

        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950/40 border border-red-200 dark:border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-500">
            <ShieldCheck size={20} />
          </div>
          <h1 className="text-3xl font-heading font-black text-zinc-900 dark:text-white tracking-tight">
            Política de Privacidad
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl leading-relaxed text-sm">
          
          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">1. Introducción</h2>
            <p>
              El equipo de desarrollo de Hispalis: Proyecto NODO se compromete a proteger la privacidad y seguridad de la información de nuestros usuarios y colaboradores. Esta Política de Privacidad describe cómo tratamos la información personal que pudieras enviarnos a través de los canales oficiales de contacto y el bot o grupo de Telegram.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">2. Responsable del Tratamiento de Datos</h2>
            <p>
              El responsable del tratamiento de los datos personales obtenidos es <strong>Hispalis: Proyecto NODO Team</strong>, y correo electrónico de contacto: <strong>principalemed@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">3. Datos Personales que Recopilamos</h2>
            <p>
              Este sitio web es principalmente informativo y no recopila datos de registro obligatorios. Si nos contactas por correo electrónico o a través de Telegram, podríamos recibir:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-500 dark:text-zinc-400">
              <li>Tu nombre o alias de Telegram.</li>
              <li>Tu dirección de correo electrónico (si nos escribes un email).</li>
              <li>La información que decidas incluir voluntariamente en tu mensaje de consulta o feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">4. Finalidad del Tratamiento</h2>
            <p>
              Tratamos tu información con la única finalidad de responder a tus consultas sobre el fangame, recibir reportes de bugs, feedback de balance de cartas y coordinar tu participación voluntaria en torneos de la comunidad. No utilizaremos tus datos para enviar publicidad comercial no solicitada (spam).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">5. Conservación de los Datos</h2>
            <p>
              Los datos de contacto se conservarán únicamente el tiempo necesario para resolver tus dudas o canalizar las sugerencias dentro del equipo de desarrollo.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">6. Destinatarios de los Datos</h2>
            <p>
              Tus datos son confidenciales y no se venden, alquilan ni comparten con terceros ajenos al proyecto bajo ninguna circunstancia, excepto por obligación legal o requerimiento administrativo.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">7. Tus Derechos (ARCO-POL)</h2>
            <p>
              Tienes derecho a acceder a tus datos personales, rectificar los datos inexactos, solicitar su supresión cuando ya no sean necesarios, oponerse al tratamiento, limitar el tratamiento y solicitar la portabilidad de tus datos.
            </p>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, puedes enviar un correo electrónico a <strong>principalemed@gmail.com</strong> indicando tu solicitud.
            </p>
          </section>

        </div>

        {/* Mini Footer */}
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-655 mt-12">
          &copy; {new Date().getFullYear()} Hispalis: Proyecto NODO. Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
}

