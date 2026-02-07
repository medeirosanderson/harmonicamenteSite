# 🎼 Harmônica — Baralho Musical Interativo

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-F7DF1E?logo=javascript&logoColor=black)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-No_Framework-FFE082)
![Education](https://img.shields.io/badge/Purpose-Music_Education-6A1B9A)
![Status](https://img.shields.io/badge/Status-In_Development-orange)


Aplicação web interativa desenvolvida para auxiliar estudantes de música no treino de leitura musical, cifras e harmonia de forma gamificada.

O projeto funciona como um **baralho digital**, onde cartas são sorteadas aleatoriamente para estudo de:

- Notas musicais  
- Acordes  
- Inversões  

---

## 🚀 Funcionalidades

### 🎵 Baralho de Notas

**Nível 1 — Notas naturais**  
C, D, E, F, G, A, B  

**Nível 2 — Notas alteradas**  
Sustenidos e bemóis  

**Nível 3 — Completo**  
Naturais + alteradas  

**Recursos implementados:**

- ✔ Sorteio aleatório  
- ✔ Anti-repetição em sequência  
- ✔ Cor dinâmica por nota  
- ✔ Carta inicia vazia  

---

### 🎹 Baralho de Acordes

#### Nível 1 — Tríades
- Maiores → X  
- Menores → Xm  
- Diminutos → Xº  

#### Nível 2 — Acordes com 7
- X7M  
- Xm7  
- X7  
- Xm7M  
- Xm7(b5)  

#### Nível 3 — Inversões
- 1ª inversão  
- 2ª inversão  
- Formato Slash Chord → X/baixo  

**Exemplos:**
- C/E  
- D/F#  
- Am/C  
- Gm/Bb  

**Recursos implementados:**

- ✔ Cor mantém a nota base  
- ✔ Tipografia adaptativa  
- ✔ Sorteio anti-repetição  

---

## 🧠 Lógicas implementadas

- Sorteio aleatório com `Math.random()`
- Sistema anti-repetição de cartas
- Controle de estado por nível
- Manipulação dinâmica do DOM
- Alteração de CSS via JavaScript
- CSS Variables dinâmicas
- Modal explicativo de níveis
- Reset visual ao trocar de nível

---

## 🎨 Design e UI

- Carta única reutilizável
- Cor dinâmica baseada na nota/acorde
- Marca d’água personalizada
- Tipografia responsiva
- Identidade visual baseada em caderno musical
- Modal central estilizado

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla / ES6+)**

Sem uso de frameworks — foco em fundamentos de front-end e lógica de programação.

---

## 📂 Estrutura do projeto

```
harmonica-baralho/
│
├── index.html
├── baralhonotas.html
├── baralhoacordes.html
│
├── styles/
│   ├── stylebaralho.css
│   └── img/
│       ├── logo.png
│       ├── blocodenotas.png
│       └── HOME.jpg
│
├── scripts/
│   ├── app_notas.js
│   └── app_acordes.js
│
└── README.md
```

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/harmonica-baralho.git
```

2. Abra a pasta do projeto

3. Execute o arquivo:

```
index.html
```

em qualquer navegador moderno.

---

## 📚 Objetivo educacional

Este projeto foi criado para auxiliar estudantes de música no estudo de:

- Leitura de notas  
- Identificação de cifras  
- Construção de acordes  
- Harmonia básica  
- Inversões  

A proposta é transformar o estudo em uma experiência interativa e visual, semelhante a um jogo de cartas.

---

## 🔮 Roadmap (próximas melhorias)

- Nível avançado de inversões com acordes de 7  
- Sistema de temporizador de estudo  
- Modo quiz / desafio  
- Sistema de pontuação  
- Reprodução sonora das notas/acordes  
- Versão mobile otimizada  
- Personalização de decks  
- Integração com MIDI / teclado virtual  

---

## 👨‍💻 Autor

Desenvolvido por **Anderson Medeiros**

Projeto educacional que une tecnologia e música para facilitar o aprendizado harmônico de forma prática e interativa.

---

## 📜 Licença

Uso livre para fins educacionais e pessoais.

Sinta-se à vontade para estudar, modificar e evoluir o projeto.
