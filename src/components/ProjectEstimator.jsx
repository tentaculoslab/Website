import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

export const ProjectEstimator = ({ hideHeader = false }) => {
  const { t, language } = useLanguage();
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

  const tiposDisponiveis = [
    { key: 'Palcos', label: language === 'en' ? 'Stages' : language === 'es' ? 'Escenarios' : 'Palcos' },
    { key: 'Bares', label: language === 'en' ? 'Bars' : language === 'es' ? 'Bares' : 'Bares' },
    { key: 'Ambientação', label: language === 'en' ? 'Ambiance' : language === 'es' ? 'Ambientación' : 'Ambientação' },
    { key: 'Instagramáveis', label: language === 'en' ? 'Photo Spots' : language === 'es' ? 'Instagramables' : 'Instagramáveis' },
    { key: 'Ativação de Marcas', label: language === 'en' ? 'Brand Activation' : language === 'es' ? 'Activación' : 'Ativação de Marcas' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const greetings = language === 'en'
      ? 'Hello, Lucas! I would like to align a briefing with Tentáculos Lab.'
      : language === 'es'
      ? '¡Hola, Lucas! Me gustaría alinear un briefing con Tentáculos Lab.'
      : 'Olá, Lucas! Gostaria de alinhar um briefing com a Tentáculos Lab.';

    const header = language === 'en'
      ? '*3D Technical Project Briefing*'
      : language === 'es'
      ? '*Briefing de Proyecto Técnico 3D*'
      : '*Briefing de Projeto Técnico 3D*';

    const texto = `${greetings}%0A%0A${header}%0A- *${t('briefing.nameLabel', 'Nome')}:* ${encodeURIComponent(formData.nome)}%0A- *${t('briefing.companyLabel', 'Empresa')}:* ${encodeURIComponent(formData.empresa || '-')}%0A- *${t('briefing.whatsappLabel', 'WhatsApp')}:* ${encodeURIComponent(formData.whatsapp)}%0A- *${t('briefing.emailLabel', 'E-mail')}:* ${encodeURIComponent(formData.email)}%0A- *Tipologia:* ${encodeURIComponent(projectType)}%0A- *${t('briefing.detailsLabel', 'Detalhes')}:* ${encodeURIComponent(formData.briefing || '-')}`;

    setTimeout(() => {
      window.open(`https://wa.me/5511972629827?text=${texto}`, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className={`${hideHeader ? 'py-6 sm:py-8' : 'py-24 sm:py-32'} bg-[#050D19] relative ${hideHeader ? '' : 'border-t border-white/[0.07]'} overflow-hidden`}>
      {/* Camada Blueprint Sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-lighting-platform.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D19] via-[#0A1326]/90 to-[#0A1326] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header (se não for página dedicada) */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="rotulo-tecnico block">
              {t('briefing.tag', 'B R I E F I N G  T É C N I C O')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              {t('briefing.titlePrefix', 'Inicie a fundação do')}{' '}
              <span className="font-semibold text-[#63A4FF]">
                {t('briefing.titleHighlight', 'seu projeto')}
              </span>
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              {t('briefing.subtitle', 'Compartilhe as diretrizes do seu evento para direcionamento criativo, layout em escala e modelagem 3D executável.')}
            </p>
          </div>
        )}

        {/* Card do Formulário */}
        <div className="card-chanfrado rounded-2xl p-6 sm:p-10 bg-[#121D31] shadow-2xl space-y-8">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Escolha da Tipologia Oficial */}
            <div className="space-y-2">
              <label className="rotulo-tecnico text-[10px] text-slate-300 block">
                {t('briefing.selectTypology', 'SELECIONE A TIPOLOGIA PRINCIPAL')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {tiposDisponiveis.map((item) => (
                  <button
                    type="button"
                    key={item.key}
                    onClick={() => setProjectType(item.key)}
                    className={`py-2 px-3 rounded text-xs tracking-wider uppercase transition-all ${
                      projectType === item.key
                        ? 'bg-[#377BDB] text-white font-medium shadow-md'
                        : 'bg-[#0A1326] text-slate-400 border border-white/[0.08] hover:text-white'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs de Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">
                  {t('briefing.nameLabel', 'SEU NOME')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('briefing.namePlaceholder', 'Nome completo')}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">
                  {t('briefing.companyLabel', 'EMPRESA / PRODUTORA')}
                </label>
                <input
                  type="text"
                  placeholder={t('briefing.companyPlaceholder', 'Nome da produtora ou marca')}
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">
                  {t('briefing.whatsappLabel', 'WHATSAPP')}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t('briefing.whatsappPlaceholder', '(11) 99999-9999')}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="rotulo-tecnico text-[10px] text-slate-400 block">
                  {t('briefing.emailLabel', 'E-MAIL')}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t('briefing.emailPlaceholder', 'seuemail@empresa.com.br')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors"
                />
              </div>
            </div>

            {/* Descrição do Briefing */}
            <div className="space-y-1.5">
              <label className="rotulo-tecnico text-[10px] text-slate-400 block">
                {t('briefing.detailsLabel', 'OBJETIVO DO PROJETO & OBSERVAÇÕES')}
              </label>
              <textarea
                rows={4}
                placeholder={t('briefing.detailsPlaceholder', 'Conte brevemente sobre o evento: dimensão estimada, local, data prevista ou referências...')}
                value={formData.briefing}
                onChange={(e) => setFormData({ ...formData, briefing: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0A1326] border border-white/[0.1] focus:border-[#63A4FF] text-white text-xs outline-none transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#377BDB]/25"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t('briefing.submitBtn', 'Encaminhar Briefing via WhatsApp')}</span>
            </button>

          </form>

          {/* Dados Oficiais de Contato Direto */}
          <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="rotulo-tecnico text-[10px] text-slate-500 block">
                {t('briefing.techLeadLabel', 'RESPONSÁVEL TÉCNICO')}
              </span>
              <p className="text-white font-medium mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Lucas Castro
              </p>
            </div>
            <div>
              <span className="rotulo-tecnico text-[10px] text-slate-500 block">
                {t('briefing.directServiceLabel', 'ATENDIMENTO DIRETO')}
              </span>
              <p className="text-slate-300 font-light mt-0.5 flex items-center gap-2 flex-wrap">
                <a href="mailto:lucas@tentaculosproducoes.com.br" className="hover:text-[#63A4FF] transition-colors">lucas@tentaculosproducoes.com.br</a>
                <span>•</span>
                <a href="https://wa.me/5511972629827" target="_blank" rel="noopener noreferrer" className="hover:text-[#63A4FF] inline-flex items-center gap-1 transition-colors">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#377BDB]" />
                  <span>(11) 9 7262-9827</span>
                </a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
