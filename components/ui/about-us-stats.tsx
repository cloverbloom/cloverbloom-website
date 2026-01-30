"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, TrendingUp, UserCheck, Users } from "lucide-react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const stats = [
  { icon: <UserCheck />, value: 0, label: "Active Clients", suffix: "" },
  { icon: <Users />, value: 0, label: "Happy Guests", suffix: "" },
  { icon: <Calendar />, value: 1, label: "Years Experience", suffix: "" },
  { icon: <TrendingUp />, value: 100, label: "Satisfaction Rate", suffix: "%" },
]

export function AboutUsStats() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-6 pt-6">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCounter
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/65 border border-white/40 backdrop-blur-lg p-6 rounded-2xl flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:bg-white/75"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#2154D6]/10 flex items-center justify-center mb-4 text-[#2154D6] transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#0B1B3A] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#0B1B3A]/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#2154D6] mt-3 transition-all duration-300" />
    </motion.div>
  )
}
