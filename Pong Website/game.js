const gamespace = document.getElementById("gamespace");
var ctx = gamespace.getContext('2d');
ctx.fillStyle = "black";

let p1 = {
    x: 30,
    y: 350,
    width: 10,
    length: 150,
};
let p2 = {
    x: 1810, 
    y: 350,
    width: 10,
    length: 150,
}
let ball = {
    x: 925,
    y: 450,
    rad: 10,
}

ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
ctx.fillRect(p2.x, p2.y, p2.width, p2.length);

ctx.beginPath();
ball.x -= 20;
ctx.arc(ball.x, ball.y, ball.rad, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


document.onkeydown = (event) => {
    switch(event.keyCode){
        case 87:
            ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
            p1.y -= 10; //Shift speed
            if (p1.y < 0){
                p1.y = 0; 
                ctx.fillRect(30, p1.y, 10, 150);
            }else{
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }
        break;
        case 83:
            ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
            p1.y += 10;
            if (p1.y > 755){
                p1.y = 755;
                ctx.fillRect(30, p1.y, 10, 150);
            }else{
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }
    }
}