"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Next.js 15 + Tailwind v4
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            NMB
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Media
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            "The company that will put you directly in front of your consumers."
            <span className="block mt-4 text-zinc-500 text-base">
              Founded in 2001, we are pioneers in innovative OOH advertising,
              delivering non-traditional solutions that target, captivate, and inspire.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-10">
            {[
              { label: "Mobile Platforms", icon: Zap },
              { label: "High-Tech OOH", icon: Code2 },
              { label: "Brand Ambassadors", icon: Sparkles }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-500 group">
                <item.icon className="w-4 h-4 text-blue-500" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* NMB Specialties Grid - Replacing Status Card with something more branded */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Target",
              desc: "Detailed local, regional, or national program planning.",
              stats: "24/7 Access"
            },
            {
              title: "Captivate",
              desc: "17+ unique media platforms that demand attention.",
              stats: "Full POP"
            },
            {
              title: "Inspire",
              desc: "Creative OOH solutions that create memorable experiences.",
              stats: "Max ROI"
            }
          ].map((item, i) => (
            <div key={i} className="glass rounded-3xl p-8 text-left space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="text-[10px] font-mono text-blue-500 font-bold px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 uppercase">
                  {item.stats}
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Branding */}
      <footer className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-center text-zinc-600 gap-4">
        <p className="text-[10px] font-mono tracking-widest uppercase">
          &copy; 2026 National Mobile Billboards. Pioneers in OOH since 2001.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] font-mono uppercase tracking-tighter">Est. 2001</span>
          <span className="text-[10px] font-mono uppercase tracking-tighter">17 Platforms</span>
        </div>
      </footer>
    </main>
  );
}
