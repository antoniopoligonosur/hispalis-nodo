import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050506] text-zinc-650 dark:text-zinc-350 py-16 px-4 sm:px-6 lg:px-8 bg-grid-light dark:bg-grid-dark transition-colors duration-300">
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
            <Shield size={20} />
          </div>
          <h1 className="text-3xl font-heading font-black text-zinc-900 dark:text-white tracking-tight">
            Aviso Legal
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl leading-relaxed text-sm">
          
          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos del titular:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-500 dark:text-zinc-400">
              <li><strong>Titular del Proyecto:</strong> Hispalis: Proyecto NODO Fangame Team</li>
              <li><strong>Desarrolladores:</strong> Pablo Shurmano y Onofre Wayne</li>
              <li><strong>Email de Contacto:</strong> principalemed@gmail.com / info@hispalisfangame.com</li>
              <li><strong>Actividad:</strong> Desarrollo de videojuegos de entretenimiento sin fines lucrativos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">3. Uso del Portal</h2>
            <p>
              La web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, &quot;los contenidos&quot;) en Internet pertenecientes a Hispalis: Proyecto NODO o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro o contacto que fuese necesario para participar de la comunidad.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">4. Protección de Datos</h2>
            <p>
              Todo lo relativo al tratamiento de datos personales de los usuarios está recogido en nuestra detallada{" "}
              <Link href="/politica-de-privacidad" className="text-red-650 dark:text-amber-500 hover:underline">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">5. Propiedad Intelectual e Industrial</h2>
            <p>
              Hispalis: Proyecto NODO es un fangame sin fines lucrativos creado por y para fans. Pokémon y sus marcas asociadas son propiedad intelectual de Nintendo, Creatures Inc., Game Freak y The Pokémon Company. Todo el material gráfico, música o marcas originales de la franquicia Pokémon utilizados en esta web pertenecen a sus respectivos propietarios legales.
            </p>
            <p className="mt-3">
              Los diseños originales creados por Pablo Shurmano y Onofre Wayne específicos para Hispalis (como ilustraciones, cartas custom y logotipos propios) pertenecen a sus creadores.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">6. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              Hispalis: Proyecto NODO no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-3">7. Modificaciones y Jurisdicción</h2>
            <p>
              El equipo de desarrollo se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal. La relación con el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Sevilla.
            </p>
          </section>

        </div>

        {/* Mini Footer */}
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-650 mt-12">
          &copy; {new Date().getFullYear()} Hispalis: Proyecto NODO. Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
}

