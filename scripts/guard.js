    (function () {
    // ⏱️ tempo de sessão (ex: 2 horas)
    const DURACAO_LOGIN = 2 * 60 * 60 * 1000;

    // ✅ evita qualquer chance de loop se alguém por engano incluir guard no login
    const path = (window.location.pathname || "").toLowerCase();
    if (path.endsWith("login.html")) return;

    const logado = sessionStorage.getItem("harmonica_logado");
    const loginTime = sessionStorage.getItem("harmonica_login_time");

    if (logado !== "true" || !loginTime) {
        window.location.href = "login.html";
        return;
    }

    const tempoPassado = Date.now() - Number(loginTime);

    if (tempoPassado > DURACAO_LOGIN) {
        sessionStorage.removeItem("harmonica_logado");
        sessionStorage.removeItem("harmonica_login_time");
        window.location.href = "login.html";
    }
    })();
