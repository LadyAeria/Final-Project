let mode = "title";

//font
let mdr;

// characters/stages
var denial;
var anger;
var bargain;
var depression;
var acceptance;

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

var aoneScreen = 0;
var atwoScreen = 0;

function preload() {
  mask = loadImage("mask.png");
  deny = loadImage("denial.png");
  angry = loadImage("anger.png");
  bargaining = loadImage("bargain.png");
  depress = loadImage("depression.png");
  accept = loadImage("acceptance.png");

  mdr = loadFont("MeteoraDemoRegular-nMEV.ttf");
}

function setup() {
  createCanvas(500, 500);

  dchoice1 = new Clickable();
  dchoice1.locate(width * 0.1, height * 0.25);
  dchoice1.resize(400, 50);
  dchoice1.text = "Choice 1";
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
  dchoice2.locate(width * 0.1, height * 0.4);
  dchoice2.resize(400, 50);
  dchoice2.text = "Choice 2";
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
  anchoice1.locate(width * 0.1, height * 0.25);
  anchoice1.resize(400, 50);
  anchoice1.text = "Choice 1";
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
  anchoice2.locate(width * 0.1, height * 0.4);
  anchoice2.resize(400, 50);
  anchoice2.text = "Choice 2";
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
  bchoice1.locate(width * 0.1, height * 0.25);
  bchoice1.resize(400, 50);
  bchoice1.text = "Choice 1";
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
  bchoice2.locate(width * 0.1, height * 0.4);
  bchoice2.resize(400, 50);
  bchoice2.text = "Choice 2";
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
  dpchoice1.locate(width * 0.1, height * 0.25);
  dpchoice1.resize(400, 50);
  dpchoice1.text = "Choice 1";
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
  dpchoice2.locate(width * 0.1, height * 0.4);
  dpchoice2.resize(400, 50);
  dpchoice2.text = "Choice 2";
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

  achoice1 = new Clickable();
  achoice1.locate(width * 0.1, height * 0.25);
  achoice1.resize(400, 50);
  achoice1.text = "Choice 1";
  achoice1.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  achoice1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  achoice1.onPress = function () {
    aoneScreen = 1;
    achoiceone();
  };

  achoice2 = new Clickable();
  achoice2.locate(width * 0.1, height * 0.4);
  achoice2.resize(400, 50);
  achoice2.text = "Choice 2";
  achoice2.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  achoice2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  achoice2.onPress = function () {
    atwoScreen = 1;
    achoicetwo();
  };

  //Character One
  denial = new Clickable();
  denial.locate(90, 100);
  denial.resize(100, 100);
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
  anger.locate(310, 100);
  anger.resize(100, 100);
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
  bargain.locate(30, 250);
  bargain.resize(100, 100);
  bargain.text = "B a r g a i n";
  bargain.onHover = function () {
    this.color = "#FFE475";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bargain.onOutside = function () {
    this.color = "#98FAB9";
    this.noTint = true;
  };
  bargain.onPress = function () {
    bargainScreen = 1;
    closeStage();
  };

  //Character Four
  depression = new Clickable();
  depression.locate(370, 250);
  depression.resize(100, 100);
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
  acceptance.locate(200, 370);
  acceptance.resize(100, 100);
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
  artStatement.locate(390, 440);
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
  info.locate(10, 440);
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
    case "as1":
      achoiceone();
      break;
    case "as2":
      achoicetwo();
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
    aoneScreen = 0;
    atwoScreen = 0;
    
  } else if (key === "n" || key === "N") {
    mode = "rules";
  }
}

function titleScreen() {
  background(255, 229, 168);
  image(mask, 0, 0);
  mask.resize(500, 500);
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(35);
  textAlign(CENTER);
  textFont(mdr);
  text("How Are You          ?", width * 0.5, height * 0.33);
  fill(0);
  line(310, 182, 440, 182);
  fill(141, 162, 184);
  text("Feeling", width * 0.75, height * 0.33);
  fill(0);
  textSize(25);
  text('Press "n" to read instructions', width * 0.5, height * 0.66);
  text('OR press "s" to start', width * 0.5, height * 0.73);
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
  text("Instructions", width * 0.5, height * 0.33);
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
  text("But for those wondering the usual order:", width * 0.5, height * 0.135);
  text(
    "Denial -> Anger -> Bargain -> Depression -> Acceptance",
    width * 0.5,
    height * 0.17
  );
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
    deny.resize(500, 500);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("No...this isn't happening. They're", 250, 400);
    text("not gone!", 250, 430);
    textSize(15);
    text("Press s to return", 250, 490);
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
    angry.resize(600, 600);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("Why did you leave me?!", 250, 400);
    text("Why'd you leave me here to suffer alone?!", 250, 430);
    textSize(15);
    text("Press s to return", 250, 490);
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
    bargaining.resize(600, 600);
    textBox();
    textSize(15);
    fill(0);
    textAlign(CENTER);
    text("...I'll do this, but I'm not doing anything more.", 250, 400);
    textSize(15);
    text("Press s to return", 250, 490);
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
    depress.resize(600, 600);
    textBox();
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("...", 250, 400);
    textSize(15);
    text("Press s to return", 250, 490);
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
    image(accept, -50, 0);
    accept.resize(600, 600);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("It's better to move on instead", 250, 400);
    text("of staying in the past. It's what", 250, 425);
    text("they would've wanted for me.", 250, 450);
    textSize(15);
    text("Press s to return", 250, 490);
    textSize(20);
    text("Acceptance", width * 0.25, height * 0.73);

    achoice1.draw();
    achoice2.draw();
    if (achoice1.onPress) {
      mode = "as1";
    }
    if (aoneScreen == 1) {
      achoiceone();
    }
    if (achoice2.onPress) {
      mode = "as2";
    }
    if (atwoScreen == 1) {
      achoicetwo();
    }
  }
}

