/**test botão*/

  const btnVoltar = document.getElementById('btn-voltar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnVoltar.style.display = 'block';
    } else {
      btnVoltar.style.display = 'none';
    }
  });
  btnVoltar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

