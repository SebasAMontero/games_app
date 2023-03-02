
"use strict";

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=151";

//-------------------Create class-------------------------
class Player {
    constructor(id, age, user, points, pokemon) {
        this.id = id;
        this.age = age;
        this.user = user;
        this.points = 0;
        this.win = false;
        this.pokemon = pokemon;
    }

}




//-------------------Defino array vacio para insertar los objetos de jugadores-------------------------
let arrayplayers = [];

//-------------------Funcion que crea jugadores, llamada por botones-------------------------
function createPlayers() {

    let idplayer = document.getElementById("numberplayers");
    let fname = document.getElementById("fname");
    let age = document.getElementById("age");
    let pokemon = '';
    let points = 0;

    arrayplayers.push(new Player(idplayer.value, age.value, fname.value, points, pokemon));



}
const submitplayerinfo = () => {

    createPlayers();

}
const submitplayer = document.getElementById("submitplayerinfo");
submitplayer.addEventListener("click", submitplayerinfo);


const submittableinfo = () => {

    (arrayplayers.length != 0) ? createTable() : Swal.fire({
        title: "Please enter players Data",
        icon: "error",
        confirmButtonText: "Entendido"

    });
}
const submittable = document.getElementById("submittableinfo");
submittable.addEventListener("click", submittableinfo);


//-------------------Funcion crear tabla-------------------------
function createTable() {
    let trplayer = document.getElementById("tr-player");
    let trname = document.getElementById("tr-name");
    let trage = document.getElementById("tr-age");
    let trid = document.getElementById("tr-id");
    for (let i = 0; i < arrayplayers.length; i++) {
        let tr = document.createElement("th");
        tr.innerHTML = "Player" + (i + 1);
        trplayer.appendChild(tr);
        let tduser = document.createElement("td");
        tduser.innerHTML = arrayplayers[i].user;
        trname.appendChild(tduser);
        let tdage = document.createElement("td");
        tdage.innerHTML = arrayplayers[i].age;
        trage.appendChild(tdage);
        let tdid = document.createElement("td");
        tdid.innerHTML = arrayplayers[i].id;
        trid.appendChild(tdid);
    }

}
createTable();


//-------------Delete table------------------
const buttondelete = document.getElementById('button-delete');
buttondelete.addEventListener('click', (e) => {
    e.preventDefault(e);
    deleteTable();
})
function deleteTable() {

    let tablePlayers = document.querySelector('.table-players');

    tablePlayers.innerHTML = ` <caption> Players</caption>
     <thead>
    <tr id="tr-player">
        <th id="th-player">Player</th>
    </tr>
</thead>
<tbody class="table-players-body">
    <tr id="tr-name">
        <td>Name</td>
    </tr>
    <tr id="tr-age">
        <td>Age</td>
    </tr>
    <tr id="tr-id">
        <td>ID</td>
    </tr>

</tbody>`;
    arrayplayers = [];

}
//-------------------Guardar en Local storage-------------------------
const formPlayer = document.getElementById("formplayer");


formPlayer.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem('playerStorage', JSON.stringify(arrayplayers));

});

const arrayJugadores = localStorage.getItem("playerStorage");




//-------------------Funcion Encontrar jugador mas viejo-------------------------
let oldplayer = document.getElementById("oldplayer");
const button2 = () => {

    findOldestPlayer();

}
function findOldestPlayer() {
    (arrayplayers.length > 0) ? (
        arrayplayers.sort((a, b) => b.age - a.age),
        oldplayer.innerText = `El jugador mas viejo es: ${arrayplayers[0].user}  con ${arrayplayers[0].age}  años de edad` //ordena de mayor a menor para encontrar el mas viejo 

    )
        : (oldplayer.innerText = "Debe ingresar algun jugador en el formulario primero!!");


}

let buttonold = document.getElementById("button-old");
buttonold.addEventListener("click", button2);
//---- Pokemon Api-------------

const poke = document.querySelector("#poke");
const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

let pokePlayer = document.getElementById("pokePlayer");

let pokebutton = document.getElementById("pokebutton");
pokebutton.addEventListener("click", (e) => {
    e.preventDefault(e);
  
    if (arrayplayers.length != 0) {
        getPokemon();
    } else {
        Swal.fire({
            title: "Please enter players Data, to assign a Pokemon",
            icon: "error",
            confirmButtonText: "Entendido"

        });
    }
});

const getPokemon = async () => {
    const resp = await
        fetch(URL_POKEMON)
    const pokedata = await resp.json()

    let numPoke = Math.floor((Math.random(0, 15.1) * 100));
    let pok = pokedata.results[numPoke - 1].name;

    pokePlayer.innerHTML =
        `<h2 class="poke-name">#${numPoke} - <inline id="pokeid">${capitalize(pokedata.results[numPoke - 1].name)}</inline> </h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numPoke}.png
    "> 
    `;

    poke.appendChild(pokePlayer);

    arrayplayers[0].pokemon = pokedata.results[numPoke - 1].name;

    localStorage.clear();
    localStorage.setItem('playerStorage', JSON.stringify(arrayplayers));
}








