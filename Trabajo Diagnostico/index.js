import { movies } from './movies.js'

const overlay = document.getElementById('overlay')
const createModal = document.getElementById('crearMovie')
const btnCreateMovie = document.getElementById('Filters__div-button')

const verMovie = document.getElementById('verMovie')

btnCreateMovie.addEventListener('click', () => {
  overlay.style.display = 'block'
  createModal.style.display = 'block'
})

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  createModal.style.display = 'none'
  verMovie.style.display = 'none'
})

const addMovie = document.getElementById('addMovie')
const moviesContainer = document.getElementById('Movies')

showMovies(movies)

function emptyForm() {
  document.getElementById('url').value = ''
  document.getElementById('title').value = ''
  document.getElementById('cat').value = ''
  document.getElementById('descripcion').value = ''
  document.getElementById('starInput').value = ''
}

function createMovie() {

  let url = document.getElementById('url').value
  let title = document.getElementById('title').value
  let cat = document.getElementById('cat').value
  let descripcion = document.getElementById('descripcion').value
  let stars = Number(document.getElementById('starInput').value)

  let id = movies.length + 1

  if (stars <= 0 || stars > 5 || descripcion.length <= 1 || title.length <= 1 || url.length <= 1 || cat.length <= 0) {
    alert('Ingrese los datos correctamente')
    return
  }

  emptyForm()

  let movieObject = {
    id,
    url,
    title,
    cat,
    descripcion,
    stars
  }

  movies.push(movieObject)
  showMovies(movies)

  return movies
}

function showMovies(movies) {
  moviesContainer.innerHTML = ''

  movies.forEach((movie, index) => {

    let movieArticle = document.createElement('article')
    movieArticle.setAttribute('class', 'movie')

    movieArticle.innerHTML = `
    <img src="${movie.url}" alt="Imagen de la pelicula: ${movie.title}">
    <h3><span>${index + 1}. </span>${movie.title}</h3>
  `

    movieArticle.addEventListener('click', () => {
      overlay.style.display = 'block'
      verMovie.style.display = 'block'

      verMovie.innerHTML = `
      <img src="${movie.url}" alt="Imagen de ${movie.title}">
      <div id="details">
        <div id="titleAndCat">
          <h3><span>${movie.id}. </span>${movie.title}</h3>
          <h2>${movie.cat}</h2>
        </div>
        <p>${movie.descripcion}</p>
        <div id="stars">
        </div>
      </div>
    `
      let starsContainer = verMovie.querySelector('#stars')

      for (let i = 0; i < movie.stars; i++) {
        let star = document.createElement('img')
        star.src = "Star.png"
        star.alt = "Imagen de Estrella"
        starsContainer.appendChild(star)
      }
    })
    moviesContainer.appendChild(movieArticle)
  })
}

addMovie.addEventListener('click', () => {
  createMovie()
  overlay.style.display = 'none'
  createModal.style.display = 'none'
})

let filterStars = document.getElementById('filterStars')
let filterCat = document.getElementById('filterCat')
let filterAZ = document.getElementById('filterAZ')

let dropStars = document.getElementById('dropStars')
let dropCat = document.getElementById('dropCat')
let dropAZ = document.getElementById('dropAZ')

function toggle(element) {
  element.style.display = element.style.display === 'block' ? 'none' : 'block'
}

filterStars.addEventListener('click', () => toggle(dropStars))
filterAZ.addEventListener('click', () => toggle(dropAZ))
filterCat.addEventListener('click', () => toggle(dropCat))

let filteredMovies = [...movies]

//Filtro de Categorias

let h2Cat = document.getElementById('h2Cat')

let categorias = Array.from(dropCat.children)

categorias.forEach((categoria) => {
  let nombreCategoria = categoria.getAttribute('data-value')
  categoria.addEventListener('click', () => {
    moviesContainer.innerHTML = ''
    if (nombreCategoria == 'Todas') {
      filteredMovies = [...movies]
      h2Cat.innerHTML = 'Todas <i class="fa-solid fa-chevron-down"></i> '
    } else {
      filteredMovies = movies.filter(movie => movie.cat === nombreCategoria)
      h2Cat.innerHTML = `${nombreCategoria} <i class="fa-solid fa-chevron-down"></i>`
    }
    showMovies(filteredMovies)
  })
})

// Filtro de Estrellas

let h2Stars = document.getElementById('h2Stars')

let ordenes = Array.from(dropStars.children)
ordenes.forEach((orden) => {
  let tipo = orden.getAttribute('data-value')
  orden.addEventListener('click', () => {
    moviesContainer.innerHTML = ''
    if (tipo === 'mayorAMenor') {
      filteredMovies = [...filteredMovies].sort((a, b) => b.stars - a.stars)
      h2Stars.innerHTML = 'Mayor a Menor <i class="fa-solid fa-chevron-down"></i>'
    } else {
      filteredMovies = [...filteredMovies].sort((a, b) => a.stars - b.stars)
      h2Stars.innerHTML = 'Menor a Mayor <i class="fa-solid fa-chevron-down"></i>'
    }
    showMovies(filteredMovies)
  })
})

//Filtro de Titulo

let h2AZ = document.getElementById('h2AZ')
let AZs = Array.from(dropAZ.children)

AZs.forEach((AZ) => {
  let tipo = AZ.getAttribute('data-value')
  AZ.addEventListener('click', () => {
    moviesContainer.innerHTML = ''
    if (tipo === 'az') {
      filteredMovies = [...filteredMovies].sort((a, b) => a.title.localeCompare(b.title))
      h2AZ.innerHTML = 'A - Z <i class="fa-solid fa-chevron-down"></i>'
    } else {
      filteredMovies = [...filteredMovies].sort((a, b) => b.title.localeCompare(a.title))
      h2AZ.innerHTML = 'Z - A <i class="fa-solid fa-chevron-down"></i>'
    }
    showMovies(filteredMovies)
  })
})

// Borrar Filtros

let deleteFilters = document.getElementById('deleteFilters')

deleteFilters.addEventListener('click', () => {
  moviesContainer.innerHTML = ''
  h2AZ.innerHTML = 'A - Z <i class="fa-solid fa-chevron-down"></i>'
  h2Cat.innerHTML = 'Todas <i class="fa-solid fa-chevron-down"></i>'
  h2Stars.innerHTML = 'Valoración <i class="fa-solid fa-chevron-down"></i>'
  showMovies(movies)
})
