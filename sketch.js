let mode = "title";
let myMasks = [];
let facemask = [];
let myRage = [];
let button;

//font/images
var maskFigure;
var scratch;
var deny;
var denyTwo;
var angry;
var angryTwo;
var bargaining;
var bargainingTwo;
var depress;
var accept;
var acceptTwo;
var happymask;
var angrymask;
var frownmask;
var blankmask;
var sadmask;
var tickmark;

let mdr;

// characters/stages
var denial;
var anger;
var bargain;
var depression;
var acceptance;
var artStatement;
var info;

var denialScreen = 0;
var angerScreen = 0;
var bargainScreen = 0;
var depressionScreen = 0;
var acceptanceScreen = 0;

var statementScreen = 0;
var infoScreen = 0;

//2nd dialogue screen
var doneScreen = 0;
var dtwoScreen = 0;

var anoneScreen = 0;
var antwoScreen = 0;

var boneScreen = 0;
var btwoScreen = 0;

var dponeScreen = 0;
var dptwoScreen = 0;

var aconeScreen = 0;
var actwoScreen = 0;

//choices 
var dchoice1;
var dchoice2;
var anchoice1;
var anchoice2;
var bchoice1;
var bchoice2;
var dpchoice1;
var dpchoice2;
var acchoice1;
var acchoice2;

function preload() {
  maskFigure = loadImage("masked figure.png");
  scratch = loadImage("pngfind.com-emo-hair-png-9400.png");
  deny = loadImage("denial character.png");
  denyTwo = loadImage("denial character 2.png");
  angry = loadImage("anger character.png");
  angryTwo = loadImage("angry character 2.png");
  bargaining = loadImage("bargain character.png");
  bargainingTwo = loadImage("bargain character 2.png");
  depress = loadImage("depression character.png");
  accept = loadImage("acceptance character.png");
  acceptTwo = loadImage("acceptance character 2.png")
  
  happymask = loadImage("mask happy.png");
  angrymask = loadImage("mask angry.png");
  blankmask = loadImage("mask blank.png");
  sadmask = loadImage("mask sad.png");
  frownmask = loadImage("mask frown.png");
  tickmark = loadImage("anger-symbol_1f4a2.png");

  facemasks = [happymask, angrymask, blankmask, sadmask, frownmask];
  mdr = loadFont("MeteoraDemoRegular-nMEV.ttf");
}

