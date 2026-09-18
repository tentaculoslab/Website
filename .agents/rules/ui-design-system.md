# UI & Design System Guidelines — Tentáculos Lab
> Baseado estritamente no manual de identidade visual `Tentaculos-Lab-Manual-de-Identidade.pdf` e documentação técnica em `docs/BRAND_IDENTITY_MANUAL.md`.

Ao gerar ou refatorar código frontend neste projeto, siga estritamente estas diretrizes oficiais:

## 1. Cores Oficiais da Marca
* **Fundo Base**: `#0A1326` (Azul-petróleo) — domina mais de 80% da interface.
* **Fundo Profundo / Rodapé**: `#050D19` (Profundo).
* **Superfícies de Cards**: `#121D31` (Superfície 2) com hover em `#1B283D` (Superfície).
* **Azul Destaque**: `#63A4FF` — utilizado exclusivamente na **palavra-chave dos títulos** e dados técnicos.
* **Azul Estrutura**: `#377BDB` — rótulos, filetes de divisão, botões e bordas de cards.
* **Barra de Luz**: `#4391FC` — filete de 3px no topo de todas as páginas (`.barra-topo-luz`).
* **Dourado**: `#E9B65C` — acento único pontual (máximo 1 vez por página).
* **PROIBIÇÕES CROMÁTICAS**: 
  * ✕ NENHUM ROSA em hipótese alguma.
  * ✕ NENHUM degradê colorido (somente azul-marinho sobre azul-marinho).

## 2. Tipografia Oficial & Hierarquia
* **Títulos**: **Poppins Light (300)** com a palavra-chave em **SemiBold (600) `#63A4FF`**.
* **Rótulos Técnicos**: **Poppins Medium (500) Caixa Alta** com **tracking `0.22em`** (classe `.rotulo-tecnico`).
* **Texto / Corpo**: **Inter Light (300)** para parágrafos; Regular (400) para ênfases. Entrelinha 1.6.
* ✕ **NENHUMA FONTE MONOESPAÇADA**: É proibido o uso de `font-mono` em materiais e interfaces da marca.

## 3. Elementos Gráficos & Estruturais
* **Barra de Topo**: `.barra-topo-luz` (3px com foco luminoso central `#4391FC`).
* **Card Chanfrado**: `.card-chanfrado` (borda esquerda 3px `#377BDB` e chanfro de 18px no canto superior direito).
* **Camada Blueprint**: Textura técnica de fundo mantida entre **20% e 30% de opacidade**.
* **Logomarca**: `tentáculos ◉ lab` sempre em **branco chapado** (`/logo-white.png`) sobre fundo escuro.
* **WhatsApp**: Usar o ícone oficial em `src/components/icons/WhatsAppIcon.jsx` ou `/public/whatsapp.svg`.

## 4. Espaçamento & Whitespace
* Use o dobro de whitespace necessário (`py-24 sm:py-32`, `gap-8` a `gap-12`).
* Evite a estética de "dashboard corporativo padrão". Priorize elegância editorial e precisão técnica.
