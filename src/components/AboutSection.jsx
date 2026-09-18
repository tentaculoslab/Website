import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A1326] relative border-t border-white/[0.07] overflow-hidden">
      {/* Camada Blueprint Sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-lighting-platform.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326] via-[#050D19]/90 to-[#0A1326] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Bloco 03 · Quem Assina */}
        <div className="space-y-4">
          <span className="rotulo-tecnico block">
            0 3 · Q U E M   A S S I N A
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            Direção criativa & <span className="font-semibold text-[#63A4FF]">visão sistêmica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Foto Autêntica de Lucas Castro */}
          <div className="lg:col-span-5">
            <div className="card-chanfrado rounded-2xl overflow-hidden bg-[#121D31] p-3 shadow-2xl relative group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#050D19]">
                <img 
                  src="/branding/lucas-castro.jpg" 
                  alt="Lucas Castro - Diretor Criativo e Fundador da Tentáculos Lab"
                  width="500"
                  height="625"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1326] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h3 className="text-xl font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Lucas Castro
                  </h3>
                  <span className="rotulo-tecnico text-[10px] text-[#63A4FF] block">
                    CENOGRAFIA • ESPACIALIZAÇÃO 3D • PRODUÇÃO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto Biográfico e Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Citação Oficial da Apresentação */}
            <div className="p-6 rounded-xl bg-[#121D31] border-l-4 border-[#377BDB] space-y-2 shadow-lg">
              <p className="text-white text-base sm:text-lg font-light italic leading-relaxed">
                “Não desenvolvo apenas o que será visto. Penso em como será produzido, vivido, percebido e lembrado.”
              </p>
              <span className="rotulo-tecnico text-[10px] text-slate-400 block pt-1">
                — LUCAS CASTRO
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Especialista em desenvolvimento de projetos que unem criatividade, visão estratégica e uma sólida experiência em grandes produções pelo Brasil.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Responsável pelo desenvolvimento técnico e visual de projetos como o <strong className="text-white font-medium">Weekend Pedra Azul</strong> — evento que se tornou um marco no Espírito Santo —, também acumula em sua trajetória o gerenciamento de projetos de grande porte, como <strong className="text-white font-medium">Tomorrowland Brasil</strong>, <strong className="text-white font-medium">Lollapalooza</strong> e <strong className="text-white font-medium">Camarote Brahma</strong>, em seu circuito nacional, além do desenvolvimento de importantes produções realizadas em parceria com prefeituras.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Seu olhar percorre todas as etapas — do conceito à execução —, conectando estética, identidade de marca, funcionalidade, experiência do público, viabilidade técnica e produção. Essa visão sistêmica permite antecipar desafios, propor soluções e transformar ideias em projetos coerentes, executáveis e marcantes.
            </p>

            {/* Destaque de Síntese */}
            <div className="p-4 rounded-lg bg-[#050D19] border border-white/[0.06] text-xs text-slate-300 font-light">
              <span className="text-[#63A4FF] font-medium block mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Na Tentáculos LAB, Lucas é a cabeça que pensa no todo:
              </span>
              Quem transforma conceitos em experiências, conecta criação e produção e garante que cada projeto tenha intenção, identidade e fundamento.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
