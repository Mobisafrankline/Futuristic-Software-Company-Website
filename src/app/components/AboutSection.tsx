import { motion } from 'motion/react';
import { Target, Eye, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Welcome to Mobivic Solution
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A technology company founded by visionaries committed to transforming businesses through innovation and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[var(--neon-blue)]/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-blue)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-[var(--neon-blue)]" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses worldwide with cutting-edge technology solutions that drive growth, efficiency, and innovation. We strive to be the catalyst for digital transformation, making advanced technology accessible and impactful for organizations of all sizes.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[var(--neon-purple)]/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--neon-purple)]/20 to-[var(--neon-purple)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-[var(--neon-purple)]" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become a globally recognized leader in technology innovation, setting new standards in software development, artificial intelligence, and digital solutions. We envision a future where technology seamlessly integrates with business objectives to create extraordinary value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-cyan)]/5 flex items-center justify-center">
              <Zap className="text-[var(--neon-cyan)]" size={24} />
            </div>
            <h3 className="text-3xl">Meet Our Founders</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">MF</span>
              </div>
              <div>
                <h4 className="text-xl mb-1">Mobisa Frankline</h4>
                <p className="text-[var(--neon-blue)] text-sm mb-2">Co-Founder & CEO</p>
                <p className="text-gray-400 text-sm">Visionary leader driving innovation and strategic growth</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">VI</span>
              </div>
              <div>
                <h4 className="text-xl mb-1">Victor Irungu</h4>
                <p className="text-[var(--neon-purple)] text-sm mb-2">Co-Founder & CTO</p>
                <p className="text-gray-400 text-sm">Technical expert architecting cutting-edge solutions</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-center mt-8 italic"
          >
            "Together, we're building a future where technology empowers every business to achieve extraordinary success."
          </motion.p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries and embracing new technologies',
                icon: '💡',
              },
              {
                title: 'Excellence',
                description: 'Delivering exceptional quality in every project we undertake',
                icon: '⭐',
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparent and ethical practices',
                icon: '🤝',
              },
              {
                title: 'Collaboration',
                description: 'Working together to achieve extraordinary results',
                icon: '🌟',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center hover:border-[var(--neon-cyan)]/50 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl text-center mb-12">Our Journey</h3>
          <div className="space-y-8">
            {[
              {
                year: '2015',
                title: 'Foundation',
                description: 'Mobivic Solution was founded with a vision to revolutionize the tech industry',
              },
              {
                year: '2017',
                title: 'Expansion',
                description: 'Expanded services to include AI and machine learning solutions',
              },
              {
                year: '2019',
                title: 'Global Reach',
                description: 'Established international presence across 5 continents',
              },
              {
                year: '2022',
                title: 'Innovation Leader',
                description: 'Recognized as an industry leader in digital transformation',
              },
              {
                year: '2024',
                title: 'Future Forward',
                description: 'Continuing to pioneer cutting-edge solutions for tomorrow\'s challenges',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-[var(--neon-cyan)]">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl mb-2 group-hover:text-[var(--neon-cyan)] transition-colors">{milestone.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}