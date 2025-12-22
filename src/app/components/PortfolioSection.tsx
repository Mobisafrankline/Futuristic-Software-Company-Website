import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Brain, Smartphone, Database, Cloud, Globe } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'Artificial Intelligence',
      description: 'Machine learning platform for predictive business analytics',
      image: 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3NjYzMTY0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Brain,
      color: 'var(--neon-purple)',
    },
    {
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise-scale migration to AWS with 99.99% uptime',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzY2MjM1MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Cloud,
      color: 'var(--neon-blue)',
    },
    {
      title: 'Mobile Banking Application',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking experience',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjYzMDE3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Smartphone,
      color: 'var(--neon-cyan)',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Scalable marketplace with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjYyMzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Globe,
      color: 'var(--neon-blue)',
    },
    {
      title: 'Data Warehouse Solution',
      category: 'Data Analytics',
      description: 'Big data processing and real-time analytics dashboard',
      image: 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3NjYzMTY0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Database,
      color: 'var(--neon-purple)',
    },
    {
      title: 'Custom ERP System',
      category: 'Software Development',
      description: 'Tailored enterprise resource planning solution',
      image: 'https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2MjY2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Code,
      color: 'var(--neon-cyan)',
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30 z-10 group-hover:from-black/30 group-hover:to-black/10 transition-all" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-lg flex items-center justify-center z-20 group-hover:scale-110 transition-transform"
                  >
                    <project.icon style={{ color: project.color }} size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="text-sm mb-2"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: project.color }}
                  >
                    <span>View case study</span>
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 rounded-lg backdrop-blur-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
