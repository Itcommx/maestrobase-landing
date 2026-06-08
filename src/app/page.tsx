'use client'

import { useState } from 'react'
import {
  ShoppingCart, Bell, FileText, Scan, Layers, Check, ArrowRight,
  ChevronRight, GraduationCap, Baby, Building2, Users,
  Menu, X, Home, Star, Calendar,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   SHARED
───────────────────────────────────────────────────────────── */

function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const ring = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8'
  const icon = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  const text = size === 'sm' ? 'text-base' : 'text-lg'
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${ring} rounded-lg bg-green-dark flex items-center justify-center flex-shrink-0`}>
        <Home className={`${icon} text-white`} />
      </div>
      <span className={`font-display font-bold ${text} text-gray-900 leading-none`}>
        Maestro<span className="text-orange">Base</span>
      </span>
    </div>
  )
}

function SectionHeader({
  tag,
  title,
  sub,
  light = false,
}: {
  tag: string
  title: React.ReactNode
  sub: string
  light?: boolean
}) {
  return (
    <div className="text-center mb-14">
      <span
        className={`inline-block font-display font-semibold text-xs uppercase tracking-[0.18em] mb-3 ${
          light ? 'text-green-muted' : 'text-green'
        }`}
      >
        {tag}
      </span>
      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight leading-[1.08] ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      <p
        className={`font-body text-lg max-w-xl mx-auto leading-relaxed ${
          light ? 'text-white/60' : 'text-gray-500'
        }`}
      >
        {sub}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false)
  const links: [string, string][] = [
    ['#roles', 'Para quién es'],
    ['#features', 'Funcionalidades'],
    ['#pricing', 'Planes'],
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-body text-sm text-gray-600 hover:text-green transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/auth/login"
              className="font-body text-sm text-gray-600 hover:text-green transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="/auth/login"
              className="inline-flex items-center gap-1.5 bg-orange hover:bg-[#e85e2a] text-white font-display font-semibold text-sm px-4 py-2 rounded-full transition-all hover:shadow-md hover:shadow-orange/25"
            >
              Demo gratis
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700 -mr-1"
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 space-y-1">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm text-gray-700 py-2.5 border-b border-gray-50"
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="/auth/login"
              className="block w-full text-center bg-orange text-white font-display font-semibold text-sm py-3.5 rounded-xl"
            >
              Iniciar demo gratuita — 14 días
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-green-dark flex items-center overflow-hidden pt-16">
      {/* dot pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.065]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ambient blobs */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-green opacity-35 blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-green opacity-25 blur-[90px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-36 w-full">
        <div className="max-w-2xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Star className="w-3.5 h-3.5 text-orange fill-orange flex-shrink-0" />
            <span className="font-display font-medium text-white/90 text-xs tracking-[0.15em] uppercase">
              Gestión escolar inteligente
            </span>
          </div>

          {/* headline */}
          <h1 className="font-display font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-6 tracking-tight">
            Tu escuela,
            <br />
            <span className="text-orange">en tu mano.</span>
          </h1>

          {/* sub */}
          <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Gestión escolar diseñada para maestros. Rápida, clara y siempre contigo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="/auth/login"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-[#e85e2a] text-white font-display font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Iniciar demo gratuita — 14 días
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/[0.15] border border-white/20 text-white font-display font-medium text-base px-7 py-4 rounded-xl transition-all"
            >
              Ver cómo funciona
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* micro-trust */}
          <div className="flex flex-wrap gap-5">
            {['Sin tarjeta de crédito', '14 días gratis', 'Soporte incluido'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-body text-sm text-white/50">
                <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-green-muted" />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* wave divider → gray-50 */}
      <div className="absolute bottom-0 inset-x-0 leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-16 sm:h-20"
        >
          <path
            d="M0 72L1440 72L1440 22C1200 72 960 4 720 38C480 72 240 4 0 22Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   ROLES
───────────────────────────────────────────────────────────── */

const ROLES = [
  {
    Icon: Building2,
    title: 'Director',
    sub: 'Visión total de la escuela',
    desc: 'Estadísticas en tiempo real, campañas de comunicación, agenda coordinada con maestros, reportes y control total de módulos activos.',
    iconBg: '#E8F5EE',
    iconColor: '#1A7A4A',
    checkColor: '#1A7A4A',
    features: ['Estadísticas generales', 'Campañas escolares', 'Agenda y calendario', 'Control de módulos'],
  },
  {
    Icon: GraduationCap,
    title: 'Maestro',
    sub: 'Tu grupo, bajo control',
    desc: 'Captura calificaciones, asigna tareas, organiza tu calendario, administra puntos y opera el punto de venta en kermeses.',
    iconBg: '#E3F1F8',
    iconColor: '#1A5C7A',
    checkColor: '#1A5C7A',
    features: ['Calificaciones por trimestre', 'Tareas con notificaciones', 'Calendario de clase', 'POS en kermeses'],
  },
  {
    Icon: Users,
    title: 'Padre de familia',
    sub: 'Siempre al tanto',
    desc: 'Consulta las tareas de tus hijos, descarga boletas de calificaciones y recibe notificaciones importantes de la escuela.',
    iconBg: '#F1EEFF',
    iconColor: '#6B3FA0',
    checkColor: '#6B3FA0',
    features: ['Tareas de sus hijos', 'Boleta descargable', 'Notificaciones escolares'],
  },
  {
    Icon: Baby,
    title: 'Alumno',
    sub: 'Tu espacio educativo',
    desc: 'Recibe avisos de tus tareas directamente en tu panel y consulta o descarga tu boleta de calificaciones cuando la necesites.',
    iconBg: '#FFF0EB',
    iconColor: '#FF6B35',
    checkColor: '#FF6B35',
    features: ['Notificaciones de tareas', 'Boleta de calificaciones'],
  },
  {
    Icon: ShoppingCart,
    title: 'Operador',
    sub: 'Eventos sin caos',
    desc: 'POS completo para kermeses y eventos: gestiona productos, escanea códigos de barras, procesa ventas y registra métodos de pago.',
    iconBg: '#FFF5E3',
    iconColor: '#9E6000',
    checkColor: '#9E6000',
    features: ['Catálogo de productos', 'Scanner de códigos', 'Múltiples métodos de pago', 'Registro de órdenes'],
  },
]

function RolesSection() {
  return (
    <section id="roles" className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Para quién es"
          title={
            <>
              Una plataforma,
              <br />
              cinco perfiles.
            </>
          }
          sub="Cada rol tiene su propio panel con exactamente lo que necesita. Sin información de más, sin confusión."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES.map(({ Icon, title, sub, desc, iconBg, iconColor, checkColor, features }, i) => (
            <div
              key={title}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 cursor-default ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="w-6 h-6" style={{ color: iconColor }} />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-0.5">{title}</h3>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-3">
                {sub}
              </p>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-gray-700">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: checkColor }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    Icon: FileText,
    title: 'Boleta digital imprimible',
    desc: 'Generada automáticamente con calificaciones por trimestre, promedio general y datos del alumno. Lista para imprimir sin configuración adicional.',
    dark: true,
  },
  {
    Icon: Bell,
    title: 'Tareas con notificaciones',
    desc: 'El maestro asigna y padres y alumnos reciben al instante. Sin depender de grupos de WhatsApp ni hojas volantes.',
    dark: false,
  },
  {
    Icon: Calendar,
    title: 'Calendario escolar',
    desc: 'Maestros registran eventos de clase. El director ve todo el calendario de la escuela en un solo lugar. Sin correos, sin llamadas.',
    dark: false,
  },
  {
    Icon: Scan,
    title: 'Kermés & POS',
    desc: 'Punto de venta completo para eventos escolares. Escanea, cobra, acepta múltiples formas de pago y genera reporte al cierre.',
    dark: false,
  },
  {
    Icon: Layers,
    title: 'Módulos activables',
    desc: 'Cada escuela activa solo lo que necesita y cuando lo necesita. La plataforma crece con tu institución.',
    dark: false,
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Funcionalidades"
          title={
            <>
              Todo lo que tu escuela
              <br />
              necesita.
            </>
          }
          sub="Diseñado desde cero para el día a día de una institución escolar real."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ Icon, title, desc, dark }) => (
            <div
              key={title}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                dark
                  ? 'bg-green-dark border-transparent'
                  : 'bg-white border-gray-100 hover:border-green/20'
              }`}
            >
              <div
                className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${
                  dark ? 'bg-white/15' : 'bg-green-light'
                }`}
              >
                <Icon className={`w-5 h-5 ${dark ? 'text-green-muted' : 'text-green'}`} />
              </div>
              <h3
                className={`font-display font-bold text-lg mb-2 ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${
                  dark ? 'text-white/65' : 'text-gray-600'
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────────────── */

const PLANS = [
  {
    name: 'Demo',
    badge: null,
    price: 'Gratis',
    period: '14 días',
    desc: 'Para conocer la plataforma sin compromiso.',
    features: ['Dashboard y estadísticas', 'Comunicación interna', 'Control de asistencia', 'Calificaciones'],
    cta: 'Empezar gratis',
    highlight: false,
  },
  {
    name: 'Básico',
    badge: null,
    price: 'Consultar',
    period: 'por mes',
    desc: 'Para escuelas que empiezan a digitalizar sus procesos.',
    features: ['Todo en Demo', 'Campañas escolares', 'Soporte por correo'],
    cta: 'Empezar',
    highlight: false,
  },
  {
    name: 'Pro',
    badge: 'Más popular',
    price: 'Consultar',
    period: 'por mes',
    desc: 'Para escuelas que quieren el sistema completo.',
    features: [
      'Todo en Básico',
      'Kermés & POS',
      'Sistema de puntos',
      'Módulo operador',
      'Portal del alumno',
      'Planeación NEM',
    ],
    cta: 'Empezar',
    highlight: true,
  },
  {
    name: 'Enterprise',
    badge: null,
    price: 'A medida',
    period: '',
    desc: 'Para redes y sistemas escolares con múltiples planteles.',
    features: ['Todo en Pro', 'Colegiaturas', 'Admisiones', 'Supervisión de zona', 'Soporte dedicado'],
    cta: 'Contactar',
    highlight: false,
  },
]

function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Planes"
          title={
            <>
              Para cada escuela,
              <br />
              el plan correcto.
            </>
          }
          sub="Empieza gratis y escala cuando lo necesites. Sin contratos largos ni letra chica."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {PLANS.map(({ name, badge, price, period, desc, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 flex flex-col gap-6 ${
                highlight
                  ? 'bg-green-dark text-white shadow-2xl shadow-green-dark/20 ring-2 ring-green-dark lg:scale-[1.03]'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange text-white text-[11px] font-display font-bold px-3.5 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                  {badge}
                </span>
              )}

              <div>
                <h3
                  className={`font-display font-bold text-xl mb-1 ${
                    highlight ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span
                    className={`font-display font-extrabold text-2xl ${
                      highlight ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {price}
                  </span>
                  {period && (
                    <span
                      className={`font-body text-xs ${
                        highlight ? 'text-white/50' : 'text-gray-400'
                      }`}
                    >
                      {period}
                    </span>
                  )}
                </div>
                <p
                  className={`font-body text-sm leading-snug ${
                    highlight ? 'text-white/60' : 'text-gray-500'
                  }`}
                >
                  {desc}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        highlight ? 'text-green-muted' : 'text-green'
                      }`}
                    />
                    <span
                      className={`font-body text-sm ${
                        highlight ? 'text-white/80' : 'text-gray-700'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/auth/login"
                className={`block text-center font-display font-semibold text-sm py-3 rounded-xl transition-all ${
                  highlight
                    ? 'bg-orange hover:bg-[#e85e2a] text-white hover:shadow-lg hover:shadow-orange/30'
                    : 'bg-green-light text-green hover:bg-green hover:text-white'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="relative bg-green-dark py-20 sm:py-28 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.055]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-dots)" />
      </svg>
      <div className="absolute -top-28 right-0 w-[420px] h-[420px] rounded-full bg-green opacity-30 blur-[90px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-5 tracking-tight leading-[1.08]">
          ¿Lista tu escuela
          <br />
          para dar el salto?
        </h2>
        <p className="font-body text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          14 días gratis, sin tarjeta de crédito. Configura tu escuela en menos de 10 minutos.
        </p>
        <a
          href="/auth/login"
          className="inline-flex items-center gap-2.5 bg-orange hover:bg-[#e85e2a] text-white font-display font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          Iniciar demo gratuita — 14 días
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <p className="font-body text-gray-400 text-sm text-center">
            Infraestructura escolar para todos.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/auth/login"
              className="font-body text-sm text-gray-500 hover:text-green transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="/auth/login"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-green hover:text-green-dark transition-colors"
            >
              Demo gratuita
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <a
            href="https://deerflow.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-gray-300 hover:text-gray-400 transition-colors"
          >
            ✦ Created by Deerflow
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RolesSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
