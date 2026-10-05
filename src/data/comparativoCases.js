/**
 * Configuração dos Cases Técnicos de Comparação (3D vs. Real)
 * 
 * Estrutura oficial dos cases com correspondência 1:1 entre
 * projeto executivo 3D parametrizado e o evento físico executado.
 */

export const defaultComparativoCases = [
  {
    id: 'pontal-weekend',
    isPlaceholder: false,
    title: 'Pontal Weekend · Cenografia Orgânica & Iluminação Cênica',
    titleKey: 'comparativo.casePontalWeekend.title',
    category: 'Pontal Weekend',
    categoryKey: 'comparativo.casePontalWeekend.category',
    description: 'Comparativo milimétrico entre a modelagem 3D parametrizada (arcos em madeira ripada, torres de PA e iluminação cênica) e a execução física real no Pontal Weekend com público e show ao vivo.',
    descKey: 'comparativo.casePontalWeekend.desc',
    beforeImage: '/cases/pontal-weekend-3d.png',
    beforeLabel: 'MODELAGEM 3D (PARAMETRIZAÇÃO)',
    beforeLabelKey: 'comparativo.beforeLabel',
    afterImage: '/cases/pontal-weekend-real.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    afterLabelKey: 'comparativo.afterLabel',
    specs: 'Pontal Weekend · Arcos em Madeira Ripada · Torres Line Array · Iluminação Cênica Neon',
    specsKey: 'comparativo.casePontalWeekend.specs',
    status: '100% Fidelidade Estrutural'
  },
  {
    id: 'palco-prive-20',
    isPlaceholder: false,
    title: 'Palco Privê 20ª Edição · Cenografia & Iluminação',
    titleKey: 'comparativo.casePrive.title',
    category: 'Palco Principal',
    categoryKey: 'comparativo.casePrive.category',
    description: 'Comparativo milimétrico entre o projeto executivo 3D parametrizado e a montagem física real com iluminação cênica, pirotecnia, painel de LED central e público.',
    descKey: 'comparativo.casePrive.desc',
    beforeImage: '/cases/stage-blueprint-white.jpeg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    beforeLabelKey: 'comparativo.beforeLabel',
    afterImage: '/cases/stage-3d-color.jpeg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    afterLabelKey: 'comparativo.afterLabel',
    specs: 'Palco Principal · Estrutura Box Truss · Painel Central LED · Efeitos Cênicos',
    specsKey: 'comparativo.casePrive.specs',
    status: '100% Fidelidade Estrutural'
  }
];
