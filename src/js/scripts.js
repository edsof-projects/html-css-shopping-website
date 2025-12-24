import { scrollSmoot } from './scrollSmoot.js';
import { scrollToTop } from './scrollsToTop.js'

const btnVoltar = document.getElementById('area__imgVoltar');
const btnBurger = document.getElementById('btnBurger');
const nav       = document.getElementById('nav');
const line1     = document.querySelector('.line1')
const line2     = document.querySelector('.line2')
const body      = document.body;
const footer    = document.querySelector('.footer')

// Troca a imagem do botão Burger quado o mesmo recebe o click
btnBurger.addEventListener('click', () => {
  nav  .classList.toggle('active');
  line1.classList.toggle('ativo1')
  line2.classList.toggle('ativo2') 
  body .classList.toggle('no-scroll');  
});

// Efeito ao clicar em um link do nav
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const alvo = document.querySelector(this.getAttribute('href'));
    if (!alvo) return; // evita erro se o alvo não existir

    const destinoY = alvo.getBoundingClientRect().top + window.pageYOffset - 70; // ajuste do header fixo

    scrollSmoot(destinoY, 2500);
    /* 2500ms = 2.5 segundos (bem lento)
      Valor	Velocidade
      800	rápido
      1200	suave
      2000	lento
      2500	bem lento
      3500	muito lento
      5000	super cinematográfico
    */
  });
});

//Quando começar a rolar a pagina mostrar o botao de voltar ao topo
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    btnVoltar.classList.add("showBtnVoltar");
  } else {
    btnVoltar.classList.remove("showBtnVoltar");
  }
});

//Quando clicar no botao de voltar ao topo ir para o topo lentamente
btnVoltar.addEventListener("click", () => {
  scrollToTop(5000); // tempo da animação em ms (aqui: 800ms)
});

//Fica observando qual section esta setada pelo mouse se for footer  troca a cor 
//da imagem do botao que leva ao topo isso porque o footer tem o bg-black
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btnVoltar.classList.add("opacityBtn");
    }else{
      btnVoltar.classList.remove("opacityBtn");
    }
  });
}, { threshold: 0.2 });

observer.observe(footer);

const topo = document.querySelector('.header');

window.addEventListener('scroll', () => {
  topo.classList.toggle('topo--blur', window.scrollY > 30);
});
