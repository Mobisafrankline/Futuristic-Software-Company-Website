import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function TeamSection() {
  const founders = [
    {
      name: 'Victor Irungu',
      role: 'Co-Founder & CEO',
      initials: 'VI',
      bio: 'Visionary leader with 10+ years in technology and business strategy. Passionate about leveraging innovation to solve complex business challenges.',
      expertise: ['Strategy', 'Innovation', 'Leadership'],
      gradient: 'from-[var(--neon-blue)] to-[var(--neon-purple)]',
    },
    {
      name: 'Mobisa Frankline',
      role: 'Co-Founder & CTO',
      initials: 'MF',
      bio: 'Technical architect and AI specialist with extensive experience in building scalable, cutting-edge software solutions for global enterprises.',
      expertise: ['AI & ML', 'Cloud Architecture', 'Full-Stack Development'],
      gradient: 'from-[var(--neon-purple)] to-[var(--neon-cyan)]',
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Meet the Founders
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Led by experienced entrepreneurs and technologists passionate about driving innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                {/* Avatar */}
                <motion.div
                  className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-4xl font-bold text-white">{founder.initials}</span>
                </motion.div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl mb-2">{founder.name}</h3>
                  <div className={`text-sm bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-4`}>
                    {founder.role}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {founder.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {founder.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[var(--neon-blue)]/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} className="text-[var(--neon-blue)]" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[var(--neon-cyan)]/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter size={18} className="text-[var(--neon-cyan)]" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[var(--neon-purple)]/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} className="text-[var(--neon-purple)]" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl mb-4">Join Our Journey</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We're always looking for talented individuals who share our passion for innovation and excellence. If you're ready to make an impact in the world of technology, we'd love to hear from you.
            </p>
            <motion.button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Career Opportunities
            </motion.button>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl text-center mb-12">Our Expert Team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Ian Kinoti', role: 'Head of AI & ML', initials: 'IK', color: 'from-[var(--neon-blue)] to-[var(--neon-cyan)]' },
              { name: 'Mixxy Irungu', role: 'Lead DevOps Engineer', initials: 'MI', color: 'from-[var(--neon-purple)] to-[var(--neon-blue)]' },
              { name: 'Brian Irungu', role: 'UX/UI Director', initials: 'BI', color: 'from-[var(--neon-cyan)] to-[var(--neon-purple)]' },
              { name: 'Mobisa Frankline', role: 'Senior Full Stack Dev', initials: 'MF', color: 'from-[var(--neon-blue)] to-[var(--neon-purple)]' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center hover:border-[var(--neon-blue)]/50 transition-all"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h4 className="text-lg mb-1">{member.name}</h4>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}