import { motion } from 'motion/react';
import { Code, Brain, Smartphone, Database, Cloud, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs. From enterprise applications to scalable web platforms, we build robust and efficient systems.',
      color: 'var(--neon-blue)',
      gradient: 'from-blue-500/20 to-blue-500/5',
      features: ['Custom Applications', 'API Development', 'System Integration'],
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive intelligent decision-making.',
      color: 'var(--neon-purple)',
      gradient: 'from-purple-500/20 to-purple-500/5',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Beautiful, intuitive, and high-performance applications for web and mobile platforms. Native, hybrid, or progressive web apps - we do it all.',
      color: 'var(--neon-cyan)',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      features: ['iOS & Android Apps', 'Progressive Web Apps', 'Cross-Platform Solutions'],
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. Our analytics solutions help you understand trends, predict outcomes, and make data-driven decisions.',
      color: 'var(--neon-blue)',
      gradient: 'from-blue-500/20 to-blue-500/5',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. We help you leverage AWS, Azure, and Google Cloud for optimal performance and cost efficiency.',
      color: 'var(--neon-purple)',
      gradient: 'from-purple-500/20 to-purple-500/5',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps & CI/CD'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting. We modernize your operations, optimize workflows, and position your business for the digital age.',
      color: 'var(--neon-cyan)',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--neon-purple)]/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Comprehensive Tech Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end technology services that drive business growth and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`backdrop-blur-lg bg-gradient-to-br ${service.gradient} border border-white/10 rounded-2xl p-8 hover:border-[${service.color}]/50 transition-all duration-300 h-full`}>
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${service.color}40, ${service.color}10)`,
                  }}
                >
                  <service.icon style={{ color: service.color }} size={32} />
                </div>

                <h3 className="text-xl mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-sm"
                  style={{ color: service.color }}
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}