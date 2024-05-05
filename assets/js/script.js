const traerPost = async () => {
    const url  = "https://jsonplaceholder.typicode.com/posts";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error(error);
    }
};

document.querySelector("button").addEventListener("click", async () => {
    const datos = await traerPost();
    const contenedorDatos = document.querySelector("#recibidorDatos");
    let html = "";
    datos.forEach((post) => {
        html += `<ul><li><h4>${post.title}</h4><p>${post.body}</p></li></ul>`;
    });
    contenedorDatos.innerHTML = html;
}) ;

let refrescar = document.getElementById('volver');
refrescar.addEventListener("click", _ => {
    location.reload();
})