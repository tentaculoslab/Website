import React from 'react';
import { Layers, FileText, Compass, Box, CheckCircle2 } from 'lucide-react';

export const MethodSection = () => {
  const frentes = [
    {
      num: '01',
      title: 'Conceito',
      desc: 'Território criativo, narrativa e direção visual do evento. A ideia que organiza todas as decisões seguintes.',
      entrega: 'Apresentação de conceito com referências e direção visual'
    },
    {
      num: '02',
      title: 'Layout',
      desc: 'Planta baixa, fluxos de público, setorização e ocupação do espaço em escala.',
      entrega: 'Planta baixa em escala, com setorização e fluxos'
    },
    {
      num: '03',
      title: 'Projeto técnico estrutural',
      desc: 'Estruturas, medidas, cotas e especificações prontas para orçamento e montagem.',
      entrega: 'Pranchas técnicas com medidas e cotas + Quantitativo de estruturas e peças'
    },
    {
      num: '04',
      title: 'Projeto 3D',
      desc: 'Modelagem e renders do evento montado — o cliente aprova vendo, não imaginando.',
      entrega: 'Modelo 3D do evento montado + Renders ultrarrealistas por ambiente'
    }
  ];

  return (
    <section id="metodo" className="py-24 sm:py-32 bg-[#050D19] relative border-t border-white/[0.07] overflow-hidden">
      {/* Blueprint background texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/truss-rigging-cad.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D19] via-[#0A1326]/80 to-[#0A1326] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Bloco 02 · Método */}
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="rotulo-tecnico block">
              0 2 · M É T O D O
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Do briefing ao <span className="font-semibold text-[#63A4FF]">render aprovado</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
              Duas etapas encadeadas: primeiro entender e conceituar, depois traduzir em projeto visualizável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Etapa 1 */}
            <div className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4">
              <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                0 1 · B R I E F I N G   E   C O N C E I T O
              </span>
              <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Entender, pesquisar e definir a linguagem
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                O trabalho começa pela análise do briefing, entendendo o propósito do projeto, o público, o espaço disponível, a identidade da marca, o orçamento e os resultados esperados. A partir dessas informações, a Tentáculos Lab desenvolve o conceito criativo e define a linguagem visual, os materiais, as cores, a iluminação, a ambientação e os elementos de interação que formarão a experiência.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4">
              <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                0 2 · D E S E N V O L V I M E N T O
              </span>
              <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Espacializar, detalhar e validar visualmente
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Na etapa de desenvolvimento, as ideias são traduzidas em projetos 3D, renders ultrarrealistas, plantas, detalhamentos, mockups e apresentações visuais. Isso permite que o cliente visualize o resultado antes da produção, avalie diferentes soluções e participe dos ajustes com mais clareza e segurança.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 04 · Escopo & Fundação do Projeto */}
        <div className="space-y-12 pt-6">
          <div className="space-y-2">
            <span className="rotulo-tecnico block">
              0 4 · E S C O P O
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Fundação <span className="font-semibold text-[#63A4FF]">do projeto</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
              Quatro frentes que caminham juntas, do conceito ao arquivo técnico — cada uma com a sua entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frentes.map((frente) => (
              <div 
                key={frente.num} 
                className="card-chanfrado p-6 rounded-xl bg-[#121D31] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="rotulo-tecnico text-base font-semibold text-[#63A4FF] block">
                    {frente.num}
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {frente.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {frente.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                  <span className="rotulo-tecnico text-[9px] text-slate-500 block">
                    ENTREGA
                  </span>
                  <p className="text-slate-200 text-xs font-normal">
                    {frente.entrega}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
