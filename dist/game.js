const gamespace = document.getElementById("gamespace");
const ctx = gamespace.getContext('2d');
ctx.fillStyle = "black";
const boop = new Audio('beep.wav');
const bounce = new Audio('bounce.mp3');

let p1 = {
    x: 30,
    y: 375,
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

let p2score = 0;
let p1score = 0;
let xvelocity = -5;
let yvelocity = 0;

function startgame () {
    requestAnimationFrame(startgame);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.rad, 0, 2 * Math.PI);
    ctx.fill();

    p1relative = Math.abs(p1.x - ball.x + ball.rad);
    p2relative = Math.abs((p2.x - p2.width) - ball.x + ball.rad);
   
    if(ball.y <= 0 || ball.y >= 900){
        bounce.play();
        yvelocity = -yvelocity;
    }else if(ball.y + ball.rad >= p1.y && ball.y - ball.rad <= p1.y + 150 && p1relative == 0 || ball.y + ball.rad >= p2.y && ball.y - ball.rad <= p2.y + 150 && p2relative == 0){
        bounce.play();
        xvelocity = -xvelocity;
        yvelocity = -(Math.floor(Math.random() * 10) + 1);
    }else if(ball.x <= 0){
        boop.play();
        ball.x = 925
        ball.y = 450
        p2score += 1;
        document.getElementById("p2score").innerHTML = "Player 2 Score:" + p2score;
    }else if(ball.x >= 1850){
        boop.play();
        ball.x = 925
        ball.y = 450
        p1score += 1;
        document.getElementById("p1score").innerHTML = "Player 1 Score:" + p1score;
    }

    ball.x += xvelocity;
    ball.y += yvelocity;

    ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
    ctx.fillRect(p2.x, p2.y, p2.width, p2.length);

    document.onkeydown = (event) => {
        switch(event.keyCode){
            case 87:
                ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
                p1.y -= 20; //platform velocity
                if (p1.y < 0){
                    p1.y = 0; 
                    ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
                }else{
                    ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
                }
                break;
            case 83:
                ctx.clearRect(p1.x, p1.y, p1.width, p1.length);
                p1.y += 20;
                if (p1.y > 755){
                    p1.y = 755;
                    ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
                }else{
                    ctx.fillRect(p1.x, p1.y, p1.width, p1.length);
                }
                break;
            case 24:
                ctx.clearRect(p2.x, p2.y, p2.width, p2.length);
                p2.y -= 20;
                if (p2.y < 0){
                    p2.y = 0;
                    ctx.fillRect(p2.x, p2.y, p2.width, p2.length);
                }else{
                    ctx.fillRect(p2.x, p2.y, p2.width, p2.length);
                }
                break;
            case 25:
                ctx.clearRect(p2.x, p2.y, p2.width, p2.length);
                p2.y += 20;
                if (p2.y > 755){
                    p2.y = 755;
                    ctx.fillRect(p2.x, p2.y, p2.width, p2.length);
                }else{
                    ctx.fillRect(p2.x, p2.y, p2.width, p2.length);
                }
                break;
        }
    }   
}
startgame();



