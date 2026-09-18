# 🚀 Fluxo de Trabalho, Git e Deploy — Tentáculos Lab

Este documento descreve as práticas recomendadas de versionamento Git, segurança e publicação contínua para o website do **Tentáculos Lab**.

---

## 🌿 1. Estratégia de Branches no Git

* **Branch Principal de Trabalho**: **`Website`**
  * Toda a implementação, testes e novos recursos são desenvolvidos diretamente na branch `Website`.
  * A branch remota está sincronizada em `origin/Website`.
* **Branch `main`**:
  * Mantida separada e isolada conforme diretriz do projeto.

### Comandos de Trabalho Diário:
```powershell
# 1. Garantir que está na branch correta
git checkout Website

# 2. Verificar status de arquivos modificados
git status

# 3. Adicionar arquivos alterados
git add .

# 4. Criar commit descritivo
git commit -m "docs: adiciona diretrizes mobile-first e arquitetura"

# 5. Enviar alterações para o repositório remoto
git push origin Website
```

---

## 🛡️ 2. Política de Segurança e Arquivos Ignorados

O arquivo `.gitignore` foi configurado para bloquear a inclusão acidental de arquivos que possam comprometer a segurança ou o desempenho do repositório:

| Arquivo / Padrão | Motivo do Bloqueio |
| :--- | :--- |
| `Credenciais.txt` | **Segurança Crítica**: credenciais e senhas jamais devem ser versionadas em repositórios públicos ou privados. |
| `*.skp` | **Limite de Tamanho do GitHub**: arquivos de modelagem SketchUp (como `Casa do Papai Noel.skp`, 131 MB) excedem o limite de 100 MB do GitHub. |
| `*.pdf` | Documentos comerciais ou propostas particulares que não pertencem ao código-fonte. |
| `node_modules/` | Dependências instaladas localmente pelo Bun. |
| `dist/` | Pasta gerada em tempo de compilação/build. |
| `.env*` | Variáveis de ambiente secretas. |

---

## 🏗️ 3. Processo de Build

O build de produção é realizado pelo Vite e otimizado pelo Bun:

```powershell
bun run build
```

O comando gera a pasta estática `dist/` contendo:
* `dist/index.html`: Ponto de entrada HTML minificado com metadados de SEO pré-configurados.
* `dist/assets/*.css`: Folha de estilo consolidada com Tailwind CSS v4.
* `dist/assets/*.js`: Chunks JavaScript minificados com tree-shaking do Three.js e React 19.

---

## 🌐 4. Opções de Hospedagem e Deploy Contínuo

Como a aplicação é compilada como um pacote de arquivos estáticos de altíssima performance, ela pode ser publicada em qualquer provedor moderno:

### Opção A: Vercel (Recomendada)
1. Conectar a conta do GitHub ao Vercel.
2. Selecionar o repositório `tentaculoslab/Website`.
3. Escolher a branch de produção: **`Website`**.
4. O framework **Vite** será detectado automaticamente:
   * **Build Command**: `bun run build` (ou `npm run build`)
   * **Output Directory**: `dist`

### Opção B: Netlify
* **Build Command**: `bun run build` (ou `npm run build`)
* **Publish Directory**: `dist`
* **Production Branch**: `Website`

### Opção C: Cloudflare Pages
* Framework Preset: **Vite**
* Build Output Directory: `dist`
* Production Branch: `Website`
