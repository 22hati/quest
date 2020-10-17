//variables for images and characters
var forest,idle,run,jump,fall,player,gImg;

//loading images and animations
function preload() {
    forest = loadImage("background.jpg");
    gImg = loadImage("ground.png");
}

//seting canvas and characters and objects
function setup() {
    createCanvas(displayWidth, displayHeight);

    //background
    background1 = createSprite(displayWidth/2,displayHeight/2);
    background1.addImage(forest);
    background1.scale = 3;

    //player settings
    player = createSprite(displayWidth/2,displayHeight-300,40,80);

    //ground settingd
    ground = createSprite(displayWidth/2-300,displayHeight-40,displayWidth,80);
    ground.addImage(gImg);
    ground.scale = 1.8;

    //ground
    ground2 = createSprite(displayWidth-170,displayHeight-40,displayWidth,80);
    ground2.addImage(gImg);
    ground2.scale = 1.8;
}

//drawing the sprites
function draw() {

    //background
    background("white");

    //statements for side movement
    if(keyDown("RIGHT_ARROW")) {
        player.velocityX = 9;
    }
    
    if(keyDown("LEFT_ARROW")) {
        player.velocityX = -9;
    }

    //friction
    player.velocityX = player.velocityX*0.7;

    //collision
    player.collide(ground);
    player.collide(ground2);

    //gravity and collision
    if(player.isTouching(ground)) {
        player.velocityY = 0;
    }else {
        player.velocityY = player.velocityY+0.8;
    }

    //jump
    if(keyDown("UP_ARROW")) {
        player.velocityY = -10;
    }

    //scrolling ground
    ground.velocityX = player.velocityX*-1;
    ground2.velocityX = player.velocityX*-1;

    //scrolling background
    background1.velocityX = player.velocityX/8*-1;
    
    //reset
    player.x = displayWidth/2;

    //ground collider
    ground.setCollider("rectangle",0,10,480,35);
    ground2.setCollider("rectangle",0,10,480,35);

    //draw sprites
    drawSprites();
}