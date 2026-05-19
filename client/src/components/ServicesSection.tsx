import { motion } from 'framer-motion';
import { Globe, Layout, Palette, Smartphone, Share2, Zap } from 'lucide-react';

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas, escaláveis e responsivas com as melhores práticas de desenvolvimento.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para gerar leads e aumentar suas vendas online.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas e experiências memoráveis que encantam seus usuários.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Smartphone,
      title: 'Identidade Visual',
      description: 'Branding completo e identidade visual que representa sua marca com excelência.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Share2,
      title: 'Social Media Design',
      description: 'Conteúdo visual impactante para suas redes sociais e campanhas digitais.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Otimização & Performance',
      description: 'Análise, otimização e manutenção contínua para máxima performance.',
      color: 'from-red-600 to-red-700',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663435709056/3V9QBoy5SfABaafoyhgtH5/services-section-bg-T2UuxECgkSg4vdKbvNm7iF.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Sobreposição */}
      <div className="absolute inset-0 bg-black/70 z-10" />

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
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Soluções Completas
            <span className="text-primary block">para Sua Presença Digital</span>
          </h2>
        </motion.div>

        {/* Grade de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 inline-block p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Linha de Efeito ao Passar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
