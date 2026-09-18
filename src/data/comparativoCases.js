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
    id: 'slot-tecnico-01',
    isPlaceholder: true,
    title: 'Slot Técnico 01 · Inspeção Estrutural & Cenográfica',
    category: 'Comparativo 3D vs Real',
    description: 'Demonstração ativa da tecnologia de comparação milimétrica entre projeto executivo 3D e montagem real. Arraste a barra para inspecionar a fidelidade.',
    beforeImage: '/backgrounds/stage-truss-elevation.jpg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/truss-rigging-cad.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    specs: 'Tecnologia Pronta · Aguardando fotos oficiais do cliente',
    status: 'Comparador Ativo'
  },
  {
    id: 'slot-tecnico-02',
    isPlaceholder: true,
    title: 'Slot Técnico 02 · Ativação & Ambientação',
    category: 'Slot Reservado',
    description: 'Espaço pré-configurado no sistema de comparação para inclusão imediata do segundo case oficial de cenografia ou ativação.',
    beforeImage: '/backgrounds/portal-mobile.jpg',
    beforeLabel: 'MODELAGEM 3D (IDEALIZADO)',
    afterImage: '/backgrounds/ambientacao-lounge.jpg',
    afterLabel: 'EVENTO REAL (EXECUTADO)',
    specs: 'Resolução recomendada: 1920x1080 (16:9)',
    status: 'Aguardando Ativos'
  }
];
