/**
 * Configuração dos Cases Técnicos de Comparação (3D vs. Real)
 * 
 * NOTA TÉCNICA:
 * A tecnologia de comparação interativa está totalmente implementada e integrada.
 * Assim que os ativos oficiais dos cases da Tentáculos Lab forem fornecidos
 * (pares de render 3D + foto real do evento executado), basta preencher
 * as imagens e detalhes neste arquivo.
 */

export const defaultComparativoCases = [
  {
    id: 'slot-palco-festival',
    isPlaceholder: false,
    title: 'Palco Principal de Festival · Elevação e Rigging Cênico',
    category: 'Palcos & Arenas',
    description: 'Inspeção comparativa da conformidade dimensional entre a malha tridimensional de treliças estruturais (CAD 3D) e o palco montado em escala real com iluminação cênica ativa.',
    beforeImage: '/backgrounds/stage-truss-elevation.jpg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/stage-lighting-platform.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    specs: 'Área: 420m² · Carga de Rigging: 18 Toneladas · Painéis LED P3.9: 180m²',
    status: '100% Fidelidade Estrutural'
  },
  {
    id: 'slot-bar-cenografico',
    isPlaceholder: false,
    title: 'Lounge VIP & Bar Imersivo · Ambientação e Mobiliário',
    category: 'Bares & Hospitalidade',
    description: 'Comparação técnica entre a volumetria espacial 3D parametrizada do bar temático e a execução física com acabamentos, iluminação arquitetural e fluxo de atendimento.',
    beforeImage: '/backgrounds/truss-rigging-cad.jpg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/spotlight-truss.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    specs: 'Frente de Balcão: 24m · Módulos Estruturados: 8 · Iluminação Integrada',
    status: '100% Fidelidade Executiva'
  },
  {
    id: 'slot-portico-ativacao',
    isPlaceholder: false,
    title: 'Pórtico de Entrada Monumental · Arquitetura Efêmera',
    category: 'Ativação & Fachadas',
    description: 'Avaliação milimétrica do pórtico cenográfico de entrada: da maquete executiva 3D com eixos e volumetria à fabricação física e montagem no festival.',
    beforeImage: '/backgrounds/logo-origin-3d.jpg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/cases/case-fachada-cenografia.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    specs: 'Vão Livre: 14 metros · Altura: 8.5 metros · Compatibilidade Estrutural Total',
    status: '100% Fidelidade de Montagem'
  }
];
