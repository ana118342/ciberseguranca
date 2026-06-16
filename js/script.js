// fontes
// ===== FONTES (COM PERSISTÊNCIA) =====
function aumentarFonte() {
  document.documentElement.classList.remove("textoNormal", "diminuirTexto");
  document.documentElement.classList.add("aumentarTexto");

  localStorage.setItem("fonte", "grande");
}

function fonteNormal() {
  document.documentElement.classList.remove("aumentarTexto", "diminuirTexto");
  document.documentElement.classList.add("textoNormal");

  localStorage.setItem("fonte", "normal");
}

function diminuirFonte() {
  document.documentElement.classList.remove("textoNormal", "aumentarTexto");
  document.documentElement.classList.add("diminuirTexto");

  localStorage.setItem("fonte", "pequena");
}

// darkmode
function mudarTema() {
  document.documentElement.classList.toggle("darkmode")

  const ativo = document.documentElement.classList.contains("darkmode")

  // salva no navegador
  localStorage.setItem("tema", ativo ? "dark" : "light")

  const icone = document.querySelector(".material-symbols-outlined.mudarTema")

  if (!icone) return

  if (ativo) {
    icone.textContent = "light_mode"
  } else {
    icone.textContent = "dark_mode"
  }
}

// ===== RESTAURAR CONFIGURAÇÃO AO CARREGAR =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== RESTAURAR TEMA =====
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.documentElement.classList.add("darkmode");

    const icone = document.querySelector(".material-symbols-outlined.mudarTema");
    if (icone) {
      icone.textContent = "light_mode";
    }
  }

  // ===== RESTAURAR FONTE =====
  const fonteSalva = localStorage.getItem("fonte");

  if (fonteSalva === "grande") {
    document.documentElement.classList.add("aumentarTexto");
  }
  else if (fonteSalva === "pequena") {
    document.documentElement.classList.add("diminuirTexto");
  }
  else {
    document.documentElement.classList.add("textoNormal");
  }

});