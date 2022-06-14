let timer
let deleteFirstPhotoDelay

async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data.message)
    } catch (e) {
        console.log("hay un problema D:")
    }
}

start()

function createBreedList(breedList) {
document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
            <option>Elige una raza de perro</option>
            ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
            }).join('')}
        </select>
    `
}

async function loadByBreed(breed) {
    if (breed != "Elige una raza de perro") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    let currentPosition = 0
    clearInterval(timer)
    clearTimeout(deleteFirstPhotoDelay)

    if (images.length > 1) {
        document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
    `
    currentPosition += 2
    if (images.length == 2) currentPosition = 0
    timer = setInterval(nextSlide, 1800)
    } else {
        document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')"></div>
    <div class="slide"></div>
    `
}

function nextSlide() {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
    deleteFirstPhotoDelay = setTimeout(function () {
        document.querySelector(".slide").remove()
    }, 1000)
    if (currentPosition + 1 >= images.length) {
        currentPosition = 0
    } else {
        currentPosition++
    }
}
}