// Botão de enviar mensagem
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  });
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
