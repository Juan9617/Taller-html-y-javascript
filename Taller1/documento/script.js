// Obtener los botones del menú y agregar los eventos
const btnInicio = document.querySelector('nav ul li:first-of-type');
const btnImagenes = document.querySelector('nav ul li:nth-of-type(2)');
const btnComentarios = document.querySelector('nav ul li:last-of-type');
const main = document.querySelector('main');

btnInicio.addEventListener('click', () => {
  // Mostrar la información de inicio
  main.innerHTML = `
    <h2>Bienvenidos a nuestra página de mascotas</h2>
    <p> ¿Quieres añadir tu perro a la colección? Envíe sus fotos como una solicitud de extracción aquí.
                    
    ¿Necesitas más perros en tu vida? Obtenga el número 1 de Dog CEO Zine,
     una revista trimestral de negocios y estilo de vida para el perro moderno.</p>
     
  `;
});

btnImagenes.addEventListener('click', () => {
  // Obtener las imágenes de la API utilizando fetch
  fetch('https://www.pexels.com/es-es/buscar/perros/')
    .then(response => response.json())
    .then(data => {
      // Mostrar las imágenes en la página
      const imagenes = data.map(item => `<img src="${item.url}" alt="Mascota">`).join('');
      main.innerHTML = `
        <h2>Imágenes de mascotas</h2>
        ${imagenes}
      `;
    })
    .catch(error => {
      console.error(error);
    });
});

btnComentarios.addEventListener('click', () => {
  // Obtener los comentarios de la API utilizando fetch
  fetch('https://www.mundo-animal.com/p/opiniones-de-clientes/')
    .then(response => response.json())
    .then(data => {
      // Mostrar los comentarios en la página
      const comentarios = data.map(item => `
        <div class="comentario">
          <h3>${item.name}</h3>
          <p>${item.body}</p>
          <span>${item.email} - ${item.date}</span>
        </div>
      `).join('');
      main.innerHTML = `
        <h2>Comentarios sobre mascotas</h2>
        <div id="comentarios">
          ${comentarios}
        </div>
        <form id="formulario">
          <h3>Añadir comentario</h3>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <label for="comentario">Comentario:</label>
          <textarea id="comentario" name="comentario" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      `;
    })
    .catch(error => {
      console.error(error);
    });

  // Agregar evento submit al formulario de comentarios
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', event => {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const comentario = document.querySelector('#comentario').value;

    // Agregar el nuevo comentario a la lista
    const comentarios = document.querySelector('#comentarios');
    comentarios.innerHTML += `
      <div class="comentario">
        <h3>${nombre}</h3>
        <p>${comentario}</p>
        <span>${email} - ${new Date().toLocaleDateString()}</span>
      </div>
    `;

    // Limpiar el formulario
    formulario.reset();
  });
});
