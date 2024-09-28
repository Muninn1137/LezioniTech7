const ball = document.querySelector(".ball");
let positionX = 0;
let positionY = 0;
let velocityX = 40;  
let velocityY = 40;  

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const ballBorder = ball.getBoundingClientRect();


function moveBallKeys() {
    document.addEventListener("keydown", (event) => {
        switch(event.key) {
            case "a":
                positionX -= velocityX; 
                if (positionX < 0) {
                    positionX = 0;
                }
                break;
            case "d":
                positionX += velocityX;
                if (positionX + ballBorder.width > screenWidth) {
                    positionX = screenWidth - ballBorder.width;
                }
                break;
            case "w":
                positionY -= velocityY;
                if (positionY < 0) {
                    positionY = 0;
                }
                break;
            case "s":
                positionY += velocityY;
                if (positionY + ballBorder.height > screenHeight) {
                    positionY = screenHeight - ballBorder.height;
                }
                break;
        }
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    });
}

moveBallKeys();