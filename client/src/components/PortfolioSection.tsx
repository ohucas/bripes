import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PortfolioSection() {
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

  const projects = [
    {
      title: 'Lions Alpha Kennel',
      description: 'Website profissional para criação de cães de raça. Design moderno com galeria de fotos e sistema de contato.',
      url: 'https://www.lionsalphakennel.com/',
      category: 'Web Design',
      image: '/img/parceiros/lionsalpha.png',
    },
    {
      title: 'L\'Artes Corações',
      description: 'E-commerce de decoração e artesanato. Plataforma completa com catálogo de produtos e sistema de pagamento.',
      url: 'https://lartrescoracoes.com.br/',
      category: 'E-commerce',
      image: '/img/parceiros/lartrescorações.png',
    },
    {
      title: 'Portfólio Behance',
      description: 'Galeria de trabalhos de design, UI/UX e identidade visual. Projetos criativos e inovadores.',
      url: 'https://www.behance.net/ohucas',
      category: 'Design',
      image: '/img/parceiros/behance.png',
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663435709056/3V9QBoy5SfABaafoyhgtH5/portfolio-section-bg-kfNUiciKv5RAv3yXEsw9Za.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Sobreposição */}
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
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Portfólio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Projetos que Transformam
            <span className="text-primary block">Negócios</span>
          </h2>
        </motion.div>

        {/* Grade de Projetos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group block overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Contêiner de Imagem */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-xs font-semibold text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Links Adicionais */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-border"
        >
          <a
            href="https://www.behance.net/ohucas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-red-400 font-semibold transition-colors flex items-center gap-2"
          >
            Ver mais no Behance <ExternalLink size={16} />
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="https://instagram.com/bripesbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-red-400 font-semibold transition-colors flex items-center gap-2"
          >
            Seguir no Instagram <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
