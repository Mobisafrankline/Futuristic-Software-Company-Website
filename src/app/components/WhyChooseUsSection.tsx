import { motion } from 'motion/react';
import { Zap, Users, TrendingUp, Shield, Rocket, Star } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends, implementing the latest tools and methodologies to give you a competitive edge.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our seasoned professionals bring years of experience across diverse industries and cutting-edge technologies.',
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Solutions built to grow with your business. From startup to enterprise, we ensure your tech scales seamlessly.',
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security protocols and 99.9% uptime guarantee. Your data and operations are always protected.',
    },
    {
      icon: Rocket,
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensure faster time-to-market without compromising quality or functionality.',
    },
    {
      icon: Star,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work collaboratively to understand and exceed your expectations.',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Your Success is Our Priority
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[var(--neon-blue)]/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-blue)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-[var(--neon-blue)]" size={32} />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl text-center mb-12">Our Track Record</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex items-center justify-center mb-4">
                <Rocket className="text-[var(--neon-blue)]" size={40} />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-400">Successful Projects</div>
              <p className="text-gray-500 text-sm mt-2">Delivered across multiple industries</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex items-center justify-center mb-4">
                <Users className="text-[var(--neon-purple)]" size={40} />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-400">Happy Clients</div>
              <p className="text-gray-500 text-sm mt-2">From startups to enterprises</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex items-center justify-center mb-4">
                <Star className="text-[var(--neon-cyan)]" size={40} />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
              <p className="text-gray-500 text-sm mt-2">Based on project reviews</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-[var(--neon-purple)]" size={40} />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support Available</div>
              <p className="text-gray-500 text-sm mt-2">Round-the-clock assistance</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl text-center mb-12">Technologies We Master</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl mb-4 text-[var(--neon-blue)]">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl mb-4 text-[var(--neon-purple)]">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Java', 'Go', 'PHP', 'PostgreSQL'].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl mb-4 text-[var(--neon-cyan)]">Cloud & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins'].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
