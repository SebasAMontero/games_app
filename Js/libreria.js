"use strict";
const buttonHome = document.querySelector(".button-home");
const buttonGames = document.querySelector(".button-games");
const buttonInfo = document.querySelector(".button-info");


//----------------------Botton home-------------------------------------
buttonHome.addEventListener('click', () => {
    Swal.fire({
        title: "Calida bienvenida para usted buen señor",
        text: "Mas informacion en Games o About",
        icon: "success",
        imageUrl: "./images/fox.webp",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "cute Fox",


    })


})

//----------------------Botton games-----------------------------------
buttonGames.addEventListener('click', () => {
    Swal.fire({
        title: "Games esta en desarrollo",
        text: "Disculpe la incoveniencia",
        icon: "error",
        confirmButtonText: "No Entendi"

    }).then((result => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Usted tiene que arrepentirse..",
                icon: "warning",
                text: "Su unica opcion es entender"

            })
        }
    }))


})

//----------------------Botton Info----------------------------------
buttonInfo.addEventListener('click', () => {
    Swal.fire({
        title: "Very Illegal Pirate Games es una pagina ideal para jugadores de cualquier edad",
        text: "Indie games, developed by Me(excepto el de Candy crush y muchas lineas de Pong que las tome de un Tutorial de youtube)",
        icon: "info",
        confirmButtonText: "Entendido"

    })


})

//----------------------Alerta de tostadas-----------------------------------
Toastify({
    text: "Antes de empezar.. Quieres tostadas? (Click)",
    duration: 3000,
    gravity: 'bottom',
    position: 'center',
    className: 'toast',
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: () => {
        Swal.fire({
          
            imageUrl: "./images/tostada.jpg",
            imageWidth: 500,
            imageHeight: 500,
            imageAlt: "toast",
            confirmButtonText: "Cuando termine de comer presione aqui"
        })
    }
}).showToast();
