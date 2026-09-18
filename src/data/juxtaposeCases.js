/**
 * Configuração dos Cases Técnicos de Comparação Juxtapose (3D vs. Real)
 * 
 * NOTA TÉCNICA:
 * A tecnologia Juxtapose está totalmente implementada e integrada.
 * Assim que os ativos oficiais dos cases da Tentáculos Lab forem fornecidos
 * (pares de render 3D + foto real do evento executado), basta preencher
 * as imagens e detalhes neste arquivo.
 */

export const defaultJuxtaposeCases = [
  {
    id: 'slot-tecnico-01',
    isPlaceholder: true,
    title: 'Slot Técnico 01 · Inspeção Estrutural & Cenográfica',
    category: 'Tecnologia Juxtapose',
    description: 'Demonstração ativa da tecnologia de comparação milimétrica entre projeto executivo 3D e montagem real. Arraste a barra para inspecionar a fidelidade.',
    beforeImage: '/backgrounds/stage-truss-elevation.jpg',
    beforeLabel: '01 · MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/truss-rigging-cad.jpg',
    afterLabel: '02 · EVENTO REAL (EXECUTADO)',
    specs: 'Tecnologia Pronta · Aguardando fotos oficiais do cliente',
    status: 'Motor Juxtapose Ativo'
  },
  {
    id: 'slot-tecnico-02',
    isPlaceholder: true,
    title: 'Slot Técnico 02 · Ativação & Ambientação',
    category: 'Slot Reservado',
    description: 'Espaço pré-configurado no sistema Juxtapose para inclusão imediata do segundo case oficial de cenografia ou ativação.',
    beforeImage: '/backgrounds/portal-mobile.jpg',
    beforeLabel: '01 · MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/ambientacao-lounge.jpg',
    afterLabel: '02 · EVENTO REAL (EXECUTADO)',
    specs: 'Resolução recomendada: 1920x1080 (16:9)',
    status: 'Aguardando Ativos'
  }
];
