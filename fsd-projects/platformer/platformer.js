$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1150, 650, 190, 10, "red");
createPlatform(100, 650, 190, 10, "red");
createPlatform(500,550,70,10, "black");
createPlatform(200,450,90,10, "black");
createPlatform(750,450,90,10, "black");
createPlatform(500,320,90,10, "black");
createPlatform(100,240,190,10, "black");
createPlatform(850,240,190,10, "black");
createPlatform(1250,150,190,10, "green");
createPlatform(1150, 430, 190, 10, "black");
createPlatform(1000,550,70,10, "black");




    // TODO 3 - Create Collectables

createCollectable("database", 930, 10, 0, 0.7);
createCollectable("database", 170, 10, 0, 0.7);
createCollectable("database", 530, 50, 0, 0.7);
createCollectable("database", 1350, 210, 0, 0.7);
createCollectable("database", 1390, 0, 0, 0.7);
    
    // TODO 4 - Create Cannons


    createCannon("right", 770, 2000);
    createCannon("top", 610, 3500);
    createCannon("left", 300, 5000);
    createCannon("top", 1390, 1700);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
