const dataContainer = document.getElementById('data-container');

fetch('file:///C:/Users/juan/Documents/Taller1/pagina-dos/perros.html')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      dataContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error(error));
  
  