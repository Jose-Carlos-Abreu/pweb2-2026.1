import listaPaises from './model/bandeiras.js';

const container = document.querySelector('main');

// aqui eu to criando o HTML do card
function criarCard(pais) {
  return `
    <div class="col-2 text-center my-3 flag-item">
      <img src="${pais.image}" alt="${pais.name}" class="img-fluid">
      <small class="d-block mt-1">${pais.name}</small>
    </div>
  `;
}

// aqui eu to juntando todos os cards e adicionando todos dentro do container
function renderizarBandeiras(dados) {
  const html = dados.map(pais => criarCard(pais)).join('');
  container.innerHTML = html;
}

// ordenando por nome
const ordenado = [...listaPaises].sort((a, b) =>
  a.name.localeCompare(b.name)
);

renderizarBandeiras(ordenado);