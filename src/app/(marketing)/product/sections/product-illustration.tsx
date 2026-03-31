import { cn } from '@/lib/utils'
import { HardHat } from 'lucide-react'

const activities = [
    {
        id: 1,
        activity: 'Fabricación y montaje de acero',
        responsible: 'Estructural',
        status: 'Completado',
        progress: 100,
        deadline: 'Mar 2025',
    },
    {
        id: 2,
        activity: 'Cimentación y losa',
        responsible: 'Civil',
        status: 'En progreso',
        progress: 78,
        deadline: 'Abr 2025',
    },
    {
        id: 3,
        activity: 'Instalación de paneles de techo y muro',
        responsible: 'Construcción',
        status: 'En progreso',
        progress: 62,
        deadline: 'May 2025',
    },
    {
        id: 4,
        activity: 'HVAC — 3,200 TR de aire acondicionado',
        responsible: 'Mecánico',
        status: 'En progreso',
        progress: 45,
        deadline: 'Jun 2025',
    },
    {
        id: 5,
        activity: 'Protección contra incendio (FM Global)',
        responsible: 'Seguridad',
        status: 'En espera',
        progress: 12,
        deadline: 'Jul 2025',
    },
    {
        id: 6,
        activity: 'Sistemas eléctricos y controles',
        responsible: 'Eléctrico',
        status: 'En progreso',
        progress: 55,
        deadline: 'Jun 2025',
    },
    {
        id: 7,
        activity: 'Paneles solares — 10 MW en cubierta',
        responsible: 'Eléctrico',
        status: 'Pendiente',
        progress: 0,
        deadline: 'Ago 2025',
    },
]

export const ProductIllustration = ({ className }: { className?: string }) => {
    return (
        <div className="relative h-fit">
            <div className="relative mx-auto max-w-4xl px-6">
                <div className="flex min-h-96 items-center">
                    <div className={cn('bg-illustration/90 ring-border-illustration from-card/50 relative mx-auto w-full max-w-5xl rounded-2xl border border-transparent p-6 pb-12 shadow-2xl shadow-black/10 ring-1', className)}>
                        <div className="max-w-sm absolute inset-x-0 bottom-4 z-10 mx-auto">
                            <div className="hue-rotate-300 bg-linear-to-r/increasing absolute inset-0 rounded-full from-blue-400 via-blue-500 to-emerald-400 opacity-25 blur"></div>

                            <div className="shadow-black/6.5 ring-border-illustration bg-illustration relative flex items-center gap-2 rounded-full p-1 shadow-md ring-1">
                                <div className="bg-blue-600 flex size-6 shrink-0 rounded-full shadow-xl *:m-auto">
                                    <HardHat className="size-3.5 text-white" />
                                </div>
                                <div className="line-clamp-1 text-[13px]">
                                    <span className="text-foreground font-medium">78% avance general</span> · 404 días sin accidentes · <span className="text-foreground font-medium">453 trabajadores</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="font-medium">Control de Obra — Gulfstream 550K</div>
                            <p className="text-muted-foreground mt-0.5 line-clamp-1 text-sm">Reporte semanal · 52,200 m² · Mexicali, B.C. · Semana 47</p>
                        </div>
                        <div className="mask-b-from-55%">
                            <table
                                className="w-max table-auto border-collapse lg:w-full"
                                data-rounded="medium">
                                <thead className="dark:bg-background bg-foreground/5">
                                    <tr className="*:border *:px-3 *:py-1.5 *:text-left *:text-sm *:font-medium">
                                        <th>Actividad</th>
                                        <th>Responsable</th>
                                        <th>Estatus</th>
                                        <th>Avance</th>
                                        <th className="rounded-tr">Fecha límite</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {activities.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="text-foreground/75 *:border *:p-2 *:px-3">
                                            <td>
                                                <span className="text-foreground">{item.activity}</span>
                                            </td>
                                            <td>{item.responsible}</td>
                                            <td>
                                                <span className={cn(
                                                    'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                                                    item.status === 'Completado' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                                                    item.status === 'En progreso' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                                                    item.status === 'En espera' && 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
                                                    item.status === 'Pendiente' && 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
                                                )}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1.5 w-16 rounded-full bg-foreground/10">
                                                        <div
                                                            className={cn('h-full rounded-full', item.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500')}
                                                            style={{ width: `${item.progress}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs">{item.progress}%</span>
                                                </div>
                                            </td>
                                            <td>{item.deadline}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
