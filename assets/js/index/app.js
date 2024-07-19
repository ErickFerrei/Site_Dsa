const hamburgerBtn = document.querySelector(".hamburger-btn");
const navItems = document.querySelector(".nav-item");
// Ao clicar no hamburgerBtn, a classe show é adicionada ou removida (alternada) do elemento navItems.
// Isso é feito usando o método classList.toggle(). Isso geralmente é usado para mostrar ou esconder o menu de navegação.
hamburgerBtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
  hamburgerBtn.classList.toggle("active");
});

const supportBtn = document.getElementById("support");
const supportOptions = document.getElementById("support-options");

supportBtn.addEventListener("click", () => {
  supportOptions.classList.toggle("show");
});

// Efeito de digitação quando inicia a pagina

document.addEventListener("DOMContentLoaded", (event) => {
  const words = ["AUTOMAÇÃO.", "INOVAÇÃO.", "TECNOLOGIA."];
  let i = 0;
  const typingEffect = document.getElementById("typing-effect");

  function typeWord(word) {
    let charIndex = 0;
    const typingSpeed = 100; // Speed in ms

    function type() {
      if (charIndex < word.length) {
        typingEffect.textContent += word.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          deleteWord(word);
        }, 3000);
      }
    }
    type();
  }

  function deleteWord(word) {
    let charIndex = word.length;

    function deleteChar() {
      if (charIndex > 0) {
        typingEffect.textContent = word.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteChar, 50);
      } else {
        i = (i + 1) % words.length;
        setTimeout(() => {
          typeWord(words[i]);
        }, 500);
      }
    }
    deleteChar();
  }

  typeWord(words[i]);
});

// locomotive scroll
// gsap.registerPlugin(ScrollTrigger);
// const Scrolle = document.querySelector(".container");

// const scroll = new LocomotiveScroll({
//    el: Scrolle,
//   smooth: true,
// });

// scroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(Scrolle, {
//   scrollTop(value){
//     return arguments.length
//     ? scroll.scrollTop(value, 0 , 0)
//     : sroll.scroll.instance.scroll.y
//   },
//   getBoundingClientRect(){
//     return{
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     }
//   },
//   pinType: Scrolle.computedStyleMap.transform ? "transform" : "fixed"
// });

// EFEITO DOS CARDS "SEGMENTOS"
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const sectionSegmentos = document.querySelector(".segmentos");
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  const card3 = document.querySelector(".card3");
  const card4 = document.querySelector(".card4");
  const card5 = document.querySelector(".card5");
  const card6 = document.querySelector(".card6");

  //INICIO DA FUNCTION
  function startAnimation(elem, xPosition) {
    gsap.to(elem, {
      opacity: 1,
      x: xPosition,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionSegmentos,
        start: "top center",
        end: "bottom center",
        // scrub: true
      },
    });
  }
  //FIM DA FUNCTION

  startAnimation(card1, 0);
  startAnimation(card2, 0);
  startAnimation(card3, 0);
  startAnimation(card4, 0);
  startAnimation(card5, 0);
  startAnimation(card6, 0);

  //EFEITO DO CELULAR "METRICAS"

  const sectionMetricas = document.querySelector(".metricas-cell");

  const cardText = document.querySelector(".metricas-text");
  const cardImg = document.querySelector(".metricas-img");

  function startAnimationMet(elem, xPosition) {
    gsap.to(elem, {
      opacity: 1,
      x: xPosition,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionMetricas,
        start: "top center",
        end: "bottom center",
        // markers: true
        // scrub: true
      },
    });

    gsap.to(elem, {
      opacity: 1,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionMetricas,
        start: "top center",
        end: "bottom center",
        // markers: true
        // scrub: true
      },
    });
  }
  startAnimationMet(cardText, 0);
  startAnimationMet(cardImg, 0);
});

//BUTTON QUE VAI PARA CIMA "VOLTAR PARA CIMA"

const backToTopButton = document.getElementById("back-to-top");

// Mostra o botão quando o usuário rola 20px para baixo
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Função para rolar para o topo da página
backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.body.style.overflow = "hidden";
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 3.5,
    onComplete: () => {
      // Quando a animação terminar, esconder a página de carregamento
      document.querySelector(".loading-page").classList.add("loading-hidden");
      // Permitir o scroll novamente
      document.body.style.overflow = "";
    },
  }
);
gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
