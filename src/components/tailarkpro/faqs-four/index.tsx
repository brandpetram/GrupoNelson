'use client'

import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import { Wrench, Package, Ruler, Network } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function FAQs() {
    const faqItems = useMemo(
        () => [
            {
                group: 'Desarrollo de Parques Industriales',
                icon: <Wrench />,
                items: [
                    {
                        id: 'item-1',
                        question: 'Lorem ipsum dolor sit amet?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        id: 'item-2',
                        question: 'Consectetur adipiscing elit?',
                        answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    },
                    {
                        id: 'item-3',
                        question: 'Sed do eiusmod tempor?',
                        answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                ],
            },
            {
                group: 'Refacciones y kits',
                icon: <Package />,
                items: [
                    {
                        id: 'item-1',
                        question: 'Nemo enim ipsam voluptatem?',
                        answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
                    },
                    {
                        id: 'item-2',
                        question: 'Quia voluptas sit aspernatur?',
                        answer: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
                    },
                    {
                        id: 'item-3',
                        question: 'Nisi ut aliquid ex ea commodi?',
                        answer: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                    },
                ],
            },
            {
                group: 'Naves Industriales Built to Suit (hechas a medida)',
                icon: <Ruler />,
                items: [
                    {
                        id: 'item-1',
                        question: 'At vero eos et accusamus?',
                        answer: 'Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
                    },
                    {
                        id: 'item-2',
                        question: 'Quos dolores et quas molestias?',
                        answer: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
                    },
                    {
                        id: 'item-3',
                        question: 'Nam libero tempore?',
                        answer: 'Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
                    },
                ],
            },
            {
                group: 'Arrendamiento y Venta de Naves Industriales',
                icon: <Network />,
                items: [
                    {
                        id: 'item-1',
                        question: 'Temporibus autem quibusdam?',
                        answer: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.',
                    },
                    {
                        id: 'item-2',
                        question: 'Et harum quidem rerum?',
                        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                    },
                    {
                        id: 'item-3',
                        question: 'Totam rem aperiam eaque?',
                        answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
                    },
                ],
            },
        ],
        []
    )

    const groups = useMemo(() => faqItems.map((g) => g.group.toLowerCase()), [faqItems])
    const [activeGroup, setActiveGroup] = useState<string>(groups[0] ?? '')

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLDivElement>('[data-faq-group]'))
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
                if (visible[0]) {
                    const group = visible[0].target.getAttribute('data-faq-group') || ''
                    if (group && group !== activeGroup) setActiveGroup(group)
                }
            },
            {
                root: null,
                threshold: [0.35, 0.6, 0.8],
                rootMargin: '0px 0px -20% 0px',
            }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [activeGroup])

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-1 md:px-6">
                <div className="max-w-lg max-md:px-6">
                    <h2 className="text-foreground text-6xl font-black">FAQs</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>

                <div className="@container mt-6 grid md:mt-20 md:grid-cols-5">
                    <div className="max-md:bg-muted sticky top-0 z-10 h-fit max-md:flex max-md:justify-center max-md:p-2 md:top-12 md:col-span-2 md:-mt-3">
                        {faqItems.map((item) => {
                            const groupId = item.group.toLowerCase()
                            const isActive = activeGroup === groupId
                            return (
                                <Link
                                    key={item.group}
                                    href={`#${groupId}`}
                                    data-state={isActive ? 'active' : 'inactive'}
                                    className="text-muted-foreground group max-md:px-1 md:block md:py-1">
                                    <span className={cn('@max-xs:px-4 flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-base transition-colors [&>svg]:size-5', isActive ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                        {item.icon}
                                        <span className="@max-xs:in-data-[state=inactive]:hidden">{item.group}</span>
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="space-y-12 max-md:mt-6 md:col-span-3">
                        {faqItems.map((item) => (
                            <div
                                className="space-y-4"
                                key={item.group}
                                id={item.group.toLowerCase()}
                                data-faq-group={item.group.toLowerCase()}>
                                <h3 className="text-foreground pl-6 text-2xl font-semibold">{item.group}</h3>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="-space-y-1">
                                    {item.items.map((item) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1">
                                            <AccordionTrigger className="cursor-pointer rounded-none border-b text-xl transition-none hover:no-underline data-[state=open]:border-transparent">{item.question}</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-muted-foreground text-xl">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
