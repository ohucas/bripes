import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bripesbr@gmail.com',
      href: 'mailto:bripesbr@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (71) 99292-2292',
      href: 'https://wa.me/5571992922292',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Salvador, Bahia - Brasil',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663435709056/3V9QBoy5SfABaafoyhgtH5/cta-section-bg-2gg6Km8Lo5ifi3uQqo42sE.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Sobreeposição */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-20 container mx-auto px-4"
      >
        {/* Cabeçalho */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Entre em Contato
            <span className="text-primary block">Conosco</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar seu negócio a crescer. Entre em contato através dos nossos canais.
          </p>
        </motion.div>

        {/* Informações de Contato */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
