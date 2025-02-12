function kustuta(){
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext){
        let p = pyhi.getContext("2d");
        p.clearRect(0, 0, 400, 400);
    }
}
function maja() {
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d");
        p.fillStyle = "red";
        p.fillRect(100, 150, 200, 200);

        p.beginPath();
        p.arc(190, 240, 40, 0, 2 * Math.PI, true);
        p.strokeStyle = "pink"
        p.stroke();
        p.fillStyle = "blue"
        p.fill();

        p.beginPath();
        p.lineWidth = "1";
        p.moveTo(100, 150);
        p.lineTo(200, 50);
        p.lineTo(300, 150);
        p.strokeStyle = "yellow";
        p.stroke(); //ümberjoon
        p.fillStyle = "pink";
        p.fill();

    }
}
function Triangle() {
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext){
        let p = pyhi.getContext("2d");
        p.beginPath();
        p.moveTo(400,100);
        p.lineTo(450,150);
        p.lineTo(400,200);
        p.lineTo(350,150);
        p.closePath();
        p.strokeStyle = "blue"
        p.stroke();
        p.fillStyle = "pink";
        p.fill();
    }
}
