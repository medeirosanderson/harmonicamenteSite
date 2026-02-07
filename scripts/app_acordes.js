    document.addEventListener("DOMContentLoaded", () => {
    const sortearBtn = document.getElementById("mostrarNotasBtn");

    const card = document.getElementById("musicCard");
    const topEl = document.getElementById("noteTop");
    const mainEl = document.getElementById("noteMain");
    const bottomEl = document.getElementById("noteBottom");

    const levelButtons = document.querySelectorAll(".level-btn");

    // Bases naturais (raiz dos acordes)
    const bases = ["C", "D", "E", "F", "G", "A", "B"];

    // Nível 1: maiores, menores e diminutos (cartas individuais)
    const deckNivel1 = [
        ...bases,                    // X
        ...bases.map(n => n + "m"),  // Xm
        ...bases.map(n => n + "º")   // Xº
    ];

    // Nível 2: acordes com 7
    // X7M, Xm7, X7, Xm7M, Xm7(b5)
    const deckNivel2 = [
        ...bases.map(n => n + "7M"),       // X7M
        ...bases.map(n => n + "m7"),       // Xm7
        ...bases.map(n => n + "7"),        // X7
        ...bases.map(n => n + "m7M"),      // Xm7M
        ...bases.map(n => n + "m7(b5)")    // Xm7(b5)
    ];

    // ---------------------------------------
    // Nível 3: inversões (1ª e 2ª) de maiores e menores
    // Formato: X/baixo e Xm/baixo
    // Obs: tríades têm 2 inversões; 3ª inversão só em acordes com 7.
    // ---------------------------------------
    const triads = {
        C: { maj: { third: "E",  fifth: "G"  }, min: { third: "Eb", fifth: "G"  } },
        D: { maj: { third: "F#", fifth: "A"  }, min: { third: "F",  fifth: "A"  } },
        E: { maj: { third: "G#", fifth: "B"  }, min: { third: "G",  fifth: "B"  } },
        F: { maj: { third: "A",  fifth: "C"  }, min: { third: "Ab", fifth: "C"  } },
        G: { maj: { third: "B",  fifth: "D"  }, min: { third: "Bb", fifth: "D"  } },
        A: { maj: { third: "C#", fifth: "E"  }, min: { third: "C",  fifth: "E"  } },
        B: { maj: { third: "D#", fifth: "F#" }, min: { third: "D",  fifth: "F#" } }
    };

    function buildInversionDeck() {
        const deck = [];
        for (const root of bases) {
        const maj = triads[root].maj;
        const min = triads[root].min;

        // Maior: 1ª e 2ª inversão
        deck.push(`${root}/${maj.third}`);
        deck.push(`${root}/${maj.fifth}`);

        // Menor: 1ª e 2ª inversão
        deck.push(`${root}m/${min.third}`);
        deck.push(`${root}m/${min.fifth}`);
        }
        return deck;
    }

    const deckNivel3 = buildInversionDeck();

    const decks = { 1: deckNivel1, 2: deckNivel2, 3: deckNivel3 };

    // Cores base (sempre pela letra do acorde, sem importar o sufixo)
    const baseColors = {
        C: "#2E7380",
        D: "#4B2FA3",
        E: "#13ca44",
        F: "#7A3E2D",
        G: "#baae02",
        A: "#5B2F47",
        B: "#e28616"
    };

    let nivelAtual = 1;
    let ultimaCarta = null; // ✅ faltava

    function getBaseLetter(chord) {
        // "Dm7(b5)" -> "D" | "Dm/F" -> "D"
        return chord[0];
    }

    function colorForChord(chord) {
        return baseColors[getBaseLetter(chord)] || "#4B2FA3";
    }

    function setEmptyState(isEmpty) {
    card.classList.toggle("is-empty", isEmpty);

    if (isEmpty) {
        noteTop.textContent = "";
        noteMain.textContent = "";
        noteBottom.textContent = "";

        card.classList.remove("compact");
        card.classList.remove("compact2");

        // ✅ RESETAR COR DA CARTA
        card.style.setProperty("--card-color", "#3f2e12"); 
    }
    }


    function applyChord(chord) {
        topEl.textContent = chord;
        mainEl.textContent = chord;
        bottomEl.textContent = chord;

        card.style.setProperty("--card-color", colorForChord(chord));

        // Ajuste automático de fonte
        const len = chord.length;
        const isSlash = chord.includes("/");

        card.classList.toggle("compact", len >= 2 || isSlash);
        card.classList.toggle("compact2", len >= 5 || isSlash);

        setEmptyState(false);

        card.classList.remove("pop");
        void card.offsetWidth;
        card.classList.add("pop");
    }

    // ✅ Sorteia sem repetir em sequência
    function sortear() {
        const deck = decks[nivelAtual] || decks[1];
        if (!deck || deck.length === 0) return;

        if (deck.length === 1) {
        ultimaCarta = deck[0];
        applyChord(deck[0]);
        return;
        }

        let choice;
        do {
        choice = deck[Math.floor(Math.random() * deck.length)];
        } while (choice === ultimaCarta);

        ultimaCarta = choice;
        applyChord(choice);
    }

    // ✅ Trocar nível NÃO sorteia (só ativa deck)
    function setNivel(n) {
        nivelAtual = n;

        levelButtons.forEach(btn => {
        btn.classList.toggle("active", Number(btn.dataset.level) === n);
        });

        setEmptyState(true);
        ultimaCarta = null; // reseta a trava de repetição para o novo deck
    }

    // ✅ Clique nos níveis (faltava no seu código)
    levelButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        setNivel(Number(btn.dataset.level));
        });
    });

    // Botão sortear
    sortearBtn.addEventListener("click", sortear);

    // Inicia vazio e marca nível 1 ativo
    setEmptyState(true);
    levelButtons.forEach(btn => {
        btn.classList.toggle("active", Number(btn.dataset.level) === 1);
    });

    // Modal (se você estiver usando na página de acordes também)
    const infoLink = document.getElementById("infoNiveis");
    const modal = document.getElementById("modalNiveis");
    const fecharModal = document.getElementById("fecharModal");

    if (infoLink && modal && fecharModal) {
        infoLink.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        });

        fecharModal.addEventListener("click", () => {
        modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
        });
    }
    });
