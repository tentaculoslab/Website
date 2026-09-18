# 📘 Manual de Identidade Visual e Guia Técnico de Marca
> **Tentáculos Lab** — Núcleo Criativo, Técnico e Experimental da Tentáculos Produções  
> *Versão 1.0 (2026) • Extraído integralmente do manual oficial `Tentaculos-Lab-Manual-de-Identidade.pdf`*

---

## 🎯 1. Conceito e Território da Marca

| Pilar | Definição Oficial | Aplicação Prática no Design |
| :--- | :--- | :--- |
| **Conceito** | *"O laboratório onde o conceito vira projeto executável"* | A estética do site reflete projetos reais, viáveis e precisos, não devaneios conceituais. |
| **Território** | **Técnico e experimental** | Base gráfica inspirada em plantas baixas, blueprints, malhas CAD 3D e iluminação cênica. |
| **Gesto** | **Preciso, nunca decorativo** | Todo elemento gráfico (linhas, grids, chanfros) possui função técnica de projeto. |

---

## 🎨 2. Paleta de Cores Oficial

A identidade visual nasce no escuro. Fundos claros são exceção. O degradê é sempre **azul-marinho sobre azul-marinho**.

### 2.1 Tabela de Cores (Tokens Técnicos)

| Nome da Cor | Hex | RGB | Função Oficial do Manual | Classe / Estilo CSS |
| :--- | :--- | :--- | :--- | :--- |
| **Azul-petróleo** | `#0A1326` | `rgb(10, 19, 38)` | **Fundo padrão de toda peça e página.** | `bg-[#0A1326]` / `var(--bg-base)` |
| **Profundo** | `#050D19` | `rgb(5, 13, 25)` | Vinhetas, bordas de degradê, rodapés e vídeos. | `bg-[#050D19]` |
| **Superfície** | `#1B283D` | `rgb(27, 40, 61)` | Cabeçalhos de card e barras internas em destaque. | `bg-[#1B283D]` |
| **Superfície 2** | `#121D31` | `rgb(18, 29, 49)` | Corpo de cards e blocos de conteúdo. | `bg-[#121D31]` |
| **Branco** | `#FFFFFF` | `rgb(255, 255, 255)` | Logomarca oficial, títulos e números. | `text-white` |
| **Azul Destaque** | `#63A4FF` | `rgb(99, 164, 255)` | **Palavra-chave do título**, dados técnicos e foco. | `text-[#63A4FF]` |
| **Azul Estrutura** | `#377BDB` | `rgb(55, 123, 219)` | Rótulos, filetes, botões e bordas de card. | `border-[#377BDB]` / `bg-[#377BDB]` |
| **Azul Barra** | `#4391FC` | `rgb(67, 145, 252)` | **Barra de luz de 3px no topo** de toda página. | `.barra-topo-luz` |
| **Dourado** | `#E9B65C` | `rgb(233, 182, 92)` | **Acento único pontual** (máximo 1x por página). | `text-[#E9B65C]` |

### 2.2 Proporções de Uso das Cores
1. **Escuro domina a página**: Mais de 80% da área visível deve ser composta por `#0A1326` e `#050D19`.
2. **Azul Destaque (`#63A4FF`)**: Aplica-se em **apenas UMA palavra-chave por título**.
3. **Dourado (`#E9B65C`)**: Aparece **no máximo 1 vez por página**, reservado exclusivamente para sinalizar uma condição especial, marco ou selo de homologação técnica.
4. **Proibições Categóricas**:
   * ✕ **ROSA em hipótese alguma** (nem como degradê, nem como detalhe).
   * ✕ **NENHUM degradê colorido** (nunca usar roxo, ciano, arco-íris; somente azul sobre azul).

---

## ✍️ 3. Tipografia Oficial

A marca utiliza **duas famílias tipográficas com três funções distintas**.

