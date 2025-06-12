const select = document.getElementById('nombre');
const mensaje = document.getElementById('mainMessage');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const body = document.body;
const cover = document.getElementById('cover');
const containerLetter = document.querySelector('.container-letter');

const saludos = {
  'Vicenta': 'Querida Suegra',
  'Lenny': 'Querida Cuñada Lenny',
  'Rocio': 'Querida Cuñada Rocio',
  'Karina': 'Querida Cuñada Karina',
  'Menly': 'Querida Cuñada Menly',
  'Vilma': 'Querida Concuñada Vilma',
  'Grisel': 'Querida Sobrina Grisel',
  'Ceci': 'Querida Sobrina Ceci',
  'Belén': 'Querida Sobrina Belén',
  'Niche': 'Querida Sobrina Niche',
  'Gaby': 'Querida Sobrina Gaby'
};

select.addEventListener('change', () => {
  const nombre = select.value;

  if (saludos[nombre]) {
    openBtn.disabled = false;
   
    mensaje.innerHTML = `
      ${saludos[nombre]},<br><br>
      ¡Estás invitada a celebrar el cumpleaños de Raquel!<br>
      Vení a compartir una noche especial llena de alegría, amistad y buenos momentos.<br>
      <b>Fecha:</b> 15 de Junio, 20:00 hs<br>
      <b>Lugar:</b> Calle Chochi Frente al Club de Tenis<br>
      ¡Te esperamos para festejar juntos!
    `;
  } else {
    mensaje.innerHTML = `
      ¡Estás invitada a celebrar el cumpleaños de Raquel!<br>
      Vení a compartir una tarde especial llena de alegría, amistad y buenos momentos.<br>
      <b>Fecha:</b> 15 de Junio, 20:00 hs<br>
      <b>Lugar:</b> Calle Chochi Frente al Club de Tenis<br>
      ¡Te esperamos para festejar juntos!
    `;
    openBtn.disabled = true;
    body.style.background = '#ffe4ec';
  }
});

openBtn.addEventListener('click', () => {
  cover.classList.add('opened');
  containerLetter.classList.add('opened'); // Aquí para mostrar el mensaje
  openBtn.disabled = true;
  closeBtn.disabled = false;
  select.disabled = true;
});

closeBtn.addEventListener('click', () => {
  cover.classList.remove('opened');
  containerLetter.classList.remove('opened'); // Aquí para ocultar el mensaje
  closeBtn.disabled = true;
  select.disabled = false;

  if (select.value) {
    openBtn.disabled = false;
  }
});
