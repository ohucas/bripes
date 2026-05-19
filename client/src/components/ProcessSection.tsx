import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code2, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
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

  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Planejamento',
      description: 'Entendemos seus objetivos, público-alvo e desafios para criar uma estratégia sólida.',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design',
      description: 'Criamos wireframes e mockups visuais que representam sua visão com excelência.',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Transformamos designs em código limpo, responsivo e otimizado para performance.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Entrega',
      description: 'Testamos, otimizamos e entregamos um produto pronto para conquistar resultados.',
    },
  ];

  return (
    <section
      id="process"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Metodologia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Nosso Processo de Trabalho
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Um fluxo estruturado que garante qualidade, inovação e resultados excepcionais em cada projeto.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Number */}
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>

                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Alternative View */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Timeline Típico</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Planejamento', duration: '1-2 semanas' },
              { label: 'Design', duration: '2-3 semanas' },
              { label: 'Desenvolvimento', duration: '3-6 semanas' },
              { label: 'Testes & Entrega', duration: '1-2 semanas' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-card/50 border border-border rounded-lg"
              >
                <div className="font-bold text-primary mb-2">{item.label}</div>
                <div className="text-sm text-gray-400">{item.duration}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
