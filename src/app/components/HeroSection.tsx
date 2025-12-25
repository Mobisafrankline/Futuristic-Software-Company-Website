import { motion } from 'motion/react';
import { ArrowRight, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--neon-blue)]/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--neon-purple)]/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/30 mb-6"
            >
              <span className="text-sm text-[var(--neon-cyan)]">🚀 Next-Generation Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Innovating the
              </span>
              <br />
              <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                Future of Tech
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-xl"
            >
              Transforming businesses through cutting-edge software development, AI solutions, and digital innovation. Your trusted partner in technological excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#services"
                className="px-8 py-4 rounded-lg backdrop-blur-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket size={20} />
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { value: '5+', label: 'Projects Delivered' },
                { value: '5+', label: 'Global Clients' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 space-y-3"
            >
              {[
                '🎯 Award-winning technology solutions',
                '🚀 1+ years of industry experience',
                '🌍 Serving clients across 5 continents',
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 backdrop-blur-sm z-10"
                animate={{
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2MjY2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center">
                  <Rocket className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Trusted by</div>
                  <div className="font-bold text-white">Global Brands</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}