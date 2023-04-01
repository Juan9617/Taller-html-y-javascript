const dataContainer = document.getElementById('data-container');

fetch('https://www.mundo-animal.com/p/opiniones-de-clientes/')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      dataContainer.appendChild(postElement);
    });
  })
  