> ⚠️ **REGRA CRÍTICA DO MANUAL**: É terminantemente proibido o uso de fontes monoespaçadas (`font-mono`, Courier, Roboto Mono, JetBrains Mono, etc.) em qualquer material da marca. Rótulos técnicos são sempre Poppins em caixa alta.

| Função | Família | Peso / Estilo | Tracking / Entrelinha | Exemplo / Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **01 · Títulos** | **Poppins** | Light (300) com destaque em SemiBold (600) | Normal / `-0.015em` | `Do 3D à realidade: <span className="font-semibold text-[#63A4FF]">fidelidade milimétrica</span>` |
| **02 · Rótulos Técnicos** | **Poppins** | Medium (500) **Caixa Alta** | **Tracking aberto `0.22em`** | `0 1 · F U N D A Ç Ã O  D O  P R O J E T O` (classe `.rotulo-tecnico`) |
| **03 · Texto & Corpo** | **Inter** (ou Chivo em UI) | Light (300) para parágrafos; Regular (400) para ênfases | Entrelinha `1.6` | Descrições de projetos, memoriais descritivos e parágrafos. |

### Classes CSS Padronizadas:
```css
/* Rótulo Técnico Oficial */
.rotulo-tecnico {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #63A4FF;
}

/* Título Padrão */
.titulo-marca {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  letter-spacing: -0.015em;
  color: #FFFFFF;
}
.titulo-marca strong, .titulo-marca .destaque {
  font-weight: 600;
  color: #63A4FF;
}
```

---

## 📐 4. Logomarca e Símbolo

### 4.1 A Logomarca (`tentáculos ◉ lab`)
* **Construção**: Caixa baixa geométrica, branca e chapada.
* **O Símbolo ◉**: Substitui o espaço entre "tentáculos" e "lab". Ele faz parte da leitura fonética e visual, não sendo um enfeite avulso.
* **Área de Respiro**: Margem livre em todos os lados igual ao **diâmetro do símbolo ◉**. Nenhum texto ou elemento invade essa área.
* **Redução Mínima**:
  * Digital: `120 px` de largura.
  * Impresso: `30 mm`.
  * Abaixo disso: Usar somente o símbolo ◉ isolado.
* **Cor da Marca**: **Branca, sempre** (`#FFFFFF`) e 100% chapada sobre fundo escuro. Não existe versão colorida, com degradê, bisel ou contorno.
* **Ativo Oficial**: `/public/logo-white.png`.

### 4.2 O Símbolo (Os Anéis Concêntricos)
* **Conceito**: Alvo, lente óptica e onda acústica que se propaga.
* **Regra de Proporção**: Três anéis concêntricos com relação matemática fixa. Não afinar, não engrossar, não redesenhar.
* **Regra de Rotação**: O símbolo é radial — não existe versão girada ou inclinada.
* **Versão Chapada (Interface/Favicon)**: Branca sem volume, mínimo `24 px` (`/public/branding/simbolo-branco.png` e `/public/favicon.png`).
* **Versão 3D (Aberturas/Capas)**: Anéis cromados com eixos X/Y/Z (`/public/branding/simbolo-3d.jpg`).

---

## 🏗️ 5. Grafismos Técnicos da Marca

### 5.1 Barra de Topo de Luz (`.barra-topo-luz`)
* **Descrição**: Filete horizontal de **3px** com foco de luz azul no centro (`#4391FC`).
* **Uso**: Presente no topo fixo da tela em toda a interface do site.
```css
.barra-topo-luz {
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, #377BDB 25%, #4391FC 50%, #377BDB 75%, transparent 100%);
  box-shadow: 0 0 12px rgba(67, 145, 252, 0.6);
}
```

