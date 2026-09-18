import React from 'react';
import { MethodSection } from '../components/MethodSection';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const MethodPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('method.titleHighlight', 'Método')} | Tentáculos Lab`}
        description={t('method.subtitle', 'Conheça o processo da Tentáculos Lab: Do briefing ao render aprovado. 4 Frentes de Fundação que unem conceito criativo e rigor técnico estrutural.')}
        canonicalPath="/method"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 space-y-3">
        <span className="rotulo-tecnico block">
          {t('method.tag', 'M E T O D O L O G I A')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('method.titlePrefix', 'Do briefing ao render aprovado:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('method.titleHighlight', 'o método')}
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('method.subtitle', 'Dividimos o desenvolvimento do projeto em 4 frentes de fundação interconectadas para garantir previsibilidade de custos, viabilidade técnica e impacto visual inconfundível.')}
        </p>
      </div>

      <MethodSection hideHeader={true} />

      {/* CTA para Iniciar Briefing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="card-chanfrado p-8 sm:p-12 rounded-2xl bg-[#121D31] max-w-3xl mx-auto space-y-4">
          <span className="rotulo-tecnico">{t('method.ctaBoxTitle', 'PRONTO PARA APLICAR ESSE MÉTODO NO SEU EVENTO?')}</span>
          <h2 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('method.ctaBoxHeadingPrefix', 'Transforme seu briefing em um')}{' '}
            <span className="font-semibold text-[#63A4FF]">
              {t('method.ctaBoxHeadingHighlight', 'projeto executável')}
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            {t('method.ctaBoxDesc', 'Envie as necessidades da sua marca ou produção diretamente para Lucas Castro e inicie a concepção 3D com precisão técnica.')}
          </p>
          <div className="pt-2">
            <Link
              to="/briefing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{t('method.ctaBoxBtn', 'Preencher Briefing Técnico')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
