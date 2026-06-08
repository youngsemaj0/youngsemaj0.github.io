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
    toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(500, 575, 40, 290,);
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(650, 600, 45, 450,);
    createPlatform(300, 650, 40, 325);
    createPlatform(900, 550, 60, 225);
    createPlatform(1100, 500, 35, 280);




    // TODO 3 - Create Collectables

    createCollectable("steve", 300, 575, 0.5, 0.7);
    createCollectable("diamond", 500, 500, 0.5, 0.5);
    createCollectable("database", 1350, 100, 0.5, 0.7);
    createCollectable("max", 650, 500, 0.6, 0.7);
    createCollectable("kennedi", 900, 300, 0.5, 0.7);
    createCollectable("grace", 1100, 300, 0.5, 0.7);



    
    // TODO 4 - Create Cannons

    createCannon("top", 400, 1150);
    createCannon("right", 300, 1150);
    createCannon("bottom", 350, 1175);
    createCannon("left", 400, 1100);
    createCannon("bottom", 1250, 1085)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
