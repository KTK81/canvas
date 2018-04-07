var pocitadlo = true;
var color = "blue";
var randomText = "pes";
var numberSimple = 1;

var divko = document.getElementById("stvorec");
divko.addEventListener("click", changeColor);
divko.addEventListener("mousemove", incrementNumber);

var divko2 = document.getElementById("stvorec2");
divko2.addEventListener("mousedown", changeColor);
divko2.addEventListener("mousemove", incrementNumber);

var text = document.getElementById("pomocnyElement");

var button1 = document.getElementById("buttonZmena");
button1.addEventListener("click", changeColor);

function changeColor () {
    if (pocitadlo) {
        color = "blue"
        pocitadlo = false;
    }
    else {
        color = "yellow"
        pocitadlo = true;
    }
//    divko.innerHTML = pocitadlo;
    
    canvasDown.style.backgroundColor = color;
    
}

function incrementNumber () {
    numberSimple++;
    text.innerHTML = numberSimple;
}

