document.addEventListener("DOMContentLoaded", function () {
  const revendas = [];

  window.fetchSvg = (image) => {
    fetch(image.src)
      .then((response) => response.text())
      .then((response) => {
        const span = document.createElement("span");
        span.innerHTML = response;
        const inlineSvg = span.getElementsByTagName("svg")[0];
        image.parentNode.replaceChild(inlineSvg, image);
        return true;
      })
      .then(() => {
        getActions();
      });
  };

  function getActions() {
    const states = document.getElementsByClassName("estado");
    for (let i = 0; i < states.length; i++) {
      states[i].onclick = () => {
        stateClicked(states[i]);
      };
    }
    getRevendas();
  }

  function getRevendas() {
    fetch("../../../revendas.json")
      .then((response) => response.text())
      .then((response) => {
        revendas.push(...JSON.parse(response));
      });
  }

  function stateClicked(state) {
    const code = state.getAttribute("code");
    const uf = revendas.find((estado) => estado.code === code);

    if (!uf) return;
    fillContent(uf);
  }

  function fillContent(uf) {
    const states = document.getElementById("estado");
    const name = document.getElementById("nome");
    const number = document.getElementById("numero");

    states.innerText = `${uf.estado.toUpperCase()} (${uf.sigla.toUpperCase()})`;
    name.innerHTML = uf.nome.join("<br>");
    number.innerHTML = uf.numero.join("<br>");
  }

  fetchSvg(document.querySelector(".mapa-img img"));
});
