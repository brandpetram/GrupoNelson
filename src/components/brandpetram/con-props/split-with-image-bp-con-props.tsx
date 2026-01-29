/**
 * SplitWithImageBPConProps - Componente único e irrepetible
 *
 * Sección split con imagen a la izquierda y contenido detallado a la derecha.
 * Solo contenido es configurable (textos, imagen, iconos).
 */

'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { type ReactNode } from 'react'

interface SplitWithImageBPConPropsProps {
  // Imagen
  imagenSrc?: string
  imagenAlt?: string

  // Contenido principal
  tagline?: string
  titulo?: string
  parrafo1?: string
  parrafo2?: string

  // Feature 1
  feature1Icon?: ReactNode
  feature1IconColor?: string
  feature1Titulo?: string
  feature1Descripcion?: string

  // Feature 2
  feature2Icon?: ReactNode
  feature2IconColor?: string
  feature2Titulo?: string
  feature2Descripcion?: string

  // Feature 3
  feature3Icon?: ReactNode
  feature3IconColor?: string
  feature3Titulo?: string
  feature3Descripcion?: string

  // Contenido adicional
  parrafo3?: string
  subtitulo?: string
  parrafo4?: string
}

export function SplitWithImageBPConProps({
  imagenSrc = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80",
  imagenAlt = "",
  tagline = "Deploy faster",
  titulo = "A better workflow",
  parrafo1 = "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
  parrafo2 = "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
  feature1Icon = <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none" />,
  feature1IconColor = "text-primary dark:text-primary",
  feature1Titulo = "Push to deploy.",
  feature1Descripcion = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  feature2Icon = <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none" />,
  feature2IconColor = "text-primary dark:text-primary",
  feature2Titulo = "SSL certificates.",
  feature2Descripcion = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  feature3Icon = <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none" />,
  feature3IconColor = "text-primary dark:text-primary",
  feature3Titulo = "Database backups.",
  feature3Descripcion = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  parrafo3 = "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
  subtitulo = "No server? No problem.",
  parrafo4 = "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.",
}: SplitWithImageBPConPropsProps) {
  return (
    <div className="relative bg-background dark:bg-background transition-colors">
      <div className="mx-auto max-w-full 360:max-w-full 393:max-w-full 430:max-w-full 768:max-w-full 834:max-w-full 1024:max-w-6xl 1200:max-w-7xl 1280:max-w-7xl 1366:max-w-7xl 1440:max-w-7xl 1536:max-w-7xl 1728:max-w-7xl 1920:max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 360:lg:w-full 393:lg:w-full 430:lg:w-full 768:lg:w-full 834:lg:w-full 1024:lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-60 360:h-60 393:h-64 430:h-80 768:h-80 834:h-96 1024:h-auto 1200:h-auto 1280:h-auto 1366:h-auto 1440:h-auto 1536:h-auto 1728:h-auto 1920:h-auto lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt={imagenAlt}
              src={imagenSrc}
              className="absolute inset-0 size-full bg-secondary dark:bg-secondary/50 object-cover"
            />
          </div>
        </div>
        <div className="px-4 360:px-4 393:px-5 430:px-6 768:px-6 834:px-6 1024:px-8 1200:px-8 1280:px-8 1366:px-8 1440:px-8 1536:px-8 1728:px-8 1920:px-8 lg:contents">
          <div className="mx-auto max-w-full 360:max-w-full 393:max-w-full 430:max-w-full 768:max-w-2xl 834:max-w-2xl 1024:max-w-lg 1200:max-w-lg 1280:max-w-lg 1366:max-w-lg 1440:max-w-lg 1536:max-w-lg 1728:max-w-lg 1920:max-w-lg pt-8 360:pt-8 393:pt-12 430:pt-16 768:pt-16 834:pt-20 1024:pt-32 1200:pt-32 1280:pt-32 1366:pt-32 1440:pt-32 1536:pt-32 1728:pt-32 1920:pt-32 pb-12 360:pb-16 393:pb-20 430:pb-24 768:pb-24 834:pb-32 1024:pb-32 1200:pb-32 1280:pb-32 1366:pb-32 1440:pb-32 1536:pb-32 1728:pb-32 1920:pb-32 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base font-semibold text-primary">{tagline}</p>
            <h1 className="mt-2 text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl font-semibold leading-none tracking-tighter font-extrabold text-pretty text-foreground dark:text-foreground">
              {titulo}
            </h1>
            <p className="mt-4 360:mt-4 393:mt-5 430:mt-6 768:mt-6 834:mt-6 1024:mt-6 1200:mt-6 1280:mt-6 1366:mt-6 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6 text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl leading-relaxed text-foreground/70 dark:text-foreground/70">
              {parrafo1}
            </p>
            <div className="mt-8 360:mt-8 393:mt-10 430:mt-10 768:mt-10 834:mt-10 1024:mt-10 1200:mt-10 1280:mt-10 1366:mt-10 1440:mt-10 1536:mt-10 1728:mt-10 1920:mt-10 max-w-full 360:max-w-full 393:max-w-sm 430:max-w-md 768:max-w-xl 834:max-w-xl 1024:max-w-none 1200:max-w-none 1280:max-w-none 1366:max-w-none 1440:max-w-none 1536:max-w-none 1728:max-w-none 1920:max-w-none text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground lg:max-w-none">
              <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base">
                {parrafo2}
              </p>
              <ul role="list" className="mt-6 360:mt-6 393:mt-8 430:mt-8 768:mt-8 834:mt-8 1024:mt-8 1200:mt-8 1280:mt-8 1366:mt-8 1440:mt-8 1536:mt-8 1728:mt-8 1920:mt-8 space-y-6 360:space-y-6 393:space-y-8 430:space-y-8 768:space-y-8 834:space-y-8 1024:space-y-8 1200:space-y-8 1280:space-y-8 1366:space-y-8 1440:space-y-8 1536:space-y-8 1728:space-y-8 1920:space-y-8 text-muted-foreground dark:text-muted-foreground">
                <li className="flex gap-x-3">
                  <div className={feature1IconColor}>
                    {feature1Icon}
                  </div>
                  <span className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base">
                    <strong className="font-semibold text-foreground dark:text-foreground">{feature1Titulo}</strong> {feature1Descripcion}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div className={feature2IconColor}>
                    {feature2Icon}
                  </div>
                  <span className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base">
                    <strong className="font-semibold text-foreground dark:text-foreground">{feature2Titulo}</strong> {feature2Descripcion}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div className={feature3IconColor}>
                    {feature3Icon}
                  </div>
                  <span className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base">
                    <strong className="font-semibold text-foreground dark:text-foreground">{feature3Titulo}</strong> {feature3Descripcion}
                  </span>
                </li>
              </ul>
              <p className="mt-6 360:mt-6 393:mt-8 430:mt-8 768:mt-8 834:mt-8 1024:mt-8 1200:mt-8 1280:mt-8 1366:mt-8 1440:mt-8 1536:mt-8 1728:mt-8 1920:mt-8 text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-base 1920:text-base">
                {parrafo3}
              </p>
              <h2 className="mt-10 360:mt-12 393:mt-16 430:mt-16 768:mt-16 834:mt-16 1024:mt-16 1200:mt-16 1280:mt-16 1366:mt-16 1440:mt-16 1536:mt-16 1728:mt-16 1920:mt-16 text-base 360:text-base 393:text-lg 430:text-lg 768:text-xl 834:text-2xl 1024:text-2xl 1200:text-3xl 1280:text-3xl 1366:text-4xl 1440:text-4xl 1536:text-4xl 1728:text-4xl 1920:text-4xl font-bold leading-none tracking-tighter text-foreground dark:text-foreground">{subtitulo}</h2>
              <p className="mt-4 360:mt-4 393:mt-6 430:mt-6 768:mt-6 834:mt-6 1024:mt-6 1200:mt-6 1280:mt-6 1366:mt-6 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6 text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {parrafo4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
