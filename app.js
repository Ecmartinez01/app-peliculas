let pagina = 1
const btnSiguiente = document.getElementById("btnSiguiente")
const btnAnterior = document.getElementById("btnAnterior")
btnSiguiente.addEventListener("click",()=>{
	if (pagina < 1000) {
		pagina += 1
		cargarPeliculas()
	}
})
btnAnterior.addEventListener("click",()=>{
	if (pagina > 1) {
		pagina -= 1
		cargarPeliculas()
		
	}
})
const cargarPeliculas = async()=>{
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f64a2907c49df19368ff2eae4e9008ee&language=es-MX&page=${pagina}`)
		if (respuesta.status === 200) {
			const datos = await respuesta.json()
			let peliculas = ''		
			datos.results.forEach(pelicula => {
				peliculas += `
				<div class='pelicula'>
			    	<img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
					<h3 class='titulo'> ${pelicula.title}</h3>
				</div>`
			});
			document.getElementById("contenedor").innerHTML = peliculas 
		}
	} catch (error) {
		console.log(error)
	}
} 
cargarPeliculas()