document.addEventListener("DOMContentLoaded", () => {
  const mostrarNotasBtn = document.getElementById("mostrarNotasBtn");

  const card = document.getElementById("musicCard");
  const noteTop = document.getElementById("noteTop");
  const noteMain = document.getElementById("noteMain");
  const noteBottom = document.getElementById("noteBottom");

  const levelButtons = document.querySelectorAll(".level-btn");

  // Decks
  const naturais = ["C", "D", "E", "F", "G", "A", "B"];
  const alteradas = ["C#", "D#", "F#", "G#", "A#", "Db", "Eb", "Gb", "Ab", "Bb"];

  const decks = {
    1: naturais,                    // nível 1: naturais
    2: alteradas,                   // nível 2: alteradas
    3: [...naturais, ...alteradas]  // nível 3: completo
  };

  // Cores base por natural (fixas)
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
  let ultimaCarta = null;

  function getBaseLetter(nota) {
    return nota[0]; // "D", "D#", "Db" -> "D"
  }

  function colorForNote(nota) {
    const base = getBaseLetter(nota);
    return baseColors[base] || "#4B2FA3";
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


  function aplicarNota(nota) {
    noteTop.textContent = nota;
    noteMain.textContent = nota;
    noteBottom.textContent = nota;

    card.style.setProperty("--card-color", colorForNote(nota));

    const isAlterada = nota.includes("#") || nota.includes("b");
    card.classList.toggle("alterada", isAlterada);

    setEmptyState(false);

    card.classList.remove("pop");
    void card.offsetWidth;
    card.classList.add("pop");
  }

  // ✅ Sorteia sem repetir em sequência
  function sortear() {
    const deck = decks[nivelAtual] || decks[1];
    if (!deck || deck.length === 0) return;

    // Se o deck tiver 1 carta, não tem como evitar repetição
    if (deck.length === 1) {
      ultimaCarta = deck[0];
      aplicarNota(deck[0]);
      return;
    }

    let choice;
    do {
      choice = deck[Math.floor(Math.random() * deck.length)];
    } while (choice === ultimaCarta);

    ultimaCarta = choice;
    aplicarNota(choice);
  }

  // ✅ Trocar nível NÃO sorteia (só ativa deck)
  function setNivel(n) {
    nivelAtual = n;

    levelButtons.forEach(btn => {
      btn.classList.toggle("active", Number(btn.dataset.level) === n);
    });

    // não sorteia ao trocar nível
    setEmptyState(true);
    ultimaCarta = null; // reseta pra não “bloquear” a primeira do novo deck
  }

  // Clique nos níveis
  levelButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      setNivel(Number(btn.dataset.level));
    });
  });

  // Botão sortear
  mostrarNotasBtn.addEventListener("click", sortear);

  // Inicia vazio e marca nível 1 ativo
  setEmptyState(true);
  levelButtons.forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.level) === 1);
  });

  // ---------- MODAL ----------
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
