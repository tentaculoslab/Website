# 🎨 Design System Oficial — Tentáculos Lab
> Baseado no **Manual de Identidade Visual Oficial** (`Tentaculos-Lab-Manual-de-Identidade.pdf`).  
> Para o guia técnico detalhado da marca, consulte também [docs/BRAND_IDENTITY_MANUAL.md](BRAND_IDENTITY_MANUAL.md).

---

## 🏛️ 1. Hierarquia Tipográfica

A diferenciação entre níveis de informação prioriza o **peso da fonte** (`font-light` 300 vs `font-semibold` 600) e a **paleta oficial de azul destaque** (`#63A4FF`), em vez de aumentar desmedidamente o tamanho dos caracteres.

> ✕ **RESTRIÇÃO ABSOLUTA**: Nenhuma fonte monoespaçada (`font-mono`) entra em material da marca. Rótulos técnicos são sempre Poppins em caixa alta.

| Nível de Informação | Família Tipográfica | Peso | Cor (Tokens Oficiais) | Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **Títulos Principais** | **Poppins** | Light (300) | `#FFFFFF` com 1 palavra em `#63A4FF` (SemiBold 600) | Título de seções e hero |
| **Rótulos Técnicos** | **Poppins Caixa Alta** | Medium (500) | `#63A4FF` (Tracking `.22em`) | Numeração (`01 ·`), badges e etiquetas |
| **Texto de Apoio** | **Inter** | Light (300) | `#cbd5e1` / Slate 300 (Entrelinha `1.6`) | Parágrafos explicativos |
| **Texto de Corpo / Ênfase**| **Inter** | Regular (400) | `#FFFFFF` / Slate 200 | Dados técnicos e termos essenciais |

---

## 🌬️ 2. Espaçamento & Whitespace

* **Regra do Espaçamento Duplo**: A interface deve respirar amplamente para refletir o caráter executivo e cênico das grandes produções:
  * Seções principais: `py-24 sm:py-32`
  * Distância entre grupos distintos: `space-y-12`, `gap-8` a `gap-12`
  * Agrupamento estreito (Gestalt): `space-y-1.5` ou `space-y-2` entre rótulo e título.

---

## 💎 3. Superfícies & Cores Oficiais

* **Fundos**:
  * Base principal: `#0A1326` (Azul-petróleo sólido).
  * Profundidade e vinhetas: `#050D19`.
  * Superfícies e Cards: `#121D31` (Superfície 2) com hover em `#1B283D` (Superfície).
* **Grafismos Homologados**:
  * **Barra de Topo (`.barra-topo-luz`)**: 3px com centro em `#4391FC`.
  * **Card Chanfrado (`.card-chanfrado`)**: Borda esquerda 3px em `#377BDB` e chanfro de 18px no topo direito.
  * **Camada Blueprint**: Textura de rigging/CAD entre 20% e 30% de opacidade.
  * **Dourado (`#E9B65C`)**: Máximo 1 por página.

---

## 🚫 4. Regras Proibitivas

1. ✕ **Nenhum tom de rosa** ou degradês coloridos.
2. ✕ **Nenhuma fonte monoespaçada**.
3. ✕ **Nunca distorcer** a logomarca `tentáculos ◉ lab`.
4. ✕ **Nunca usar mais de um acento dourado** por página.
