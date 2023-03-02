"use strict";
var game = function () {
    let time = 1; // intervalo de tiempo en el q se ejecuta
    let movement = 10;
    let movementBar = 5;
    let width = document.documentElement.clientWidth - movement;
    let height = document.documentElement.clientHeight - movement;
    let controlGame;
    let player1;
    let player2;
    let KeyQ = "KeyQ";
    let KeyA = "KeyA";
    let KeyO = "KeyO";
    let KeyL = "KeyL";
    let pointsBlue = 0;
    let pointsGreen = 0;
    let puntosAzul = document.getElementById("bluepoints");
    let puntosVerde = document.getElementById("greenpoints");
    let buttonPlay = document.getElementById("playagain");
    buttonPlay.addEventListener("click", (e) => {
        
        e.preventDefault();
        start();

    })
    function start() {
        init();
        controlGame = setInterval(play, time);
    }
    function init() {
        ball.style.left = 0;
        ball.state = 1;
        ball.direction = 1; // right 1, left 2
        player1 = new Object();
        player2 = new Object();
        player1.keyPress = false;
        player1.code = null;
        player2.keyPress = false;
        player2.code = null;
    }
    function stop() {
        clearInterval(controlGame);
        document.body.style.background = "grey";
    }


    function play() {

        moveBall();
        moveBar();
        checkIfLost();
    }

    function checkIfLost() {
        if (ball.offsetLeft >= width) {
            stop();

            Swal.fire({
                title: "Point For Blue Player",

                icon: "success",
                color: 'blue',
                background: 'lightblue',
                confirmButtonText: "Keep  playing"


            });
            pointsBlue++;
            puntosAzul.innerHTML = pointsBlue;

        }

        if (ball.offsetLeft <= 0) {
            stop();

            Swal.fire({
                title: "Point For Green Player",
                icon: "success",
                color: 'green',
                background: 'pink',
                confirmButtonText: "Keep playing"
            });
            pointsGreen++;
            puntosVerde.innerHTML = pointsGreen;

        }

    }
    function moveBall() {
        checkStateBall();
        switch (ball.state) {

            case 1: //derecha, abajo
                ball.style.left = (ball.offsetLeft + movement) + "px";
                ball.style.top = (ball.offsetTop + movement) + "px";
                break;
            case 2: //derecha, arriba
                ball.style.left = (ball.offsetLeft + movement) + "px";
                ball.style.top = (ball.offsetTop - movement) + "px";
                break;
            case 3: //izq, abajo
                ball.style.left = (ball.offsetLeft - movement) + "px";
                ball.style.top = (ball.offsetTop + movement) + "px";
                break;
            case 4: //izq, arriba 
                ball.style.left = (ball.offsetLeft - movement) + "px";
                ball.style.top = (ball.offsetTop - movement) + "px";
                break;
        }
    }
    function checkStateBall() {
        if (collidePlayer2()) {
            ball.direction = 2;
            if (ball.state == 1) ball.state = 3;
            if (ball.state == 2) ball.state = 4;
        }
        else if (collidePlayer1()) {
            ball.direction = 1;
            if (ball.state == 3) ball.state = 1;
            if (ball.state == 4) ball.state = 2;
        }
        if (ball.direction === 1) {
            if (ball.offsetTop >= height) ball.state = 2;
            else if (ball.offsetTop <= 0) ball.state = 1;
        } else {
            if (ball.offsetTop >= height) ball.state = 4;
            else if (ball.offsetTop <= 0) ball.state = 3;
        }
    }
    function collidePlayer1() {
        if (ball.offsetLeft <= (bar1.clientWidth) &&
            ball.offsetTop >= bar1.offsetTop &&
            ball.offsetTop <= (bar1.offsetTop + bar1.clientHeight)) {
            return true;
        }
        return false;
    }
    function collidePlayer2() {
        if (ball.offsetLeft >= (width - bar2.clientWidth) &&
            ball.offsetTop >= bar2.offsetTop &&
            ball.offsetTop <= (bar2.offsetTop + bar2.clientHeight)) {
            return true;
        }
        return false;
    }

    function moveBar() {

        if (player1.keyPress) {

            if (player1.code == KeyQ && bar1.offsetTop >= 0)
                bar1.style.top = (bar1.offsetTop - movementBar) + "px";
            if (player1.code == KeyA && (bar1.offsetTop + bar1.clientHeight) <= height)
                bar1.style.top = (bar1.offsetTop + movementBar) + "px";
        }
        if (player2.keyPress) {
            if (player2.code == KeyO && bar2.offsetTop >= 0)
                bar2.style.top = (bar2.offsetTop - movementBar) + "px";
            if (player2.code == KeyL && (bar2.offsetTop + bar2.clientHeight) <= height)
                bar2.style.top = (bar2.offsetTop + movementBar) + "px";
        }
    }
    document.onkeydown = function (e) {



        if (e.code === KeyQ || e.code === KeyA) {
            player1.keyPress = true;
            player1.code = e.code;
        }
        if (e.code === KeyO || e.code === KeyL) {
            player2.keyPress = true;
            player2.code = e.code;
        }

    }
    document.onkeyup = function (e) {

        if (e.code === KeyQ || e.code === KeyA) {
            player1.keyPress = false;
            player1.code = e.code;
        }
        else if (e.code === KeyO || e.code === KeyL) {
            player2.keyPress = false;
            player2.code = e.code;
        }
    }
    start();
}();
