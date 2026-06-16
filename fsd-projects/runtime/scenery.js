// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {

  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{ x: 400, width: 100, height: 300, speedX: -4 },
       { x: 300, width: 150, height: 200, speedX: -4 },
        { x: 500, width: 110, height: 200, speedX: -4 },
         { x: 900, width: 100, height: 250, speedX: -4 },
          { x: 900, width: 200, height: 100, speedX: -4 }, 
          { x: 1050, width: 90, height: 200, speedX: -4 },
          { x: 800, width: 150, height: 300, speedX: -4 },
          { x: 50, width: 120, height: 120, speedX: -4 },
           { x: 10, width: 100, height: 300, speedX: -4 }, 
           { x: 230, width: 100, height: 100, speedX: -4 },
            { x: 180, width: 90, height: 200, speedX: -4 },
             { x: 740, width: 100, height: 250, speedX: -4 }, 
             { x: 680, width: 80, height: 150, speedX: -4 }, 
             { x: 580, width: 90, height: 350, speedX: -4 }, 
             { x: 1200, width: 80, height: 310, speedX: -4 },
              { x: 1260, width: 110, height: 230, speedX: -4 }, 
              { x: 1350, width: 100, height: 150, speedX: -4},
              { x: 1150, width: 80, height: 150, speedX: -4 }, 
              { x: 650, width: 550, height: 7000, speedX: -4 },
               { x: 200, width: 300, height: 7000, speedX: -4 }, 
               { x: -100, width: 200, height: 7000, speedX: -4 }],
     
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 700, width: 50, height: 150, speedX: -2.5 },
       { x: 150, width: 50, height: 150, speedX: -2.5 }, 
       { x: 1200, width: 50, height: 150, speedX: -2.5 }],
  },
};
