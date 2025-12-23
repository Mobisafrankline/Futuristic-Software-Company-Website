import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Team', href: '/team' },
    ],
    services: [
      { name: 'Software Development', href: '/services' },
      { name: 'AI Solutions', href: '/services' },
      { name: 'Web & Mobile Apps', href: '/services' },
      { name: 'Cloud Solutions', href: '/services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'var(--neon-blue)' },
    { icon: Twitter, href: '#', color: 'var(--neon-cyan)' },
    { icon: Facebook, href: '#', color: 'var(--neon-blue)' },
    { icon: Instagram, href: '#', color: 'var(--neon-purple)' },
    { icon: Github, href: '#', color: 'var(--neon-cyan)' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 mt-24">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[var(--neon-blue)]/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--neon-purple)]/5 blur-3xl" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-cyan)] flex items-center justify-center">
  <img
    src="/logo.png"
    alt="Mobivic Solution Logo"
    className="w-7 h-7 object-contain"
  />
</div>

                <span className="text-xl font-bold bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
                  Mobivic Solution
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Innovating the future of technology through cutting-edge software development, AI solutions, and digital transformation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@mobivicsolution.com" className="flex items-center gap-2 text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm">
                  <Mail size={16} />
                  <span>info@mobivicsolution.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} />
                  <span>San Francisco, CA, USA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Mobivic Solution. All rights reserved.</p>
              <p className="mt-1">
                Founded by{' '}
                <span className="text-[var(--neon-blue)]">Mobisa Frankline</span>
                {' & '}
                <span className="text-[var(--neon-purple)]">Victor Irungu</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}