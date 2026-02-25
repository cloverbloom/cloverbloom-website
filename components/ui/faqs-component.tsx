'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is Cloverbloom STR Operations?',
            answer: (
                <>
                    Cloverbloom STR Operations is a hands-on co-hosting service built for performance.
                    <br />
                    Cloverbloom manages guest communication, pricing, calendar operations, and listing optimization.
                    <br />
                    The goal is simple: run your Airbnb like an asset, not a second job.
                </>
            ),
        },
        {
            id: 'item-2',
            question: 'How do I get started?',
            answer: (
                <>
                    Start with a discovery call.
                    <br />
                    Cloverbloom reviews your listing, market, and goals to confirm fit and performance upside.
                    <br />
                    If it’s a fit, you receive a clear implementation plan and next steps.
                </>
            ),
        },
        {
            id: 'item-3',
            question: 'Who is it a good fit for?',
            answer: (
                <>
                    Cloverbloom is a fit for owners who want stronger STR performance without running daily operations.
                    <br />
                    The best matches are active listings with room to improve pricing, response systems, and overall execution.
                    <br />
                    Owners who treat the property like a business typically see the best outcomes.
                </>
            ),
        },
        {
            id: 'item-4',
            question: 'Who will I work with?',
            answer: (
                <>
                    You work directly with Cloverbloom’s lead operator, Garrett Nelson.
                    <br />
                    Your property is not handed off to junior account managers.
                    <br />
                    Strategy, execution, and accountability stay with one operator.
                </>
            ),
        },
        {
            id: 'item-5',
            question: 'What makes Cloverbloom different?',
            answer: (
                <>
                    Cloverbloom is operator-led and execution-first.
                    <br />
                    Pricing, guest communication, and operations are managed together under one accountable system.
                    <br />
                    Cleaning quality control is strict and consistent, which helps protect reviews and revenue.
                </>
            ),
        },
    ]
    const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const trigger = document.querySelector('[data-contact-trigger]') as HTMLElement | null
        trigger?.click()
    }

    return (
        <section className="pt-10 pb-16 md:pt-12 md:pb-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-start md:pl-16">
                    <div className="space-y-2">
                        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">FAQs</h2>
                        <p className="font-semibold text-foreground">Garrett Nelson</p>
                        <p className="text-muted-foreground whitespace-nowrap text-sm md:text-base">
                            What does working with Cloverbloom look like?
                        </p>
                    </div>

                    <div className="space-y-12">
                        <Accordion
                            type="single"
                            collapsible
                            className="-mx-2 sm:mx-0 max-w-2xl">
                            {faqItems.map((item) => (
                                <div
                                    className="group"
                                    key={item.id}>
                                    <AccordionItem
                                        value={item.id}
                                        className="data-[state=open]:bg-muted peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7">
                                        <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
                                </div>
                            ))}
                        </Accordion>

                        <p className="text-muted-foreground px-5 md:px-7">
                            Still have questions?{' '}
                            <Link
                                href="#contact"
                                onClick={handleContactClick}
                                className="text-primary font-medium hover:underline">
                                Contact
                            </Link>{' '}
                            our team
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
