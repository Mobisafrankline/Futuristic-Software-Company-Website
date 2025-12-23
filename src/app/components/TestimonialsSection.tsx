import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Stanley Kamau',
      role: 'CEO, Ocean air express Inc.',
      content: 'Mobivic Solution transformed our digital infrastructure. Their AI solutions increased our operational efficiency by 40%. Truly exceptional work!',
      rating: 5,
      avatar: 'Sk',
    },
    {
      name: 'Lisa Thompson',
      role: 'Director of IT, Global Enterprises',
      content: 'Their data analytics solution provided insights we never knew we needed. Mobivic Solution is now our go-to technology partner.',
      rating: 5,
      avatar: 'LT',
    },
    {
      name: 'James Wilson',
      role: 'VP Engineering, InnovateTech',
      content: 'Professional, innovative, and reliable. Mobivic Solution brings cutting-edge technology expertise to every project they undertake.',
      rating: 5,
      avatar: 'JW',
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[var(--neon-blue)]/10 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[var(--neon-purple)]/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[var(--neon-blue)]/50 transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--neon-cyan)] text-[var(--neon-cyan)]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 inline-block">
            <p className="text-gray-400 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                5+
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] bg-clip-text text-transparent">
                98%
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 mt-2 text-sm text-gray-500">
              <span>Projects</span>
              <span>Rating</span>
              <span>Retention</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
