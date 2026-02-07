    document.addEventListener("DOMContentLoaded", () => {
    const SENHA = "professores2026";

    const inputSenha = document.getElementById("senha");
    const btnEntrar = document.querySelector(".login-btn");
    const erro = document.querySelector(".login-error");

    // Se já estiver logado na sessão, manda para index
    if (sessionStorage.getItem("harmonica_logado") === "true") {
        window.location.href = "index.html";
        return;
    }

    function validarLogin() {
        const senhaDigitada = (inputSenha.value || "").trim();

        if (senhaDigitada === SENHA) {
        sessionStorage.setItem("harmonica_logado", "true");
        sessionStorage.setItem("harmonica_login_time", String(Date.now()));

        window.location.href = "index.html";
        } else {
        erro.style.display = "block";
        inputSenha.value = "";
        inputSenha.focus();
        }
    }

    btnEntrar.addEventListener("click", validarLogin);

    inputSenha.addEventListener("keydown", (e) => {
        if (e.key === "Enter") validarLogin();
    });
    });
