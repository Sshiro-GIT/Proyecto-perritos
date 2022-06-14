// perritos :D
const perritos = [
    {
        id:1,
        name : "Lila",
        img : '../images/lila.png'
    },
    {
        id:2,
        name : "roco",
        img : '../images/caniche.jpg'
    },
    {
        id:3,
        name : "Tupac",
        img : '../images/rottweiler.jpg'
    },
    {
        id:4,
        name : "Marte",
        img : '../images/pastor-aleman.jpg'
    },
    {
        id:5,
        name : "paquito",
        img : '../images/perro5.jpg'
    },
    {
        id:6,
        name : "coco",
        img : '../images/perro6.jpg'
    },
    {
        id:7,
        name : "Oscar",
        img : '../images/pit-bull.jpg'
    },
    {
        id:8,
        name : "toto",
        img : '../images/perro8.jpg'
    },
];

const contenedorPerritos = document.querySelector('.contenedor-perritos');
const listadoAdoptados = document.querySelector('.listado-adoptados');
const perritosAdoptados = [];

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerritos();
})

//Funcion para mostrar perritos
function mostrarPerritos() {
    perritos.forEach(perrito => {
        const divPerritos = document.createElement('div');
        divPerritos.classList.add('card');

        const imgPerritos = document.createElement('img');
        imgPerritos.src = perrito.img;
        imgPerritos.classList.add('imagen-perrito');

        const tituloPerrito = document.createElement('h3');
        tituloPerrito.textContent = perrito.name;

        const btnAdoptados = document.createElement('button');
        btnAdoptados.className = "btn-adoptados";
        btnAdoptados.textContent = "Adoptar 💗";
        btnAdoptados.onclick = () => {
            agregarAdoptados(perrito.id)
        };

        divPerritos.appendChild(imgPerritos);
        divPerritos.appendChild(tituloPerrito);
        divPerritos.appendChild(btnAdoptados);
        
        contenedorPerritos.appendChild(divPerritos);
    })
}

function agregarAdoptados(id){
    let perritoSeleccionado = perritos.find( perrito => perrito.id === id);
    perritosAdoptados.push(perritoSeleccionado);
    mostrarPerritoAdoptado(perritosAdoptados);
    guardarPerrito(perritoSeleccionado)
}

function mostrarPerritoAdoptado( adoptados ) {
    
    listadoAdoptados.innerHTML =  "";

    adoptados.forEach(perrito => {
        const divPerritos = document.createElement('div');
        divPerritos.classList.add('card');

        const imgPerritos = document.createElement('img');
        imgPerritos.src = perrito.img;
        imgPerritos.classList.add('imagen-perrito');

        const tituloPerrito = document.createElement('h3');
        tituloPerrito.textContent = perrito.name;

        divPerritos.appendChild(imgPerritos);
        divPerritos.appendChild(tituloPerrito);
        listadoAdoptados.appendChild(divPerritos);
    })
}

function getPerritoAdoptados(){
    let PerritosList = localStorage.getItem('perritoAdoptado');
    if(PerritosList == null){
        perritoSeleccionado = [];
    } else{
        perritoSeleccionado = JSON.parse(PerritosList);
    }
    return perritoSeleccionado;
}

function guardarPerrito (plist){
    localStorage.setItem('perritoAdoptado', JSON.stringify(plist));
}