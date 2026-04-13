'use client'

import { HeroVideoCover } from '@/components/hero-video-cover'
import { Header as RadiantHeader } from '@/components/from-tailwind-templates/radiant-ts-header/header'
import { DiagonalDivider } from '@/components/diagonal-divider'
import { BadgeAniversario } from '@/components/badge-aniversario'
import Header from '@/components/Header'
import { motion } from 'motion/react'
import Image from 'next/image'
import {Mosaico2ConProps} from "@/components/brandpetram/con-props/mosaico-2-con-props";
import {MosaicoInvertidoConProps} from "@/components/brandpetram/con-props/mosaico-invertido-con-props";
import LogoCloud from '@/components/motion-plus/logo-cloud';
import { AlphaBP } from '@/components/brandpetram/alpha-bp';
import { ScrollStorytelling } from '@/components/brandpetram/scroll-storytelling';
import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia';
import { CirculosConProps } from '@/components/brandpetram/con-props/circulos-con-props';
import { FaqSectionsThreeColumnsBPConProps } from '@/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props';
import { CincoCardsConProps } from '@/components/brandpetram/con-props/cinco-cards-con-props';
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp';
import { Compass, Ruler, Hammer, CheckCircle, Shield, Wrench, TrendingUp, Star } from 'lucide-react'

