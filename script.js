//    Menu
   const botaoMenu = document.getElementById('mobile-menu');
        const listaLinks = document.getElementById('lista-links');

        botaoMenu.addEventListener('click', () => {
            // Alterna a classe 'ativo' que mostra/esconde o menu
            listaLinks.classList.toggle('ativo');
        });


        // Carrossel
        let currentIndex = 0;
const itemsVisible = 2; // Quantas imagens aparecem por vez

// Seleciona todas as imagens (items) automaticamente
const allItems = document.querySelectorAll('.carousel-item');
const totalItems = allItems.length;

// O máximo que podemos descer
const maxIndex = totalItems - itemsVisible;

function moveCarousel(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const translateY = -(currentIndex * 50);
  
  const track = document.getElementById('track');
  track.style.transform = `translateY(${translateY}%)`;

  updateButtons();
}

function updateButtons() {
  document.getElementById('btn-prev').disabled = (currentIndex === 0);
  
  // Se tiver poucas imagens e não der pra rolar, desabilita o botão
  document.getElementById('btn-next').disabled = (currentIndex >= maxIndex);
}

updateButtons();


// VALORES

    function setCycle(cycle) {
      const btnMonthly = document.getElementById('btn-monthly');
      const btnAnnual = document.getElementById('btn-annual');
      const periodTexts = document.querySelectorAll('.price-period');

      if (cycle === 'monthly') {
        btnMonthly.classList.add('active');
        btnAnnual.classList.remove('active');
        periodTexts.forEach(el => el.textContent = '/ingresso');
      } else {
        btnAnnual.classList.add('active');
        btnMonthly.classList.remove('active');
        periodTexts.forEach(el => el.textContent = '/plano');
      }

      const amounts = document.querySelectorAll('.amount');
      amounts.forEach(amount => {
        const price = amount.getAttribute(`data-${cycle}`);
        amount.textContent = price;
      });
    }

    
document.addEventListener('DOMContentLoaded', () => {
    const shinyElements = document.querySelectorAll('.jurassic-giant');

    shinyElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const { left, width } = element.getBoundingClientRect();
            const xPos = (e.clientX - left) / width;
            const bgPosition = xPos * 100 - 50;

            element.style.backgroundPosition = `${bgPosition}% center`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.backgroundPosition = 'center';
        });
    });
});