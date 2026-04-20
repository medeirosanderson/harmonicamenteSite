🎵 Harmonicamente
Projeto web interativo focado no aprendizado musical através de prática
e visualização, utilizando baralhos musicais para treinar reconhecimento
de notas e acordes.
---
🚀 Sobre o projeto
O Harmonicamente foi criado com o objetivo de tornar o estudo de
música mais prático, visual e dinâmico.
A aplicação permite que o usuário:
Treine notas musicais
Treine acordes
Pratique em diferentes níveis de dificuldade
Use um sistema visual baseado em cartas musicais
---
🧠 Conceito
A ideia principal é simular um baralho musical, onde cada carta
representa um elemento da teoria musical.
O usuário pode:
Gerar cartas aleatórias
Identificar notas/acordes
Evoluir por níveis:
Iniciante
Intermediário
Avançado
---
🛠️ Tecnologias utilizadas
HTML5
CSS3 (modularizado)
JavaScript (Vanilla)
---
📁 Estrutura do projeto
    harmonicamenteSite/
    │
    ├── index.html
    ├── baralho.html
    ├── baralhonotas.html
    ├── baralhoharmonico.html
    │
    ├── scripts/
    │   ├── app.js
    │   ├── app_acordes.js
    │   └── guard.js
    │
    ├── styles/
    │   ├── base/
    │   │   ├── reset.css
    │   │   ├── typography.css
    │   │   └── variables.css
    │   │
    │   ├── layout/
    │   │   └── app-shell.css
    │   │
    │   ├── components/
    │   │   ├── buttons.css
    │   │   ├── cards.css
    │   │   ├── modal.css
    │   │   └── login.css
    │   │
    │   ├── pages/
    │   │   ├── home.css
    │   │   ├── baralho.css
    │   │   ├── notas.css
    │   │   └── acordes.css
    │   │
    │   └── img/
    │       └── (imagens do projeto)

---
🎯 Arquitetura CSS
O projeto segue uma divisão modular:
Base
Arquivos globais: - reset - tipografia - variáveis
Layout
Responsável pela estrutura compartilhada: - fundo - containers
principais - organização geral
Arquivo: `styles/layout/app-shell.css`
Components
Componentes reutilizáveis: - Botões - Cartas - Modal - Login
Pages
Estilos específicos por página: - home.css - baralho.css - notas.css -
acordes.css
---
⚠️ Padrões importantes
Separação de responsabilidades
Layout global NÃO deve ficar em pages
Pages NÃO devem repetir estrutura
Uso de modificadores
    .bloco
    .bloco--modificador

Exemplo:
    .main-content-wrapper
    .main-content-wrapper--home
    .main-content-wrapper--baralho

---
🧩 Scripts
app.js → baralho de notas
app_acordes.js → baralho de acordes
guard.js → controle de navegação
---
📌 Estado atual
✔ Estrutura modular implementada  
✔ Layout compartilhado centralizado  
✔ Componentes reutilizáveis definidos  
⚠ Ajustes visuais ainda em andamento
---
🛠️ Próximos passos
Ajustar alinhamento visual
Padronizar nomes
Melhorar responsividade
Limpar código não utilizado
---
👨‍💻 Autor
Anderson Medeiros
---
📄 Licença
Projeto para fins educacionais.