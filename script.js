// Ano no rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Accordion
const accordionContainer = document.getElementById('accordion-container');
if (accordionContainer) {
  const accordionItems = accordionContainer.getElementsByClassName('accordion-item');
  for (let i = 0; i < accordionItems.length; i++) {
    const header = accordionItems[i].querySelector('.accordion-header');
    const content = accordionItems[i].querySelector('.accordion-content');
    const icon = header.querySelector('svg');

    header.addEventListener('click', () => {
      for (let j = 0; j < accordionItems.length; j++) {
        if (accordionItems[j] !== accordionItems[i]) {
          const otherContent = accordionItems[j].querySelector('.accordion-content');
          const otherIcon = accordionItems[j].querySelector('.accordion-header svg');
          otherContent.style.maxHeight = null;
          otherIcon.classList.remove('rotate-180');
        }
      }
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-180');
      }
    });
  }
}

// Forms (Contato e Depoimento)
function handleFormSubmit(formId, feedbackId, successMessage) {
  const form = document.getElementById(formId);
  const feedbackDiv = document.getElementById(feedbackId);
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      feedbackDiv.innerHTML = `<p class="text-green-600 font-semibold">${successMessage}</p>`;
      feedbackDiv.classList.add('p-3', 'rounded-lg', 'bg-green-100');
      form.reset();
      setTimeout(() => {
        feedbackDiv.innerHTML = '';
        feedbackDiv.classList.remove('p-3', 'rounded-lg', 'bg-green-100');
      }, 5000);
    });
  }
}

handleFormSubmit('testimonial-form', 'form-feedback-depo', 'Obrigado! Seu depoimento foi enviado para análise.');
handleFormSubmit('contact-form', 'form-feedback-contato', 'Mensagem enviada com sucesso! Em breve entrarei em contato.');
