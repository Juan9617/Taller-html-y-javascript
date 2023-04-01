const contenedorDatos = document.querySelector('#contenedor-datos');

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    const listaDatos = document.createElement('ul');

    data.forEach(dato => {
      const itemDato = document.createElement('li');
      itemDato.textContent = dato.title;
      listaDatos.appendChild(itemDato);
    });

    contenedorDatos.appendChild(listaDatos);
  });