### 5.2 Card Chanfrado (`.card-chanfrado`)
* **Descrição**: Borda esquerda sólida de **3px** em Azul Estrutura (`#377BDB`) e **canto superior direito chanfrado (cortado) em 18px**.
* **Uso**: Elemento padrão para cards de projeto, metodologia e módulos técnicos.
```css
.card-chanfrado {
  background: #121D31;
  border-left: 3px solid #377BDB;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-chanfrado:hover {
  background: #1B283D;
  border-left-color: #63A4FF;
  box-shadow: 0 16px 36px -12px rgba(5, 13, 25, 0.85);
  transform: translateY(-2px);
}
```

### 5.3 Camada Blueprint (Textura Técnica de Fundo)
* **Descrição**: Desenhos técnicos de treliças (box truss), eixos e malhas de palco em wireframe.
* **Opacidade Obrigatória**: **Entre 20% e 30%**. Se competir com a leitura de texto, está forte demais.
* **Ativos Oficiais**: `/public/backgrounds/stage-truss-elevation.jpg`, `/public/backgrounds/truss-rigging-cad.jpg`.

---

## 🚫 6. Usos Indevidos (O que NUNCA fazer)

Conforme a página 9 do Manual de Identidade (`08 · Restrições`), as seguintes ações quebram o território da marca e **não possuem exceção editorial**:

| # | Restrição Proibitiva | Regra Estrita |
| :---: | :--- | :--- |
| 1 | ✕ **Distorcer** | Nunca esticar, comprimir ou inclinar a logomarca. |
| 2 | ✕ **Rosa / Degradês Coloridos** | Proibido qualquer tom de rosa, roxo ou degradês coloridos. O degradê é sempre azul-marinho. |
| 3 | ✕ **Efeitos sobre a Marca** | Proibido sombras projetadas duras, relevo, bisel ou contorno sobre a logomarca. |
| 4 | ✕ **Fundo Carregado** | A logomarca nunca fica sobre linhas ou fotos sem um escurecimento de contraste prévio. |
| 5 | ✕ **Recompor Logo** | Nunca trocar a tipografia do logo, separar as palavras ou retirar o símbolo ◉ central. |
| 6 | ✕ **Girar o Símbolo** | O símbolo ◉ é estritamente radial; nunca incliná-lo ou girá-lo. |
| 7 | ✕ **Excesso de Dourado** | Dourado é pontual (máx. 1 por página). Nunca pintar títulos ou blocos inteiros de dourado. |
| 8 | ✕ **Fonte Monoespaçada** | Nenhuma fonte mono no projeto. Rótulo técnico é **Poppins Caixa Alta**. |

---

## 💬 7. Ícone Oficial do WhatsApp

O ícone exclusivo homologado para contato direto com Lucas Castro:
* **Componente React**: `<WhatsAppIcon className="w-4 h-4 text-[#63A4FF]" />` em `src/components/icons/WhatsAppIcon.jsx`.
* **Ativo Estático**: `/public/whatsapp.svg`.
* **Link Oficial**: `https://wa.me/5511972629827`.

---

## 📝 8. Snippets Rápidos de Consulta para Desenvolvedores

### Cabeçalho de Seção:
```jsx
<div className="space-y-2">
  <span className="rotulo-tecnico block">
    0 1 · E S C O P O  T É C N I C O
  </span>
  <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
    Estrutura cenográfica: <span className="font-semibold text-[#63A4FF]">precisão executável</span>
  </h2>
  <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
    Memorial descritivo e espacialização 3D para montagens de alta complexidade.
  </p>
</div>
```

### Card de Conteúdo:
```jsx
<div className="card-chanfrado p-6 rounded-xl space-y-3">
  <span className="rotulo-tecnico text-[10px]">PALCOS & ARENAS</span>
  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    Estrutura Principal
  </h3>
  <p className="text-slate-300 text-xs font-light leading-relaxed">
    Detalhamento em alumínio estrutural Q30 com cálculo de sobrecarga de iluminação.
  </p>
</div>
```

### Botão de Ação Primário:
```jsx
<a
  href="https://wa.me/5511972629827"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-md"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  <WhatsAppIcon className="w-4 h-4" />
  <span>Solicitar Briefing</span>
</a>
```
