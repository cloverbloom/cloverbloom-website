"use client"

import { Camera, Gauge, MessageSquareText, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    icon: <Gauge />,
    valueRange: "10-20%",
    label: "Active Pricing Strategies & Relauch Systems",
  },
  {
    icon: <Camera />,
    valueRange: "20-30%",
    label: "Market Driven Photo Shoots & Listing Optimization",
  },
  {
    icon: <MessageSquareText />,
    valueRange: "20-30%",
    label: "Less than 1hr Responses & Active Review Management",
  },
  {
    icon: <TrendingUp />,
    valueRange: "25-35%",
    label: "Professional STR Operations on Average",
  },
]

// Keep this toggle for quickly restoring icon spin behavior later if needed.
const SHOW_ICON_SPIN_ANIMATION = false

export function AboutUsStats() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-6 pt-6">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            valueRange={stat.valueRange}
            label={stat.label}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  valueRange: string
  label: string
  delay: number
}

function StatCard({ icon, valueRange, label, delay }: StatCardProps) {
  const iconSpinHoverAnimation = SHOW_ICON_SPIN_ANIMATION
    ? { rotate: 360, transition: { duration: 0.8 } }
    : undefined

  return (
    <motion.div
      className="group bg-white/65 border border-white/40 backdrop-blur-lg p-6 rounded-2xl flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:bg-white/75"
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
        className="w-14 h-14 rounded-full bg-[#2154D6]/10 flex items-center justify-center mb-4 text-[#2154D6] transition-colors duration-300 group-hover:bg-[#2154D6]/15"
        whileHover={iconSpinHoverAnimation}
      >
        {icon}
      </motion.div>
      <motion.div className="text-3xl font-bold text-[#0B1B3A]">
        +{valueRange}
      </motion.div>
      <p className="text-[#0B1B3A]/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#2154D6] mt-3 transition-all duration-300" />
    </motion.div>
  )
}
