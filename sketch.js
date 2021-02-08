var femaleD, maleD;
var report1;
var femaleB1, maleB1, button;
var bedroom;
var bookSprite, book;
var john, jenna, greta;
var forensic, doctor, lab, doctorDialogue;
var chatbox;
var sec;
var gameState = 0;
var femaleDChosen = 0;
var maleDChosen = 0;

function setup(){
    createCanvas(displayWidth,displayHeight);

    femaleD = createSprite(displayWidth/2-350,displayHeight/2);
    femaleD.addImage(femaleDImg);
    femaleD.scale = 0.8;
    femaleD.visible = false;
    
    maleD = createSprite(displayWidth/2+350,displayHeight/2);
    maleD.addImage(maleDImg);
    maleD.scale = 0.8;

    report1 = createSprite(displayWidth/2+300,displayHeight/2-50);
    report1.addImage(report1Img);
    report1.scale = 1.3;
    report1.visible = false;

    femaleB1 = createSprite(displayWidth/2-200, displayHeight/2-350);
    femaleB1.visible = false;
    femaleB1.addImage(femaleB1Img);
    
    maleB1 = createSprite(displayWidth/2+200, displayHeight/2-350);
    maleB1.visible = false;
    maleB1.addImage(maleB1Img);

    bedroom = createSprite(displayWidth/2+100,displayHeight/2-5);
    bedroom.addImage(bedroomImg);
    bedroom.scale = 2;
    bedroom.visible = false;

    bookSprite = createSprite(displayWidth/2+480,displayHeight/2-40,10,50);
    bookSprite.visible = false;

    book = createSprite(displayWidth/2+200,displayHeight/2);
    book.addImage(bookImg);
    book.scale = 1.8;
    book.visible = false;

    button = createSprite(displayWidth/2-600,displayHeight/2+200);
    button.addImage(femaleB1Img);
    button.scale = 0.8;
    button.visible = false;

    john = createSprite(displayWidth/2+150,displayHeight/2-50);
    john.addImage(johnImg);
    john.scale = 1.8;
    john.visible = false;

    forensic = createSprite(displayWidth/2+200,displayHeight/2);
    forensic.addImage(forensicImg);
    forensic.scale = 1;
    forensic.visible = false;

    doctor = createSprite(displayWidth/2+300,displayHeight/2+100);
    doctor.addImage(doctorImg);
    doctor.visible = false;

    lab = createSprite(displayWidth/2,displayHeight/2-60);
    lab.addImage(labImg);
    lab.scale = 2.6;
    lab.visible = false;

    doctorDialogue = createSprite(displayWidth/2-500, displayHeight/2+250);
    doctorDialogue.addImage(doctorDialogueImg);
    doctorDialogue.scale = 0.8
    doctorDialogue.visible = false;

    chatbox = createSprite(displayWidth/2+150, displayHeight/2-200);
    chatbox.addImage(chatboxImg);
    chatbox.visible = false;
}


function preload(){
    femaleDImg = loadImage("images/girl2.png");
    maleDImg = loadImage("images/boy.png");
    report1Img = loadImage("images/report1.png");
    femaleB1Img = loadImage("images/click_here.png");
    maleB1Img = loadImage("images/click_here.png");
    bedroomImg = loadImage("images/bed.png");
    bookImg = loadImage("images/book.png");
    johnImg = loadImage("images/mug shots/john.png");
    forensicImg = loadImage("images/forensic.png");
    doctorImg = loadImage("images/doctor.png");
    labImg = loadImage("images/lab.jpg");
    doctorDialogueImg = loadImage("images/doctor_dialogue.png");
    chatboxImg = loadImage("images/chatbox.png");
}

function draw(){

    //initial screen
    if(gameState===0){
        background(247, 225, 228);
        fill("black");
        textSize(50);
        text("CHOOSE YOUR CHARACTER", displayWidth/2-350,displayHeight/2-350);
        femaleD.visible = true;

        //when the female sprite is clicked
        if(mousePressedOver(femaleD)){
            report1.visible = true;
            maleD.visible = false;
            background(188, 217, 212);
            femaleB1.visible = true;
            femaleDChosen =1;
            gameState = 1;
        }
        //when male sprite is clicked
        if(mousePressedOver(maleD)){
            report1.x = displayWidth/2-300;
            report1.visible = true;
            femaleD.visible = false;
            background(188, 217, 212);
            maleB1.visible = true;
            maleDChosen = 1;
            gameState = 1; 
        }
    }
    else if(gameState === 1){
        if(mousePressedOver(femaleB1)){
            femaleD.visible = false;
            report1.visible = false;
            femaleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
            
            gameState = 2;
        }
        if(mousePressedOver(maleB1)){
            maleD.visible = false;
            report1.visible = false;
            maleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
           
            gameState = 2;
        }
    }
    
    else if(gameState === 2){
        forensic.visible = false;
        if(mousePressedOver(bookSprite)){
            background(231, 214, 222);
            bedroom.visible = false;
            book.visible = true;
            femaleB1.visible = false;
            maleB1.visible = false;
            textSize(55);
            fill("black");
            text("Great job!" +'\n'+ "A new suspect" +'\n'+ "'John Richmond'" +'\n'+ "has been" +'\n'+ "discovered!",displayWidth/2-680,displayHeight/2-200);
            button.visible = true;
            
            gameState = 3;
        }
    }

    else if(gameState === 3 && mousePressedOver(button)){
            background(16, 64, 108);
            john.visible = true;
            button.visible = false;
            textSize(28);
            fill("white");
            strokeWeight(2);
            text("John was" +'\n'+ "Ronald's music" +'\n'+ "producer." +'\n'+ "Click on him" +'\n'+ "to move on.", displayWidth/10-100,displayHeight/4+50);
            
            gameState = 4;
    }

    else if(gameState === 4 && mousePressedOver(john)){
            john.visible = false;
            john.destroy();
            book.visible = false;
            lab.visible = true;
            forensic.visible = true;
            doctorDialogue.visible = true;
            forensic.depth = lab.depth;
            forensic.depth = forensic.depth+1;
            doctorDialogue.depth = forensic.depth;
            doctorDialogue.depth = forensic.depth+1;
            button.visible = true;
            button.x = displayWidth/2-300;
            button.y = displayHeight/2-250;
            button.depth = doctorDialogue.depth;
            button.depth++;
            gameState = 5;
        }

    else if(gameState === 5 && mousePressedOver(button)){
        background(247, 225, 228);
        if(femaleDChosen === 1){
            femaleD.visible = true;
            femaleD.scale = 1.4;
            femaleD.y = displayHeight/2+300;
            forensic.visible = false;
            doctorDialogue.visible = false;
            lab.visible = false;
            chatbox.visible = true;
            chatbox.scale = 3.5;
            textSize(205);
            fill("black");
            text("...", displayWidth/2+50, displayHeight/2-230);
            button.destroy();
            
            sec = setInterval(dialogue,2000);
            if(sec === 2000){    
                dialogue();
            }
        }
    }

    drawSprites();

}

function dialogue(){
    femaleD.visible = true;
    femaleD.scale = 1.4;
    femaleD.y = displayHeight/2+300;
    textSize(75);
    fill("black");
    text("Jenna Davis was" +'\n'+ "the victim's" +'\n'+ "long known nemesis.", displayWidth/2+50, displayHeight/2-230);
    textSize(205);
    fill(247, 225, 228);
    text("...", displayWidth/2+50, displayHeight/2-230);
}
    
    