const gamespace = document.getElementById("gamespace");
const ctx = gamespace.getContext('2d');
ctx.fillStyle = "black";

let p1 = {
    x: 30,
    y: 350,
    width: 10,
    length: 150,
};
let p2 = { 
    x: gamespace.width - 40, 
    y: p1.y,
    width: p1.width,
    length: p1.length,
};
let ball = {
    x: gamespace.width / 2,
    y: gamespace.height / 2,
    rad: 10,
};

function ballmechanic () {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.rad, 0, 2 * Math.PI);
    ctx.fill();
    //console.log(ball.x);
    //console.log(gamespace.width);

    if(ball.y = 0 || 755){
        //his the wall -> bounce off 
    }else if(ball.x = 0 || gamespace.width){
        //hits the end goal -> +1 scoreboard
    }else{
        //within an empty space continue in the same linear path
    }
}
ballmechanic();

ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
ctx.fillRect(p2.x, p2.y, p2.width, p2.length);

document.onkeydown = (event) => {
    switch(event.keyCode){
        case 87:
            ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
            p1.y -= 10; //platform velocity
            if (p1.y < 0){
                p1.y = 0; 
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }else{
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }
        break;
        case 83:
            ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
            p1.y += 10;
            if (p1.y > 755){
                p1.y = 755;
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }else{
                ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
            }
    }
}

