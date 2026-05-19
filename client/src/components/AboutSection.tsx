import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Soluções web modernas, responsivas e de alta performance com as melhores tecnologias do mercado.',
    },
    {
      icon: Palette,
      title: 'Design Inovador',
      description: 'Interfaces intuitivas e identidades visuais impactantes que conectam com seu público-alvo.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização contínua para garantir velocidade, segurança e melhor experiência do usuário.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Sobre a Agência</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Criamos Experiências
            <span className="text-primary block">Digitais Transformadoras</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            A bripes é uma agência digital especializada em criar soluções web de alto impacto. Com uma equipe de profissionais apaixonados por design e tecnologia, transformamos visões em realidade digital.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-8 pt-16 border-t border-border"
        >
          {[
            { number: '50+', label: 'Projetos Realizados' },
            { number: '30+', label: 'Clientes Satisfeitos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '100%', label: 'Dedicação' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
