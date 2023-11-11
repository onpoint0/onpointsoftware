   const faqItems = document.querySelectorAll('.faq-item');

   faqItems.forEach(faqItem => {
       // Agrega un evento de escucha para el clic
       faqItem.addEventListener('click', () => {
           // Alternar la clase "open" en el elemento actual, lo que muestra u oculta la respuesta
           faqItem.classList.toggle('open');
       });
   });
           