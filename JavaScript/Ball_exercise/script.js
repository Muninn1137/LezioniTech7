const ball = document.querySelector(".ball");
let positionX = 0;
let positionY = 0;
let velocityX = 2;  
let velocityY = 2;  

function moveBall() {
    const ballBorder = ball.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

   
    if (ballBorder.right >= screenWidth || ballBorder.left <= 0) {
        velocityX = -velocityX; 
    }
    
    if (ballBorder.bottom >= screenHeight || ballBorder.top <= 0) {
        velocityY = -velocityY; 
    }

    positionX += velocityX;
    positionY += velocityY;

    ball.style.left = `${positionX}px`;
    ball.style.top = `${positionY}px`;
}

setInterval(moveBall, 10);
