// Get the player element from the DOM
var player = document.getElementById("player");

// Set the starting position of the player
var playerX = 225;
var playerY = 450;

// Add an event listener to the document to detect arrow key presses
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && playerX > 0) {
    // Move the player left if the left arrow key is pressed and the player is not at the left edge of the game container
    playerX -= 10;
  } else if (event.key === "ArrowRight" && playerX < 450) {
    // Move the player right if the right arrow key is pressed and the player is not at the right edge of the game container
    playerX += 10;
  }

  // Update the player's position on the screen
  player.style.left = playerX + "px";
});

// Add obstacles to the game container at random intervals
setInterval(function() {
  var obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacle.style.left = Math.floor(Math.random() * 450) + "px";
  document.getElementById("game-container").appendChild(obstacle);

  // Move each obstacle down the screen every 50 milliseconds
  var obstacleInterval = setInterval(function() {
    var obstacleY = obstacle.offsetTop;
    obstacleY += 10;
    obstacle.style.top = obstacleY + "px";

    // Check for collision between the player and the obstacle
    if (obstacleY + 50 >= playerY && obstacleY <= playerY + 50 && parseInt(obstacle.style.left) >= playerX - 50 && parseInt(obstacle.style.left) <= playerX + 50) {
      clearInterval(obstacleInterval);
      alert("Game over!");
    }
  }, 50);
}, Math.floor(Math.random() * 3000) + 1000);