export default function HomeClient({ heroContent }: { heroContent: React.ReactNode }) {
  return (
    <div>
      {/* Header with main navigation */}
      <Header variant="dark" lang="en" />

      {/* Container for hero + diagonal */}
      <div className="relative">
        {/* Hero with industrial park video */}
        <HeroVideoCover
          lang="en"
          videoSrc="/parques-industriales-mexicali-nelson-3-optimizado.mp4"
          posterSrc="/hero-poster-0.jpg"
          alt="Nelson II Industrial Park in Mexicali — Aerial view of industrial buildings"
          overlayOpacity={0.30}
          videoBrightness={0.8}
          videoContrast={1.3}
          videoFilterDesktop="brightness(1.10) saturate(1.15) contrast(1.05)"
          videoFilterMobile="brightness(1.05) saturate(1.10) contrast(1.02)"
          videoOverlayDesktop="rgba(100, 150, 250, 0.25)"
          videoOverlayMobile="rgba(30, 80, 255, 0.20)"
          videoOverlayBlendMode="multiply"
          darkOverlay={0.5}
          darkOverlayMobile={0.3}
          enableAnimations={false}
          gridConfig={{
            strokeColor: 'stroke-white/20',
            gridSize: 150,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
          }}
          gridConfigMobile={{
            strokeColor: 'stroke-white/20',
            gridSize: 80,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
            fadeRadius: '20rem',
          }}
        >
          {heroContent}
        </HeroVideoCover>

        {/* Decorative rain squares - Right side of hero */}
        <div className="absolute top-full right-40 md:right-60 lg:right-80 z-10 pointer-events-none">
          <CuadritosLluvia />
        </div>

        {/* Anniversary badge - Positioned on the hero */}
        <motion.div
          className="absolute translate-y-10 md:translate-y-0 left-5 md:left-auto md:bottom-10 md:right-5 -rotate-10"
          style={{ zIndex: 10, opacity: 0 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <BadgeAniversario className="w-[180px] h-[180px] 768:w-[280px] 768:h-[280px] 1024:w-[350px] 1024:h-[350px]" textoInferior="years" textoCurvo="CELEBRATING" />
        </motion.div>

        {/* Diagonal divider - Positioned at bottom of hero */}
        <div className="absolute bottom-0 size-0 left-0 right-0 z-20">
          <DiagonalDivider fillColor="white" height={150} slope={100} invertDirection={true} />
        </div>
      </div>

      {/* Logo Cloud (mobile/tablet) */}
        <div className={'1200:hidden'}><LogoCloud lang="en" /></div>



      {/* Alpha component - Identity and offering summary */}
      <div className="container mx-auto 1200:px-4 py-16 overflow-hidden">
        <AlphaBP
          descripcion="The family that established Mexicali's first maquiladora in 1965 still operates personally. 4 parks, 33 international corporations and long-term relationships measured in decades."
          lang="en"
        />
      </div>

      {/* About us section with animated numbers */}
      <RadiantHeader
        headline="Pioneers of the maquiladora industry in Mexicali since 1965."
        lead="Gulfstream has been with us for over 35 years. Honeywell for over 3 decades. 33 international corporations have already chosen to operate in our parks — long-term relationships measured in decades."
        sectionTitle="Two paths, one provider"
        paragraphs={[
          'If you need a building ready to operate, we have 4 industrial parks in Mexicali with available buildings — from El Vigia to Nelson II, the most modern park with a centralized fire suppression system.',
          'If you need something custom, Baumex — our in-house construction firm with 30 years and over 75 completed projects — designs and builds it under a single contract. The largest building we have built: 550,000 ft² for Gulfstream, with LEED certification, FM Global and BRB seismic systems.',
        ]}
        statsHeading="Our Numbers"
        stats={[
          { label: 'International Corporations', start: 20, end: 33 },
          { label: 'Years of Experience', start: 50, end: 60, prefix: '+' },
          { label: 'Industrial Parks', start: 2, end: 4 },
          { label: 'Square Feet\nDeveloped', start: 2, end: 4, suffix: 'M' },
        ]}
      />

      {/* Two paths: lease + build-to-suit */}
      <div className={'w-full p-10 mx-auto mt-32 relative'}>
              <Mosaico2ConProps
                  bloque1Titulo="Available Buildings"
                  bloque1Descripcion="4 parks in Mexicali with buildings ready to operate — from El Vigia to Nelson II"
                  bloque1LinkTexto="View parks"
                  bloque1LinkHref="/industrial-parks"
                  bloque2ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-12.jpeg"
                  bloque2ImagenAlt="Available industrial building in Mexicali industrial park"
                  bloque3ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
                  bloque3ImagenAlt="Interior of industrial building in Mexicali"
                  bloque4Titulo="Looking for industrial space?"
                  bloque4Descripcion="Check availability across our 4 parks"
                  bloque4LinkTexto="Contact us"
                  bloque4LinkHref="/contact"
                  imagenDerechaSrc="/Seleccionadas/nave-gulfstream-en-parque-nelson-2-54.jpg"
                  imagenDerechaAlt="Nelson II Industrial Park in Mexicali"
              />

              {/* Build-to-suit with Baumex */}
              <div className="-mt-1">
                  <MosaicoInvertidoConProps
                      bloque1Titulo="Custom-Built to Your Specs"
                      bloque1Descripcion="Baumex, our in-house construction firm: 30 years, 75+ projects. Design, permits and construction under a single contract — no intermediaries"
                      bloque1LinkTexto="About Baumex"
                      bloque1LinkHref="/construction/baumex"
                      bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg"
                      bloque2ImagenAlt="Build-to-suit industrial building construction in Mexicali"
                      bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                      bloque3ImagenAlt="Custom industrial building construction by Baumex"
                      bloque4Titulo="Need something custom?"
                      bloque4Descripcion="From 5,000 to 550,000 ft² under a single contract"
                      bloque4LinkTexto="Request a project"
                      bloque4LinkHref="/contact"
                      imagenIzquierdaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
                      imagenIzquierdaAlt="Build-to-suit industrial building by Baumex in Mexicali"
                  />
              </div>
          </div>



      {/* ScrollStorytelling - Interactive scroll storytelling */}
      <div className={'1200:mt-80 relative'}>
        <ScrollStorytelling
          mediaAspectRatio="aspect-[16/9]"
          items={[
            {
              caption: 'Phase 1: Planning',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">1</span><div>Site Selection in<br/>Mexicali and Consulting</div></div>,
              description: 'We analyze your operational requirements — electrical capacity, clear height, surface area, technical specifications — and present the exact location your operation needs in Mexicali.',
              image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-3.jpg',
              tag: {
                icon: <Compass className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Consulting',
                href: '/industrial-parks',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'View available parks', href: '/industrial-parks', primary: true },
                { text: 'Contact a consultant', href: '/contact', primary: false },
              ],
            },
            {
              caption: 'Phase 2: Development',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">2</span><div>Design and<br/>Engineering Development</div></div>,
              description: 'Our team of architects and engineers translates your specifications into a complete executive project: structural, electrical, mechanical and civil. Every square foot is designed around your production process.',
              image: '/tunel-honeywell.jpg',
              tag: {
                icon: <Ruler className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Executive Design',
                href: '/construction/engineering-design',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'View engineering & design', href: '/construction/engineering-design', primary: true },
                { text: 'Request a project', href: '/contact', primary: false },
              ],
            },
            {
              caption: 'Phase 3: Execution',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">3</span><div>Build-to-Suit<br/>Construction</div></div>,
              description: 'Our in-house construction firm executes your project from start to finish — from earthwork and foundations to electromechanical installations — meeting the quality standards demanded by companies like Gulfstream, DHL and Honeywell.',
              video: '/scroll-storytelling/entrega-llave-en-mano.mp4',
              mobileImage: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg',
              tag: {
                icon: <Hammer className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Construction',
                href: '/construction/build-to-suit',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'About build-to-suit', href: '/construction/build-to-suit', primary: true },
                { text: 'View portfolio', href: '/construction/portfolio', primary: false },
              ],
            },
            {
              caption: 'Phase 4: Opening',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">4</span><div>Turnkey<br/>Delivery</div></div>,
              description: 'You receive a facility ready to operate. Walk in, connect your equipment and start production. No intermediaries, no delays, no surprises.',
              video: '/parques-industriales-mexicali-nelson-3-optimizado.mp4',
              mobileImage: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg',
              tag: {
                icon: <CheckCircle className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Delivery',
                href: '/construction/turnkey',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'Turnkey solutions', href: '/construction/turnkey', primary: true },
                { text: 'Contact us', href: '/contact', primary: false },
              ],
            },
            {
              caption: 'Phase 5: Security',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">5</span><div>Park Infrastructure<br/>and Security</div></div>,
              description: 'Controlled perimeter, gatehouse, wide roads, shared infrastructure and permanent surveillance. Your operation runs within a professional industrial environment 24 hours a day, 365 days a year.',
              video: '/scroll-storytelling/seguridad-del-parque.mp4',
              mobileImage: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-382.jpg',
              tag: {
                icon: <Shield className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: '24/7 Security',
                href: '/experience/operational-excellence',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'Operational excellence', href: '/experience/operational-excellence', primary: true },
                { text: 'View parks', href: '/industrial-parks', primary: false },
              ],
            },
            {
              caption: 'Phase 6: Maintenance',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">6</span><div>Maintenance and<br/>Primary Services</div></div>,
              description: 'Our services team handles improvements, repairs and upgrades on an ongoing basis. Minor projects with in-house staff; advanced engineering projects with our construction firm. You focus on production.',
              video: '/scroll-storytelling/mantenimiento.mp4',
              mobileImage: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-407.jpg',
              tag: {
                icon: <Wrench className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Maintenance',
                href: '/experience/operational-excellence',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'About Baumex', href: '/construction/baumex', primary: true },
                { text: 'Contact us', href: '/contact', primary: false },
              ],
            },
            {
              caption: 'Phase 7: Growth',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">7</span><div>Growth and<br/>Expansion</div></div>,
              description: 'When your operation grows, we grow with you. Clients that started in 5,000 square feet now operate in over 400,000 — without changing partners. Over six decades building relationships measured in decades, not contracts.',
              video: '/scroll-storytelling/crecimiento.mp4',
              mobileImage: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg',
              tag: {
                icon: <TrendingUp className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Growth',
                href: '/experience/success-stories',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'Success stories', href: '/experience/success-stories', primary: true },
                { text: 'Available inventory', href: '/inventory/available-buildings', primary: false },
              ],
            },
            {
              caption: 'Phase 8: Special Projects',
              title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">8</span><div>Specialized Industrial<br/>Construction in Mexicali</div></div>,
              description: '95 meters without columns. Unprecedented. A vehicular bridge with European arch steel structure, foundations 18 meters deep in seismic zone 4, assembled over two Sundays to avoid closing the road. When Skyworks needed to connect two semiconductor plants over a boulevard and a federal drain, they came to us.',
              image: '/contructora-mexicali/puente-skyworks-2.jpg',
              tag: {
                icon: <Star className="w-5 h-5 text-gray-400" fill="currentColor" />,
                text: 'Specialized Industrial Construction in Mexicali',
                href: '/construction/specialized-projects',
                gradientFrom: '#2563eb',
                gradientTo: '#0ea5e9',
              },
              buttons: [
                { text: 'View special projects', href: '/construction/specialized-projects', primary: true },
                { text: 'Contact us', href: '/contact', primary: false },
              ],
            },
          ]}
        />
      </div>

      {/* Large image — Nelson II Industrial Park */}
      <div className="relative mt-32 aspect-square lg:aspect-auto lg:h-[70vh]">
        <Image
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
          alt="Nelson II Industrial Park in Mexicali — 27 hectares of industrial infrastructure"
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Circles — 3 compressed pillars */}
      <div className="px-4 md:ml-10 1200:ml-32 mt-32 md:px-0">
        <CirculosConProps
          circulo1Letra="60"
          circulo1Titulo="Years"
          circulo1Descripcion="The family that established Mexicali's first maquiladora in 1965 still operates personally. Nearshoring before the word existed. Three generations later, the owners handle your project — not a manager who rotates every two years."
          circulo2Letra="33"
          circulo2Titulo="Corporations"
          circulo2Descripcion="Gulfstream has been here for over 35 years. Honeywell for over 3 decades. Rheem, DHL, Baxter and Intuitive have already chosen to operate here. Long-term relationships measured in decades."
          circulo3Letra="75"
          circulo3Titulo="Projects"
          circulo3Descripcion="Baumex, our in-house construction firm, has 30 years and 75+ projects. A single contract from design to delivery. We build under ISN, LEED, FM Global and IBC standards — with over one million man-hours without fatal accidents."
        />
      </div>

      {/* FAQs */}
      <div className="mt-32">
        <FaqSectionsThreeColumnsBPConProps
          titulo="Frequently Asked Questions"
          descripcion="Have an additional question? Contact us directly by"
          linkTexto="email"
          linkHref="mailto:contacto@nelson.com.mx"
          faqs={[
            {
              id: 1,
              question: "What types of industrial buildings do you offer?",
              answer: "Buildings for lease and build-to-suit construction across our 4 industrial parks in Mexicali. From renovated spaces in El Vigia to world-class buildings in Nelson II, with clear heights up to 28 ft and IBC code compliance.",
            },
            {
              id: 2,
              question: "Where are your industrial parks located?",
              answer: "We operate 4 parks in Mexicali, B.C., on the California border: El Vigia I, El Vigia II, Nelson I and Nelson II. Nelson II is the most modern: 27 hectares with a centralized fire suppression system with a 360,000-gallon tank under NFPA and FM standards.",
            },
            {
              id: 3,
              question: "Do you offer build-to-suit construction?",
              answer: "Yes. Baumex, our in-house construction firm with 30 years and over 75 completed projects, designs and builds buildings to your exact requirements under a single contract — no intermediaries. We have built from 5,000 ft² to 550,000 ft².",
            },
            {
              id: 4,
              question: "What companies operate in your parks?",
              answer: "33 international corporations, including Gulfstream (over 35 years), Honeywell (over 3 decades), Rheem, DHL, Baxter, Vertiv, Intuitive and Celestica, among others. Long-term relationships measured in decades, not contracts.",
            },
            {
              id: 5,
              question: "What certifications and standards do you meet?",
              answer: "We build under the International Building Code (IBC), with demonstrated capability in LEED certification, FM Global, BRB seismic systems and NFPA standards. Baumex holds an ISN 'Recommended' rating by Honeywell.",
            },
            {
              id: 6,
              question: "How long has Grupo Nelson been in the industry?",
              answer: "Over 60 years. We founded Mexicali's maquiladora industry in 1965. Three generations later, the founding family still operates personally — the owners handle every project directly.",
            },
          ]}
        />
      </div>

      {/* Five Cards */}
      <div className="mt-32">
        <CincoCardsConProps
          card1Titulo={<>Nelson II<br/>Industrial Park</>}
          card1BotonTexto="View specifications"
          card1BotonHref="/industrial-parks/nelson-ii"
          card1ImagenSrc="/parque-industrial-nelson-2-en-mexicali.jpeg"
          card1ImagenAlt="Nelson II Industrial Park in Mexicali"

          card2Titulo={<>Nelson I<br/>Industrial Park</>}
          card2BotonTexto="Learn more"
          card2BotonHref="/industrial-parks"
          card2ImagenSrc="/parque-industrial-nelson-1-en-mexicali.jpeg"
          card2ImagenAlt="Nelson I Industrial Park in Mexicali"

          card3Titulo={<>El Vigia I<br/>Industrial Park</>}
          card3BotonTexto="View specifications"
          card3BotonHref="/industrial-parks"
          card3ImagenSrc="/parque-industrial-el-vigia-1-mexicali.jpg"
          card3ImagenAlt="El Vigia I Industrial Park in Mexicali"

          card4Titulo={<>El Vigia II<br/>Industrial Park</>}
          card4BotonTexto="View specifications"
          card4BotonHref="/industrial-parks"
          card4ImagenSrc="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
          card4ImagenAlt="El Vigia II Industrial Park in Mexicali"

          card5Titulo={<>Honeywell<br/>in Mexicali</>}
          card5BotonTexto="Learn more"
          card5BotonHref="#"
          card5ImagenSrc="/honeywell/honeywell-en-parque-industrial-de-mexicali-1.jpeg"
          card5ImagenAlt="Honeywell in Mexicali Industrial Park"
          mostrarCard5={false}
        />
      </div>

      {/* Virtual Tour 360° */}
      <VirtualTourBP
        tourId="hY5fjENu2"
        title="360° Virtual Tour"
        subtitle="Explore our facilities as if you were here."
        lang="en"
      />
    </div>
  );
}
