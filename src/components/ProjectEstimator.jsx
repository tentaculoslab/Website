import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ProjectEstimator = () => {
  const [projectType, setProjectType] = useState('Palcos');
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    cidade: '',
    prazo: '',
    briefing: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const tiposDisponiveis = [
    'Palcos',
    'Bares',
    'Ambientação',
    'Instagramáveis',
    'Ativação de Marcas'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const texto = `Olá, Lucas! Gostaria de alinhar um briefing com a Tentáculos Lab.%0A%0A*Briefing de Projeto Técnico 3D*%0A- *Nome:* ${encodeURIComponent(formData.nome)}%0A- *Empresa/Produtora:* ${encodeURIComponent(formData.empresa || 'Não informada')}%0A- *WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A- *E-mail:* ${encodeURIComponent(formData.email)}%0A- *Tipologia:* ${encodeURIComponent(projectType)}%0A- *Local/Cidade:* ${encodeURIComponent(formData.cidade || 'São Paulo')}%0A- *Prazo do Evento:* ${encodeURIComponent(formData.prazo || 'A definir')}%0A- *Detalhes:* ${encodeURIComponent(formData.briefing || 'Sem observações adicionais')}`;

    setTimeout(() => {
      window.open(`https://wa.me/5511972629827?text=${texto}`, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#050D19] relative border-t border-white/[0.07] overflow-hidden">
      {/* Camada Blueprint Sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-lighting-platform.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D19] via-[#0A1326]/90 to-[#0A1326] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="rotulo-tecnico block">
            0 6 · B R I E F I N G   &   C O N T A T O
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            Inicie a fundação do <span className="font-semibold text-[#63A4FF]">seu projeto</span>
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Compartilhe as diretrizes do seu evento para direcionamento criativo, layout em escala e modelagem 3D executável.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="card-chanfrado rounded-2xl p-6 sm:p-10 bg-[#121D31] shadow-2xl space-y-8">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Escolha da Tipologia Oficial */}
            <div className="space-y-2">
              <label className="rotulo-tecnico text-[10px] text-slate-300 block">
                TIPOLOGIA PRINCIPAL
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {tiposDisponiveis.map((tipo) => (
                  <button
                    type="button"
                    key={tipo}
                    onClick={() => setProjectType(tipo)}
                    className={`py-2 px-3 rounded text-xs tracking-wider uppercase transition-all ${
                      projectType === tipo
                        ? 'bg-[#377BDB] text-white font-medium shadow-md'
                        : 'bg-[#0A1326] text-slate-400 border border-white/[0.08] hover:text-white'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {tipo}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs de Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">SEU NOME</label>
                <input
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">EMPRESA / PRODUTORA</label>
                <input
                  type="text"
                  placeholder="Nome da produtora ou marca"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">WHATSAPP</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">E-MAIL</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>
            </div>

            {/* Descrição do Briefing */}
            <div className="space-y-1.5">
              <label className="rotulo-tecnico text-[10px] text-slate-400 block">OBJETIVO DO PROJETO & OBSERVAÇÕES</label>
              <textarea
                rows={4}
                placeholder="Conte brevemente sobre o evento: dimensão estimada, local, data prevista ou referências..."
                value={formData.briefing}
                onChange={(e) => setFormData({ ...formData, briefing: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#377BDB]/25"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Encaminhar Briefing para Lucas Castro</span>
              <Send className="w-4 h-4" />
            </button>

          </form>

          {/* Dados Oficiais de Contato Direto */}
          <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="rotulo-tecnico text-[10px] text-slate-500 block">RESPONSÁVEL TÉCNICO</span>
              <p className="text-white font-medium mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Lucas Castro
              </p>
            </div>
            <div>
              <span className="rotulo-tecnico text-[10px] text-slate-500 block">ATENDIMENTO DIRETO</span>
              <p className="text-slate-300 font-light mt-0.5">
                lucas@tentaculosproducoes.com.br • (11) 9 7262-9827
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
