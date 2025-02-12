function ring(){

 const t=document.getElementById("tahvel");
 if(tahvel.getContext){
     let t=tahvel.getContext("2d"); // tahvli nimi määramine
     t.beginPath();
     t.arc(50, 50, 20, 0,2 *Math.PI, true); //x, y - keskpunkt, R -raadius
     t.strokeStyle="blue";
     t.stroke(); //ümberjoon
     t.fillStyle="pink";
     t.fill(); //taust
 }
}

function ring2() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, tahvel.width, tahvel.height);
        t.beginPath();
        t.arc(150, 50, 20, 0, 2 * Math.PI, true);
        t.fillStyle = "blue";
        t.fill();
    }
}

function kustuta(){
    const tahvel =document.getElementById("tahvel");
    if (tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0, 0, 400,400);
    }
}
//ristikült
function ristkylik() {
    const tahvel =document.getElementById("tahvel");
    if (tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="black";
        t.fillRect(50, 100, 100, 120);
    }
}

//joon
function joon(){
    const t=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // tahvli nimi määramine
        t.beginPath();
        t.lineWidth = "5";
        t.moveTo(50,60);//alguspunkt
        t.lineTo(70, 100);
        t.lineTo(200, 100);
        t.lineTo(50,60); //lõppunkt
        t.strokeStyle="yellow";
        t.stroke(); //ümberjoon
    }
}
function eesti() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0, 0, 330, 70);
        l.fillStyle="black";
        l.fillRect(0, 70, 330, 140);
        l.fillStyle="white";
        l.fillRect(0, 140, 330, 210);

    }
}
function france() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");

        l.fillStyle = "blue";
        l.fillRect(0, 0, 110, 210);

        l.fillStyle = "white";
        l.fillRect(110, 0, 110, 210);

        l.fillStyle = "red";
        l.fillRect(220, 0, 110, 210);
        const image = new Image();
        image.src ="Hõiva.PNG";
        l.drawImage(image, 120, 70);
    }
}

function japan() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "white";
        l.fillRect(0, 0, 330, 210);

        l.fillStyle = "red";
        l.beginPath();
        l.arc(165, 105, 50, 0, 2 * Math.PI);
        l.fill();
    }
}

function finland() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "white";
        l.fillRect(0, 0, 330, 210);

        l.fillStyle = "blue";
        l.fillRect(0, 0, 80, 210);

        l.fillRect(0, 70, 330, 80);
    }
}

function kustuta2(){
    const tahvel =document.getElementById("lipp");
    if (tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0, 0, 400,400);
    }
}

function norway() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");

        l.fillStyle = "red";
        l.fillRect(0, 0, 330, 210);

        l.fillStyle = "white";
        l.fillRect(0, 0, 80, 210); // Vertical bar

        l.fillRect(0, 70, 330, 60); // Horizontal bar

        l.fillStyle = "blue";
        l.fillRect(0, 0, 60, 210);

        l.fillRect(0, 70, 330, 40);
    }
}



var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

var context = canvas.getContext("2d");
function make_base() {
    var base_image = new Image();
    base_image.src = "images/Hõiva.PNG";
    base_image.onload = function() {
        context.drawImage(base_image, 100, 100);
    };
}