function setup() {
  var cnv = createCanvas(800, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  //Character One
  denial = new Clickable();
  denial.image = happymask;
  denial.locate(width * 0.03, height * 0.4);
  denial.resize(140, 140);
  denial.cornerRadius = 30;
  denial.textColor = "#FFFFFF";
  denial.text = "D e n i a l";
  denial.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  denial.onOutside = function () {
    this.color = "#805EE4";
    this.noTint = true;
  };
  denial.onPress = function () {
    denialScreen = 1;
    closeStage();
  };

  //Character Two
  anger = new Clickable();
  anger.image = angrymask;
  anger.locate(width * 0.22, height * 0.4);
  anger.resize(140, 140);
  anger.cornerRadius = 30;
  anger.textColor = "#FFFFFF";
  anger.text = "A n g e r";
  anger.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  anger.onOutside = function () {
    this.color = "#FF3434";
    this.noTint = true;
  };
  anger.onPress = function () {
    angerScreen = 1;
    closeStage();
  };

  //Character Three
  bargain = new Clickable();
  bargain.image = frownmask;
  bargain.locate(width * 0.41, height * 0.4);
  bargain.resize(140, 140);
  bargain.cornerRadius = 30;
  bargain.textColor = "#FFFFFF";
  bargain.text = "B a r g a i n";
  bargain.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bargain.onOutside = function () {
    this.color = "#7CD89B";
    this.noTint = true;
  };
  bargain.onPress = function () {
    bargainScreen = 1;
    closeStage();
  };

  //Character Four
  depression = new Clickable();
  depression.image = sadmask;
  depression.locate(width * 0.6, height * 0.4);
  depression.resize(140, 140);
  depression.cornerRadius = 30;
  depression.textColor = "#FFFFFF";
  depression.text = "D e p r e s s i o n";
  depression.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  depression.onOutside = function () {
    this.color = "#005FFF";
    this.noTint = true;
  };
  depression.onPress = function () {
    depressionScreen = 1;
    closeStage();
  };

  //Character Five
  acceptance = new Clickable();
  acceptance.image = happymask;
  acceptance.locate(width * 0.79, height * 0.4);
  acceptance.resize(140, 140);
  acceptance.cornerRadius = 30;
  acceptance.textColor = "#FFFFFF";
  acceptance.text = "A c c e p t a n c e";
  acceptance.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  acceptance.onOutside = function () {
    this.color = "#FF97D5";
    this.noTint = true;
  };
  acceptance.onPress = function () {
    acceptanceScreen = 1;
    closeStage();
  };

  artStatement = new Clickable();
  artStatement.locate(width * 0.85, height * 0.91);
  artStatement.resize(100, 50);
  artStatement.text = "Artist Statement";
  artStatement.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  artStatement.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  artStatement.onPress = function () {
    statementScreen = 1;
    artistStatement();
  };

  info = new Clickable();
  info.locate(width * 0.02, height * 0.91);
  info.resize(100, 50);
  info.text = "More Information";
  info.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  info.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  info.onPress = function () {
    infoScreen = 1;
    ending();
  };

  //choices for each stage
  dchoice1 = new Clickable();
  dchoice1.locate(width * 0.25, height * 0.25);
  dchoice1.resize(400, 50);
  dchoice1.text = "Who's not gone?";
  dchoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  dchoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dchoice1.onPress = function () {
    doneScreen = 1;
    dchoiceone();
  };

  dchoice2 = new Clickable();
  dchoice2.locate(width * 0.25, height * 0.4);
  dchoice2.resize(400, 50);
  dchoice2.text = "Hey, are you ok?";
  dchoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  dchoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dchoice2.onPress = function () {
    dtwoScreen = 1;
    dchoicetwo();
  };

  anchoice1 = new Clickable();
  anchoice1.locate(width * 0.25, height * 0.25);
  anchoice1.resize(400, 50);
  anchoice1.text = "Um...you ok du-";
  anchoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  anchoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  anchoice1.onPress = function () {
    anoneScreen = 1;
    anchoiceone();
  };

  anchoice2 = new Clickable();
  anchoice2.locate(width * 0.25, height * 0.4);
  anchoice2.resize(400, 50);
  anchoice2.text = "(•_•)";
  anchoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  anchoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  anchoice2.onPress = function () {
    antwoScreen = 1;
    anchoicetwo();
  };

  bchoice1 = new Clickable();
  bchoice1.locate(width * 0.25, height * 0.25);
  bchoice1.resize(400, 50);
  bchoice1.text = "Would it have made a difference?";
  bchoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bchoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bchoice1.onPress = function () {
    boneScreen = 1;
    bchoiceone();
  };

  bchoice2 = new Clickable();
  bchoice2.locate(width * 0.25, height * 0.4);
  bchoice2.resize(400, 50);
  bchoice2.text = "Hey, hey, pull yourself together";
  bchoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bchoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bchoice2.onPress = function () {
    btwoScreen = 1;
    bchoicetwo();
  };

  dpchoice1 = new Clickable();
  dpchoice1.locate(width * 0.25, height * 0.25);
  dpchoice1.resize(400, 50);
  dpchoice1.text = "You...all right?";
  dpchoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  dpchoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dpchoice1.onPress = function () {
    dponeScreen = 1;
    dpchoiceone();
  };

  dpchoice2 = new Clickable();
  dpchoice2.locate(width * 0.25, height * 0.4);
  dpchoice2.resize(400, 50);
  dpchoice2.text = "Are you ok?";
  dpchoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  dpchoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dpchoice2.onPress = function () {
    dptwoScreen = 1;
    dpchoicetwo();
  };

  acchoice1 = new Clickable();
  acchoice1.locate(width * 0.25, height * 0.25);
  acchoice1.resize(400, 50);
  acchoice1.text = "So what now then?";
  acchoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  acchoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  acchoice1.onPress = function () {
    aconeScreen = 1;
    acchoiceone();
  };

  acchoice2 = new Clickable();
  acchoice2.locate(width * 0.25, height * 0.4);
  acchoice2.resize(400, 50);
  acchoice2.text = "I'm glad you're feeling better.";
  acchoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  acchoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  acchoice2.onPress = function () {
    actwoScreen = 1;
    acchoicetwo();
  };
  
  infoButton = new Clickable();
  infoButton.locate(width * 0.44, height * 0.6);
  infoButton.resize(100, 50);
  infoButton.text = "Link";
  infoButton.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  infoButton.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  infoButton.onPress = function () {
    window.open('https://www.cruse.org.uk/understanding-grief/effects-of-grief/five-stages-of-grief/', '_blank');
  };
  
  liveCode = new Clickable();
  liveCode.locate(width * 0.44, height * 0.6);
  liveCode.resize(100, 50);
  liveCode.text = "Link";
  liveCode.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  liveCode.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  liveCode.onPress = function () {
    window.open('https://github.com/LadyAeria/Final-Project', '_blank');
  };
  
    for (let i = 0; i < 20; i++) {
    let x = random(width*0.05,width*0.925);
    let y = random(height*0.05,height*0.925);
    myMasks[i] = new mask(x,y);
  }
  for (let i = 0; i < 20; i++) {
    let x = random(width*0.05,width*0.925);
    let y = random(height*0.05,height*0.925);
    myRage[i] = new rage(x,y);
  }
}

function draw() {
  switch (mode) {
    case "title":
      titleScreen();
      break;
    case "rules":
      instructions();
      break;
    case "main":
      mainStage();
      break;
    case "close":
      closeStage();
      break;
    case "ds1":
      dchoiceone();
      break;
    case "ds2":
      dchoicetwo();
      break;
    case "ans1":
      anchoiceone();
      break;
    case "ans2":
      anchoicetwo();
      break;
    case "bs1":
      bchoiceone();
      break;
    case "bs2":
      bchoicetwo();
      break;
    case "dps1":
      dpchoiceone();
      break;
    case "dps2":
      dpchoicetwo();
      break;
    case "acs1":
      acchoiceone();
      break;
    case "acs2":
      acchoicetwo();
      break;
    case "artSta":
      artistStatement();
      break;
    case "end":
      ending();
      break;
  }
}

//press to start and go to main screen
function keyPressed() {
  if (key === "s" || key === "S") {
    mode = "main";
    denialScreen = 0;
    angerScreen = 0;
    bargainScreen = 0;
    depressionScreen = 0;
    acceptanceScreen = 0;

    statementScreen = 0;
    infoScreen = 0;

    doneScreen = 0;
    dtwoScreen = 0;
    anoneScreen = 0;
    antwoScreen = 0;
    boneScreen = 0;
    btwoScreen = 0;
    dponeScreen = 0;
    dptwoScreen = 0;
    aconeScreen = 0;
    actwoScreen = 0;
    
  } else if (key === "i" || key === "I") {
    mode = "rules";
  }
}

function titleScreen() {
  background(54, 55, 59);
  
  for (let i = 0;  i < 20; i++) {
    myMasks[i].display();
    myMasks[i].move();
  }
  
  image(maskFigure, 20, 0);
  maskFigure.resize(800, 800);
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  textFont(mdr);
  text("How Are You          ?", width * 0.5, height * 0.1);
  fill(141, 162, 184);
  text("Feeling", width * 0.72, height * 0.1);
  image(scratch, 475, 20);
  scratch.resize(200, 90);
  fill(0);
  textSize(25);
  text("Press S to start", width * 0.5, height * 0.79);
  text("Press I to view Instructions", width * 0.5, height * 0.83);
}

//instructions page
function instructions() {
  background(255, 229, 168);
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(35);
  textAlign(CENTER);
  textFont(mdr);
  text("Instructions", width * 0.5, height * 0.1);
  text("Press s to start", width * 0.5, height * 0.5);
  textSize(15);
  text("Life is unpredictable as it throws many curveballs such as accidents, fights, and", width * 0.5, height * 0.2);
  text("passings of loved ones. There are five stages, each representing a certain stage of grief.", width * 0.5, height * 0.22);
  text("Click any of them to interact with a character.", width * 0.5, height * 0.24)
  text("Whatever order you choose won’t affect the game as the stages of grief are non-linear.", width * 0.5, height * 0.26);
  text("and unpredictable.", width * 0.5, height * 0.28);
  text("Press s to return", width * 0.5, height * 0.99);
}

//main game screen
function mainStage() {
  background(255, 229, 168);
  strokeWeight(0);
  stroke(0);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text("Click on any of the stages!", width * 0.5, height * 0.1);
  textSize(15);
  text("The order:", width * 0.5, height * 0.14);
  text(
    "Denial -> Anger -> Bargain -> Depression -> Acceptance",
    width * 0.5,
    height * 0.17
  );
  text("Press I to view Instructions", width * 0.16, height * 0.03);
  
  denial.draw();
  anger.draw();
  bargain.draw();
  depression.draw();
  acceptance.draw();
  
  artStatement.draw();
  info.draw();
}

//close up interaction with selected character
function closeStage() {
  background(255, 229, 168);

  //character 1 close up
  if (denial.onPress) {
    mode = "close";
  }
  if (denialScreen == 1) {
    background(170, 163, 199);
    image(deny, 10, 0);
    deny.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("No...this isn't happening. They're", width * 0.5, height * 0.79);
    text("not gone!", width * 0.5, height * 0.82);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Denial", width * 0.22, height * 0.73);

    dchoice1.draw();
    dchoice2.draw();
    if (dchoice1.onPress) {
      mode = "ds1";
    }
    if (doneScreen == 1) {
      dchoiceone();
    }
    if (dchoice2.onPress) {
      mode = "ds2";
    }
    if (dtwoScreen == 1) {
      dchoicetwo();
    }
  }

  //character 2 interaction
  if (anger.onPress) {
    mode = "close";
  }
  // angerScreen = 1;
  if (angerScreen == 1) {
    background(181, 140, 118);
    image(angry, -60, -100);
    angry.resize(900, 900);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("Why did you leave me?!", width * 0.5, height * 0.79);
    text(
      "Why'd you leave me here to suffer alone?!",
      width * 0.5,
      height * 0.82
    );
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Anger", width * 0.22, height * 0.73);

    anchoice1.draw();
    anchoice2.draw();
    if (anchoice1.onPress) {
      mode = "ans1";
    }
    if (anoneScreen == 1) {
      anchoiceone();
    }
    if (anchoice2.onPress) {
      mode = "ans2";
    }
    if (antwoScreen == 1) {
      anchoicetwo();
    }
  }

  //character 3 interaction
  if (bargain.onPress) {
    mode = "close";
  }
  // bargainScreen = 1;
  if (bargainScreen == 1) {
    background(158, 166, 146);
    image(bargaining, -50, 0);
    bargaining.resize(900, 900);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text(
      "...What if I made it in time?",
      width * 0.5,
      height * 0.79
    );
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Bargaining", width * 0.25, height * 0.73);

    bchoice1.draw();
    bchoice2.draw();
    if (bchoice1.onPress) {
      mode = "bs1";
    }
    if (boneScreen == 1) {
      bchoiceone();
    }
    if (bchoice2.onPress) {
      mode = "bs2";
    }
    if (btwoScreen == 1) {
      bchoicetwo();
    }
  }

  //character 4 interaction
  if (depression.onPress) {
    mode = "close";
  }
  // depressionScreen = 1;
  if (depressionScreen == 1) {
    background(0, 0, 0);
    image(depress, -50, 0);
    depress.resize(900, 900);
    textBox();
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("...", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Depression", width * 0.25, height * 0.73);

    dpchoice1.draw();
    dpchoice2.draw();
    if (dpchoice1.onPress) {
      mode = "dps1";
    }
    if (dponeScreen == 1) {
      dpchoiceone();
    }
    if (dpchoice2.onPress) {
      mode = "dps2";
    }
    if (dptwoScreen == 1) {
      dpchoicetwo();
    }
  }

  //character 5 interaction
  if (acceptance.onPress) {
    mode = "close";
  }
  // acceptanceScreen = 1;
  if (acceptanceScreen == 1) {
    background(255, 255, 255);
    image(accept, 0, 0);
    accept.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("It's better to move on instead", width * 0.5, height * 0.79);
    text("of staying in the past. It's what", width * 0.5, height * 0.83);
    text("they would've wanted for me.", width * 0.5, height * 0.87);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Acceptance", width * 0.25, height * 0.73);

    acchoice1.draw();
    acchoice2.draw();
    if (aconeScreen == 1) {
      acchoiceone();
    }
    if (actwoScreen == 1) {
      acchoicetwo();
    }
  }
}

function artistStatement() {
  if (artStatement.onPress) {
    mode = "artSta";
  }
  if (statementScreen == 1) {
    background(255, 229, 168);
    liveCode.draw();
    strokeWeight(5);
    stroke(255);
    fill(0);
    textSize(35);
    textAlign(CENTER);
    textFont(mdr);
    text("Artist Statement", width * 0.5, height * 0.1);
    textSize(15);
    text("The concept of death always fascinated me especially when it comes to theories of", width * 0.5, height * 0.3);
    text("what happens after. but I decided to look into the stages of grief people affected by the passings", width * 0.5, height * 0.32);
    text("of close people for more understanding of what these people go through. I created this very", width * 0.5, height * 0.34);
    text("short visual novel interaction for users to explore and interact with characters going through", width * 0.5, height * 0.36);
    text("a certain stage of grief and choose from different dialogue options.", width * 0.5, height * 0.38);
    text("Click below to go to the live code!", width * 0.5, height * 0.5);
    text("Press s to return", width * 0.5, height * 0.99);
  }
}

function ending() {
  if (info.onPress) {
    mode = "end";
  }
  if (infoScreen == 1) {
    background(255, 229, 168);
    infoButton.draw();
    strokeWeight(5);
    stroke(255);
    fill(0);
    textSize(35);
    textAlign(CENTER);
    textFont(mdr);
    text("Info page", width * 0.5, height * 0.1);
    textSize(20);
    text("Dealing with grief is not always linear.", width * 0.5, height * 0.3);
    text("It can start at any stage at any time, some going through one stage", width *0.5, height*0.35);
    text("while others go through another said stage.", width *0.5, height*0.4);
    text("Click the link below for more information about the stages of grief.", width *0.5, height*0.45);
    text("(If clicking doesn't work, right click and 'open link to new tab')", width *0.5, height*0.5);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
  }
}

function dchoiceone() {
  if (doneScreen == 1) {
    background(170, 163, 199);
    image(denyTwo, 10, 0);
    denyTwo.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("This is just a dream! A dream...", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Denial", width * 0.22, height * 0.73);
  }
}

function dchoicetwo() {
  if (dtwoScreen == 1) {
    background(170, 163, 199);
    image(denyTwo, 10, 0);
    denyTwo.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("Yes...no...? I don't know!", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Denial", width * 0.22, height * 0.73);
  }
}

function anchoiceone() {
  if (anoneScreen == 1) {
    background(181, 140, 118);
    for (let i = 0;  i < 20; i++) {
    myRage[i].display();
    myRage[i].move();
  }
    image(angryTwo, -60, -100);
    angryTwo.resize(900, 900);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("GET THE F*** OUT!!! OUT!!!!!", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Anger", width * 0.22, height * 0.73);
  }
}

function anchoicetwo() {
  if (antwoScreen == 1) {
    background(181, 140, 118);
    image(angry, -60, -100);
    angry.resize(900, 900);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("(Maybe it's best to leave this one...)", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Anger", width * 0.22, height * 0.73);
  }
}

function bchoiceone() {
  if (boneScreen == 1) {
    background(158, 166, 146);
    image(bargainingTwo, -50, 0);
    bargainingTwo.resize(900, 900);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("I...I don't know...", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Bargaining", width * 0.25, height * 0.73);
  }
}

function bchoicetwo() {
  if (btwoScreen == 1) {
    background(158, 166, 146);
    image(bargainingTwo, -50, 0);
    bargainingTwo.resize(900, 900);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("B-But they could've lived! If only I could go back...", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Bargaining", width * 0.25, height * 0.73);
  }
}

function dpchoiceone() {
  if (dponeScreen == 1) {
    background(0, 0, 0);
    image(depress, -50, 0);
    depress.resize(900, 900);
    textBox();
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("...........", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Depression", width * 0.25, height * 0.73);
  }
}

function dpchoicetwo() {
  if (dptwoScreen == 1) {
    background(0, 0, 0);
    image(depress, -50, 0);
    depress.resize(900, 900);
    textBox();
    textSize(30);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("...Just leave me alone...", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Depression", width * 0.25, height * 0.73);
  }
}

function acchoiceone() {
  if (aconeScreen == 1) {
    background(255, 255, 255);
    image(acceptTwo, 0, 0);
    acceptTwo.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("Who knows. Maybe a little walk in the park to freshen up.", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Acceptance", width * 0.25, height * 0.73);
  }
}

function acchoicetwo() {
  if (actwoScreen == 1) {
    background(255, 255, 255);
    image(acceptTwo, 0, 0);
    acceptTwo.resize(800, 800);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("So am I.", width * 0.5, height * 0.79);
    textSize(15);
    text("Press s to return", width * 0.5, height * 0.99);
    textSize(20);
    text("Acceptance", width * 0.25, height * 0.73);
  }
}

//make transparent textbox for dialogue
function textBox() {
  fill(255, 255, 255, 150);
  rect(100, 600, 600, 175, 20);
}

function gotolink() {
	window.open('https://www.cruse.org.uk/understanding-grief/effects-of-grief/five-stages-of-grief/');
}

class mask {
  constructor (xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(0);
    this.s = random(0,0);
  }
  display() {
    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    let diffMasks = random(facemasks);
    diffMasks.resize(200,200);
    image(diffMasks, 0, 0);
    pop();

  }
  move() {
    this.t = this.t + this.s;
    this.mask++;
    if (this.ypos <= height *1.3)
      {
        this.ypos+= 2;
      }
    else
      {
        this.ypos = -height * 0.3;
      }
  }
}

class rage {
  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(360));
    this.s = random(-100,100);
  }
  display() {
    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    image(tickmark, 0,0);
    pop();

  }
  move() {
    this.t = this.t + this.s;
    this.rage++;
    if (this.ypos <= height *1.3)
      {
        this.ypos+= 2;
      }
    else
      {
        this.ypos = -height * 0.3;
      }
  }
}
