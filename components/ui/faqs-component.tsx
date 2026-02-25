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
                    It’s not traditional property management. It’s a hands-on co-hosting partnership.
                    <br />
                    No fluff. No theory. I focus on execution.
                    <br />
                    First, I analyze your listing, pricing, and operations to identify high-impact opportunities to increase revenue and reduce friction.
                    <br />
                    These are the same frameworks I use on every listing I manage.
                    <br />
                    Then I step in and run the day-to-day: guest communication, pricing, calendar management, and ongoing optimization—so your Airbnb performs like an asset, not a second job.
                </>
            ),
        },
        {
            id: 'item-2',
            question: 'How do I get started?',
            answer: (
                <>
                    I don’t work with every property.
                    <br />
                    To get started, I first make sure your property is a good fit for co-hosting and that I can realistically improve its performance.
                    <br />
                    Book an intro call so I can review your listing, goals, and market.
                    <br />
                    If it’s a fit, I’ll walk you through next steps.
                </>
            ),
        },
        {
            id: 'item-3',
            question: 'Who is it a good fit for?',
            answer: (
                <>
                    Cloverbloom is not for every Airbnb owner.
                    <br />
                    I work with owners who are actively hosting, care about performance, and want their property run like a real business—not a side hobby.
                    <br />
                    If you’re generating revenue (or close to it), operating in a market I understand, and open to operational and pricing changes, we’re likely a fit.
                    <br />
                    The best way to find out is to book a call and see if working together makes sense.
                </>
            ),
        },
        {
            id: 'item-4',
            question: 'Who will I work with?',
            answer: (
                <>
                    You’ll work directly with me.
                    <br />
                    Cloverbloom isn’t handed off to junior account managers.
                    <br />
                    Your property is overseen by the same operator responsible for pricing, guest experience, and performance across the listings I manage.
                    <br />
                    When needed, you’ll also get direct input on strategy, operations, and revenue optimization—so nothing critical is left unaddressed.
                </>
            ),
        },
        {
            id: 'item-5',
            question: 'What makes Cloverbloom different?',
            answer: (
                <>
                    Cloverbloom is operator-led, not outsourced.
                    <br />
                    Your property is managed by me—the same person responsible for pricing, guest experience, and performance across the listings I manage—so nothing slips through the cracks.
                    <br />
                    I also hold my cleaning partners to strict, non-negotiable standards through detailed checklists and accountability.
                    <br />
                    That ruthless attention to detail is what keeps performance high and guest issues low.
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
