// Varaibles para numeros de caras y cantidad de dados
var faces, qty;
// Carga de imagenes
let images = ["dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
];
let dice = document.querySelectorAll("img");

// Extraer seleccion del dropdown button
// $(document).ready(function() {
//     $('#qty a').on('click', function() {
//         qty = ($(this).text());
//         alert("Seleccionaste el numero " + qty);
//     });
// });
// $(document).ready(function() {
//     $('#faces a').on('click', function() {
//         faces = ($(this).text());
//         alert("Seleccionaste el numero " + faces);
//     });
// });


function roll() {

    // for (var i = 0; i < qty; i++) {
    //     var diceRoll = Math.floor(Math.random() * 6) + 1;
    //     container.innerHTML += '<div class="dice">' + diceRoll + '</div>';
    // };



    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
            dice.forEach(function(die) {
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor(Math.random() * 6);
            // let dieTwoValue = Math.floor(Math.random() * 6);
            // console.log(dieOneValue, dieTwoValue);
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            // document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#total").innerHTML = "Resultado " + ((dieOneValue + 1));
        },
        1000
    );
}

roll();
console.log(faces, qty);