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
              Redesign
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            A premium digital experience is emerging. We are building the future
            of NMB with cutting-edge technology and high-fidelity design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
            <div className="flex items-center gap-2 text-sm text-zinc-500 group cursor-help">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Turbopack Enhanced</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <div className="flex items-center gap-2 text-sm text-zinc-500 group cursor-help">
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>Tailwind v4 Powered</span>
            </div>
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full max-w-sm glass rounded-3xl p-8 space-y-4"
        >
          <div className="flex items-center justify-between text-left">
            <div>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">
                Current Status
              </p>
              <h3 className="text-xl font-bold">In Development</h3>
            </div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse ring-4 ring-blue-500/20" />
          </div>
          <div className="h-[1px] w-full bg-zinc-800" />
          <div className="text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Scaffolding</span>
              <span className="text-xs font-mono text-blue-400">DONE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Environment</span>
              <span className="text-xs font-mono text-blue-400">DONE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">UI Architecture</span>
              <span className="text-xs font-mono text-zinc-600 italic">IN PROGRESS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <footer className="absolute bottom-10 left-10 text-zinc-600">
        <p className="text-[10px] font-mono tracking-widest uppercase">
          &copy; 2026 NMB Digital. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