function artistStatement() {
  if (artStatement.onPress) {
    mode = "artSta";
  }
  if (statementScreen == 1) {
    background(255, 229, 168);
    strokeWeight(5);
    stroke(255);
    fill(0);
    textSize(35);
    textAlign(CENTER);
    textFont(mdr);
    text("Artist Statement", width * 0.5, height * 0.33);
  }
}

function ending() {
  if (info.onPress) {
    mode = "end";
  }
  if (infoScreen == 1) {
    background(255, 229, 168);
    strokeWeight(5);
    stroke(255);
    fill(0);
    textSize(35);
    textAlign(CENTER);
    textFont(mdr);
    text("Info page", width * 0.5, height * 0.33);
  }
}

function textBox() {
  fill(255, 255, 255, 150);
  rect(50, 370, 400, 100, 20);
}

function dchoiceone() {
  if (doneScreen == 1) {
    background(170, 163, 199);
    image(deny, 10, 0);
    deny.resize(500, 500);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("Choice one", 250, 400);
    textSize(15);
    text("Press s to return", 250, 490);
    textSize(20);
    text("Denial", width * 0.22, height * 0.73);
  }
}

function dchoicetwo() {
  if (dtwoScreen == 1) {
    background(170, 163, 199);
    image(deny, 10, 0);
    deny.resize(500, 500);
    textBox();
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("Choice two", 250, 400);
    textSize(15);
    text("Press s to return", 250, 490);
    textSize(20);
    text("Denial", width * 0.22, height * 0.73);
  }
}

function anchoiceone() {
  background(181, 140, 118);
  image(angry, -60, -100);
  angry.resize(600, 600);
  textBox();
  textSize(15);
  fill(0);
  textAlign(CENTER);
  text("Angry 1", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Anger", width * 0.22, height * 0.73);
}

function anchoicetwo() {
  background(181, 140, 118);
  image(angry, -60, -100);
  angry.resize(600, 600);
  textBox();
  textSize(15);
  fill(0);
  textAlign(CENTER);
  text("Angry 2", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Anger", width * 0.22, height * 0.73);
}

function bchoiceone() {
  background(158, 166, 146);
  image(bargaining, -50, 0);
  bargaining.resize(600, 600);
  textBox();
  textSize(15);
  fill(0);
  textAlign(CENTER);
  text("bargain 1", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Bargaining", width * 0.25, height * 0.73);
}

function bchoicetwo() {
  background(158, 166, 146);
  image(bargaining, -50, 0);
  bargaining.resize(600, 600);
  textBox();
  textSize(15);
  fill(0);
  textAlign(CENTER);
  text("bargain 2", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Bargaining", width * 0.25, height * 0.73);
}

function dpchoiceone() {
  background(0, 0, 0);
  image(depress, -50, 0);
  depress.resize(600, 600);
  textBox();
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("depressed 1", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Depression", width * 0.25, height * 0.73);
}

function dpchoicetwo() {
  background(0, 0, 0);
  image(depress, -50, 0);
  depress.resize(600, 600);
  textBox();
  textSize(30);
  fill(255);
  textAlign(CENTER);
  text("depressed 2", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Depression", width * 0.25, height * 0.73);
}

function achoiceone() {
  background(255, 255, 255);
  image(accept, -50, 0);
  accept.resize(600, 600);
  textBox();
  textSize(20);
  fill(0);
  textAlign(CENTER);
  text("accept 1", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Acceptance", width * 0.25, height * 0.73);
}

function achoicetwo() {
  background(255, 255, 255);
  image(accept, -50, 0);
  accept.resize(600, 600);
  textBox();
  textSize(20);
  fill(0);
  textAlign(CENTER);
  text("accept 2", 250, 400);
  textSize(15);
  text("Press s to return", 250, 490);
  textSize(20);
  text("Acceptance", width * 0.25, height * 0.73);
}
