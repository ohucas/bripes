import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/bripesbr',
      color: 'hover:text-pink-500',
    },

  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-secondary border-t border-border">
      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 md:py-20"
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <img src="/img/logo.png" alt="bripes" className="h-10 w-auto" />
              <span className="text-white font-bold text-xl">bripes</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agência digital especializada em criar experiências web inovadoras e transformadoras.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Desenvolvimento Web',
                'Landing Pages',
                'UI/UX Design',
                'Identidade Visual',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:bripesbr@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                bripesbr@gmail.com
              </a>
              <a
                href="https://wa.me/5571992922292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                +55 (71) 99292-2292
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-gray-400 text-sm">
            © {currentYear} bripes. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  title={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
          >
            Voltar ao Topo
            <ExternalLink size={16} className="rotate-90" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-black/50 border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-xs">
          Desenvolvido com ❤️ pela bripes | Agência Digital Premium
        </div>
      </div>
    </footer>
  );
}
