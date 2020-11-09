var mom1, mom2, mom1i, mom2i;
var   colorPicker, form,game,player;
var boy, boy1,girl,girl1,man,man1,women,women1, mic1, mic2;
var brother,brother1,father,father1,grandma,grandma1,grandpa,grandpa1,mother,mother1,sister,sister1;
var database, next, sel, cross , crossi, pick, nexti, send,send1, send2;
var seen="seen";
var gameState=0;
var input11, input22;
var rand, rand1, rand2,rand3,rand4,rand5,rand6,rand7,rand8,rand9,rand10;
var rands, rand11, rand22,rand33,rand44,rand55,rand66,rand77,rand88,rand99,rand1010;
var rec, mic ,file;
var state=0;
var last ,last1,x,y,d;
var x1,y1,d1;
var textMore, choose1;
var test1="false";
var test2 ="false";
var test3="false";
var test4="false";

function preload(){
mom1i=loadImage("images/moms ear img 1.png");
mom2i=loadImage("images/moms ear1.png");
boy1=loadImage("images/boy.png");
man1=loadImage("images/man.png");
girl1=loadImage("images/girl.png");
women1=loadImage("images/women.png");
father1=loadImage("images/father.png");
mother1=loadImage("images/mother.png");
sister1=loadImage("images/sister.png");
brother1=loadImage("images/brother.png");
grandma1=loadImage("images/grandma.png");
grandpa1=loadImage("images/grandpa.png");
crossi=loadImage("images/cross.png");
nexti=loadImage("images/next.png");
send1=loadImage("images/3012934-200.png");
mic1=loadImage("images/mic.png");
last1=loadImage("images/last.png");
choose1=loadImage("images/choose.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
input2=createInput("mommy");
input2.position(displayWidth/2-100,displayHeight/2+180); 
input2.hide();
input1=createInput("child");
input1.hide();
input1.position(displayWidth/2-100,displayHeight/2+100); 
     textBox=createInput("type something");
     textBox.position(displayWidth/2-200,displayHeight/2+250)
  textBox.size(displayWidth/2-410);
     textBox2=createInput("");
     textBox2.position(displayWidth/2-200,displayHeight/2+250)
 textBox2.size(displayWidth/2-410);
       bye=createButton("bye");
       bye.position(displayWidth/2-240,displayHeight/2+250);

textBox.hide();
textBox2.hide();
bye.hide();
      
next2=createSprite(displayWidth/2+600,displayHeight/2+150,10,30);
next2.visible=false;
next2.addImage(nexti);
next2.scale=0.2;
//next2.debug=true;
next2.setCollider("rectangle",0,-30,300,170)

mic=new p5.AudioIn();
mic.start();
rec=new p5.SoundRecorder();
rec.setInput(mic);
file= new p5.SoundFile();


sel=createSelect();
sel.size(200)
sel.option("happy feelings");
sel.option("what's special today");
sel.option('random Q&A');
sel.option('sad feelings');
sel.option('angry feelings');
sel.option('share an idea');
sel.option('complain');
sel.option('need motivation');
sel.option('proud movement');
sel.option('scary feelings');
sel.option('nervous feelings');
sel.option('need sympathy'); 
sel.hide();
sel.position(displayWidth/2-100,displayHeight/2-20);



game=new Game();
game.start();
database=firebase.database();
mom1=createSprite(displayWidth/2,displayHeight/2-250,10,10);
mom1.addImage(mom1i);
mom1.scale=0.7;
mom2=createSprite(displayWidth/2-50,displayHeight/2+20,10,10)
mom2.addImage(mom2i);
mom2.scale=0.5;
pick=createSprite(displayWidth/2,displayHeight/2-150);
pick.addImage(mother1);
pick.scale=1.5;
pick.visible=false;

////////////////////////////////////////
cross=createSprite(displayWidth/2-350,displayHeight/2-250)
cross.addImage(crossi);
cross.scale=0.2;
cross.visible=false;
//cross.debug=true;
cross.setCollider("circle",10,0,200)
mother=createSprite(displayWidth/2,displayHeight/2-160);
mother.addImage(mother1);
mother.scale=2;
mother.visible=false;
sister=createSprite(displayWidth/2-230,displayHeight/2-170);
sister.addImage(sister1);
sister.scale=2;
sister.visible=false;
//sister.debug=true;
brother=createSprite(displayWidth/2-230,displayHeight/2+140);
brother.addImage(brother1);
brother.scale=2;
brother.visible=false;
father=createSprite(displayWidth/2+20,displayHeight/2+120);
father.addImage(father1);
father.scale=2;
father.visible=false;
father.setCollider("rectangle",0,0,80,80)
grandpa=createSprite(displayWidth/2+250,displayHeight/2+130);
grandpa.addImage(grandpa1);
grandpa.scale=2;
grandpa.visible=false;
grandma=createSprite(displayWidth/2+240,displayHeight/2-135);
grandma.addImage(grandma1);
grandma.scale=2;
grandma.visible=false;

send=createSprite(displayWidth/2+230,displayHeight/2+250,20,20);
send.visible=false;
send.addImage(send1);
send.scale=0.16;

send2=createSprite(displayWidth/2+230,displayHeight/2+250,20,20);
send2.visible=false;
send2.addImage(send1);
send2.scale=0.16;


mic2=createSprite(displayWidth/2+190,displayHeight/2+245,20,20);
mic2.visible=false;
mic2.addImage(mic1);
mic2.scale=0.09;

last=createSprite(displayWidth/2,displayHeight/2-210,20,20);
last.addImage(last1);
last.scale=0.35;
last.visible=false;

textMore=createButton("Text More");
textMore.position(0,0);
textMore.hide();

choose=createSprite(displayWidth/2,displayHeight/2+240,20,20);
choose.addImage(choose1);
choose.scale=0.1;
choose.visible=false;

///////////////////////////////////



colorPicker = createColorPicker("#B3F3F5");
colorPicker.position(displayWidth/2+580,displayHeight/2+70);

if(gameState===0){
  player.name = this.input1.value();
 input1.show();
 input2.show();
  player.mom = this.input2.value();
  player.updateName(player.name);
  player.updateMom(player.mom);
  next=createSprite(displayWidth/2+600,displayHeight/2+200,10,30);
  next.addImage(nexti);
  next.scale=0.2;
  next.setCollider("rectangle",0,0,400,400)
  
}


 
}

function draw(){
 console.log( gameState)
background(colorPicker.color());
textAlign(LEFT);
textStyle(BOLDITALIC);
textFont('Georgia');
fill ("black")
//stroke ("white")
if(gameState===0){
  textAlign(CENTER);
text("Dear child, hello! may I know your sweet name?",displayWidth/14+630,displayHeight/2+80);
text("there are many names of a lister , my listers name is mommy",displayWidth/14+630,displayHeight/2+140);
text("what's your listners name?",displayWidth/14+630,displayHeight/2+160);

}
if(mousePressedOver(next)){
  gameState=1;
  sel.show();
  mom1.visible=false;
  mom2.visible=false;
  input1.remove();
  input2.remove();
 next.destroy();
  }
  if(gameState===2&&bye.mousePressed()){
    test1="true";
  }
  if(gameState===2.1&&bye.mousePressed()){
    test2="true";
  }
  if(gameState===2.2&&bye.mousePressed()){
    test3="true";
  }
  if(gameState===2.3&&bye.mousePressed()){
    test4="true";
  }
  if(gameState===1){
    textAlign(CENTER)
    textSize(16);

  text("You know, I am a person who would listen to all your emotions, ideas, gossips ",displayWidth/14+640,displayHeight/2+40);
  text("and basically everything, so tell me what are you gonna share with me today?",displayWidth/14+640,displayHeight/2+80)
     sel.show();
     sel.changed(a);
     pick.visible=true;
     next2.visible=true;
     if(mousePressedOver(next2)){
       if(test1==="true"){
 gameState=2;
 send2.visible=true;
       }
       if(test2==="true"){
        gameState=2.1;
      }
      if(test3==="true"){
        gameState=2.2;
      }
      if(test4==="true"){
        gameState=2;
      }
      
       sel.hide();
       pick.visible=false;
       mother.visible=false;
       father.visible=false;
       sister.visible=false;
       brother.visible=false;
       grandpa.visible=false;
       grandma.visible=false;
       
           }
     if(mousePressedOver(pick)){
      mother.visible=true;
      father.visible=true;
      sister.visible=true;
      brother.visible=true;
      grandma.visible=true;
      grandpa.visible=true;
      cross.visible=true;
      
      seen="change";
     }
     }
     if(seen="change"){
      if(mousePressedOver(next2)){
        gameState=2;
        sel.hide();
        pick.visible=false;
        mother.visible=false;
        father.visible=false;
        sister.visible=false;
        brother.visible=false;
        grandpa.visible=false;
        grandma.visible=false;
      }
      if(mousePressedOver(mother)){
        
        pick.addImage(mother1);
        
      }
      if(mousePressedOver(brother)){
        pick.addImage(brother1);
      }
       if(mousePressedOver(sister)){
        pick.addImage(sister1);
      }
      if(mousePressedOver(father)){
        pick.addImage(father1);
      }
      if(mousePressedOver(grandma)){
        pick.addImage(grandma1);
      }
       if(mousePressedOver(grandpa)){
        pick.addImage(grandpa1);
      }

             if(mousePressedOver(cross)){
              mother.visible=false;
              father.visible=false;
              sister.visible=false;
              brother.visible=false;
              grandma.visible=false;
              grandpa.visible=false;
              cross.visible=false;
              pick.visible=true;
              
        
             }

     }
   
if(gameState===2){
  cross.visible=false;
   bye.show();
   textBox.show(); 
  send.visible=true;
  mic2.visible=true;
  next2.visible=false;
bye.mousePressed(()=>{
gameState=3;  
textMore.hide();
})


if(mousePressedOver(send)){
 input11=textBox.value();
 textBox.hide();
 send.x=0;
 send.y=0;
 gameState=2.1;
 
//var l=textWidth(input11)
 //if(l<displayHeight/4*3){
 //dh=displayHeight/4*3;
 //dh+=l/2;
 //}
 //else if(l>displayHeight/4*3){
  //displayHeight+=displayHeight+l/2
  //e=displayWidth/2-100;
 //}
}
 text(input11,displayWidth/2,displayHeight/2-200,displayWidth/2)
 text(input22,displayWidth/2,displayHeight/2-200,displayWidth/2)

 writing();
}
if(mousePressedOver(mic2)){
  //getAudioContext().resume()
  userStartAudio();
  if( state===0 && mic.enabled){
    text("recording",)
        rec.record(file);
        console.log(state);
    state++;
  }
 else if (state===1&&mousePressedOver(mic2)){
  
    rec.stop();
   
state++
  }
   else if (state===2){
     file.play();
  save ( file,"test" );
  state=0;
  }

  
}
if(gameState===2.1){
  mic2.visible=false;
  textBox.hide();
  send.visible=false;
textMore.position(displayWidth/2-340,displayHeight/2+250);
textMore.show();
text(input11,displayWidth/2,displayHeight/2-200,displayWidth/2)
  text(input22,displayWidth/2,displayHeight/2-200,displayWidth/2)
writing();
bye.mousePressed(()=>{
  gameState=3;
  textMore.hide();
})
textMore.mousePressed(()=>{
gameState=2.2;
})
}
if(gameState===2.2){
  textMore.hide();
  mic2.visible=true;
  send.visible=false;
  send2.visible=true;
  text(input11,displayWidth/2,displayHeight/2-200,displayWidth/2)
  text(input22,displayWidth/2,displayHeight/2-200,displayWidth/2)
  input22=textBox2.value();
 textBox2.show();
  writing();
  writing2();
  if(mousePressedOver(send2)){
gameState=2.3;
  }
}

if(gameState===2.3){
mic2.visible=false;
send2.visible=false;
textBox.hide();
textBox2.hide();
writing();
writing2();
text(input11,displayWidth/2,displayHeight/2-200,displayWidth/2)
  text(input22,displayWidth/2,displayHeight/2-200,displayWidth/2)
  bye.mousePressed(()=>{
    gameState=3;
  })
}

if(gameState===3){
  send2.visible=false
bye.hide();
textBox.hide()
textBox2.hide();
mic2.visible=false;
send.visible=false;

last.visible=true;
choose.visible=true;
textSize(17);
textAlign(CENTER)
text("In every family or the World there is one or the other person who would be ready ",displayWidth/2,displayHeight/2+100)
text("to listen to you anytime you need them to and i am proud to say that i am one of them for you... ",displayWidth/2,displayHeight/2+150)
text("If you want to talk about something else then you may choose some other topic!",displayWidth/2,displayHeight/2+190);
if(mousePressedOver(choose)){
  gameState=1;
    last.visible=false;
  x=0;
  y=0;
  d=0;
 input11="";
 input22="";
   choose.visible=false;
}
  



}
  drawSprites();
 
}

function a(){
  emo=sel.value();
  if(emo==="happy feelings"){
background("black")
  }
  if(emo==="what's special today"){
    
  }
  if(emo==="random Q&A"){
      
  }
  if(emo==="sad feelings"){
      
  }
  if(emo==="angry feelings"){
      
  }
  if(emo==="share an idea"){
      
  }
  if(emo==="complain"){

  }
  if(emo==="need motivation"){
      
  }
  if(emo==="proud movement"){
      
  }
  if(emo==="scary feelings"){
      
  }
  if(emo==="nervous feelings"){
      
  }
  if(emo==="need sympathy"){
      
  }
}

function audio(){
  userStartAudio();
  if( state===0 && mic.enabled){
    background(255,0,0);
        rec.record(file);
    state++;
  }
 else if (state===1){
  background(0,255,0);
    rec.stop();
state++
  }
   else if (state===2){
     file.play();
  save ( file,"test" );
  state=0;
  }
}

function writing(){
 

  var x=displayWidth/4-250;
 var y=displayHeight/4+100
 var d=displayWidth/2;

  emo=sel.value();
  if(emo==="happy feelings"){
    
    if(mousePressedOver(send)){
     send.visible=false;
     rand= Math.round(random(1,2));
    }
switch(rand){
case 1: text("Oh, that’s nice that you are happy stay like this forever my child!",x,y,d);
break;
case 2: text("Happiness is like a treasure box which only a few people find and you have got that chest of happiness!",x,y,d,d)
default:break;
}
  }

  //if(emo==="what's special today"){
   //have to give another drop box for selecting month
 // }
  if(emo==="random Q&A"){
    if(mousePressedOver(send)){
     rand1=Math.round((random(1,10)))
    }
    switch(rand1){
      case 1: text("What was the funniest thing that happened today?",x,y,d);
      break;
      case 2: text("What are the three things you want to do this season?",x,y,d);
      break;
      case 3 : text("What do you love doing?",x,y,d);
      break;
      case 4 : text("How are you feeling today?",x,y,d);
      break;
      case 5 : text(". If you could do anything right now, what would you do?",x,y,d);
      break;
      case 6: text(". If you drew everything that came to your head, what would you be drawing right now?",x,y,d);
      break;
      case 7 : text("What’s a memory that makes you happy?",x,y,d);
      break;
      case 8 : text("What would you do if you made the rules at home?",x,y,d);
      break;
      case 9 : text("What bugs you?",x,y,d);
      break;
      case 10: text("what is your	Favourite  emoji?",x,y,d);
      default:break;
  }
}
  if(emo==="sad feelings"){
    if(mousePressedOver(send)){
      rand2=Math.round((random(1,9)))
     }
  switch(rand2){
case 1:text("In addition to imagining yourself succeeding, you need to do your best. Do not let sadness win the battle, I will be by your side. ",x,y,d);
break;
case 2:text("You have qualities and virtues that make you special, I admire you very much and I don’t like to see you sad. Be positive my friend! ",x,y,d);
break;
case 3: text("You are surrounded by people who love you and who will always give you a hand. There is no reason to be sad!",x,y,d);
break;
case 4: text("Think about how lucky you are to have a family, friends and angels who take care of you always. Trust me; the bad moments will be over soon! ",x,y,d);
break;
case 5:text("	We all go through sad moments, but the good thing is that they pass, do not worry that you are not alone in this, you have my support for everything you need.",x,y,d);
break;
case 6: text("•	I miss seeing you smile and making plans for your future, but I accompany you in this difficult time. Cheer up, all this will be over very soon! ",x,y,d);
break;
case 7:text("I am here with you, my good friend! Everything is going to turn out well, you just have to have a little faith and give all of yourself, you will see that this whole situation will go away soon",x,y,d);
break;
case 8:text("I know how difficult it is to go through such a situation, but remember that you have the support of all your loved ones and also of your friends. We all wish you the best! ",x,y,d);
break;
case 9:text("We won’t achieve our dreams until we fight for them and do everything necessary to make them come true. Get up and cheer up! ",x,y,d)
default:break;
  }
  }
  if(emo==="angry feelings"){
    if(mousePressedOver(send)){
      rand3=Math.round((random(1,2)))
     }
      switch(rand3){
        case 1:text("I understand why you’d feel like that. Don’t worry I am on your side but listen taking decisions while you are angry is not a good choice… ",x,y,d);
        break;
        case 2: text("Calm down child don’t worry I am on your side. Do some meditation that will seriously help. Let me know if I can help you in any other talks you want me to listen to you. My ears are always open to listen!",x,y,d);
        default:break;
      }
  }
  if(emo==="share an idea"){
    if(mousePressedOver(send)){
      rand4=Math.round((random(1,10)))
     }      switch(rand4){
        case 1: text("oh, that is a really nice idea",x,y,d);
        break;
        case 2: text("start working on it, it will reach great heights",x,y,d);
        break;
        case 3 : text("oh, that is something really cool",x,y,d);
        break;
        case 4 : text("I am excited to see the output!",x,y,d);
        break;
        case 5 : text("Try setting a target and complete it in that limit and the idea will stand out",x,y,d);
        break;
        case 6: text("It is an outstanding idea",x,y,d);
        break;
        case 7 : text("No words to say that is just perfect!",x,y,d);
        break;
        case 8 : text("Really creative make sure you don’t miss out on anything!",x,y,d);
        break;
        case 9 : text("The idea is great and a bit challenging too but I am sure you will do it easily!",x,y,d);
        break;
        case 10: text("Way to go child! Amazing idea!",x,y,d);
        default:break;
      }
  }
  if(emo==="complain"){
    if(mousePressedOver(send)){
      rand5=Math.round((random(1,3)))
     }
    switch(rand5){
      case 1: text("Hmm I see that would have been tough… you know complaining is bad but I agree with you on this one",x,y,d);
      break;
      case 2: text("Well maybe the mistake is from both the sides well to say not everyone has the attitude you want them to have, right? ",x,y,d);
      break;
      case 3 : text("Let’s do one thing we will ignore the people we have complaints on maybe that will benefit us child.",x,y,d);
      default:break;
    }
  }
  if(emo==="need motivation"){
    if(mousePressedOver(send)){
      rand6=Math.round((random(1,9)))
     }    switch(rand6){
      case 1: text("Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude ",x,y,d);
      break;
      case 2: text("You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",x,y,d);
      break;
      case 3 : text("Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before",x,y,d);
      break;
      case 4 : text("You are never too old to set another goal or dream a new dream",x,y,d);
      break;
      case 5 : text("“Every day may not be good... but there’s something good in every day.",x,y,d);
      break;
      case 6: text("Keep your face to the sunshine and you cannot see a shadow.",x,y,d);
      break;
      case 7 : text("“The difference between ordinary and extraordinary is that little extra.",x,y,d);
      break;
      case 8 : text("“Be so happy that, when other people look at you, they become happy too.",x,y,d);
      break;
      case 9 : text("“Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.",x,y,d);
      default:break;
    }
  }
  if(emo==="proud movement"){
    if(mousePressedOver(send)){
      rand7=Math.round((random(1,5)))
     }    switch(rand7){
      case 1: text("	Nothing makes us happier than seeing your smiling face. You are the most precious thing to us. Stay safe always sweetheart",x,y,d);
      break;
      case 2: text("Right at the moment I first saw you, I knew you god had sent a piece of heaven to our little family. Its always been a blessing having you as our child",x,y,d);
      break;
      case 3 : text("	You are everything that any parents could wish for. You brought the keys to eternal happiness when you arrived in this world. We feel like the luckiest parents ever.",x,y,d);
      break;
      case 4 : text("	People see the sweetness of your face but they don’t often see the sweetness you added to our life. You have given us so many reasons to be thankful to god. We love you!",x,y,d);
      break;
      case 5 : text("•	You are the most beautiful rose of all the gardens who just happened to be gifted to us by God Almighty",x,y,d);
      default:break;
  }
}
  if(emo==="scary feelings"){
    if(mousePressedOver(send)){
      rand8=Math.round((random(1,11)))
     }    switch(rand8){
      case 1: text("Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it",x,y,d);
      break;
      case 2: text("You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do",x,y,d);
      break;
      case 3 : text("Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy",x,y,d);
      break;
      case 4 : text("Fear is the path to the Dark Side. Fear leads to anger, anger leads to hate, hate leads to suffering",x,y,d);
      break;
      case 5 : text("The brave man is not he who does not feel afraid, but he who conquers that fear",x,y,d);
      break;
      case 6: text("Nothing in life is to be feared. It is only to be understood",x,y,d);
      break;
      case 7 : text("Decide that you want it more than you are afraid of it.",x,y,d);
      break;
      case 8 : text("The key to change... is to let go of fear",x,y,d);
      break;
      case 9 : text("We should all start to live before we get too old. Fear is stupid. So are regrets",x,y,d);
      break;
      case 10: text("Don't let the fear of striking out hold you back",x,y,d);
      break;
        case 11: text("One of the greatest discoveries a man makes, one of his great surprises, is to find he can do what he was afraid he couldn't do",x,y,d);
        default:break;
    }
  }
  if(emo==="nervous feelings"){
    if(mousePressedOver(send)){
      
      rand9=Math.round((random(1,6)))
     }    switch(rand9){
      case 1: text("I don’t know what to do right now to help you, and that’s OK. All I can do is be here for you and I can accept that. I know I can’t make everything go away, but I can hold you while it feels like the world is shattering around us. Your struggle is my struggle, and your fight is mine",x,y,d);
      break;
      case 2: text("Keep writing to me. You are never a bother to me. Stay in the present, you will get through this. You may not believe it, but I do. I have faith in you",x,y,d);
      break;
      case 3 : text("It’s OK to feel this way. I am here for you.",x,y,d);
      break;
      case 4 : text("i don’t know what you’re going through, but I’m here for you if you need me",x,y,d);
      break;
      case 5 : text("Take a deep breath. You got this!",x,y,d);
      break;
      case 6: text("stop thinking what people will think just open your heart and do it!",x,y,d);
      default:break;
  }
}
  if(emo==="need sympathy"){
    if(mousePressedOver(send)){
      rand10=Math.round((random(1,10)))
     }    switch(rand10){
      case 1: text("My deepest sympathies go out to you, my friend. May you find comfort and peace during this difficult time. Know that I’m here for you",x,y,d);
      break;
      case 2: text("I heard the news, my friend. I can’t even begin to understand what you are feeling, but I want you to know that I’m here for you. I’m sending you my prayers and condolences",x,y,d);
      break;
      case 3 : text("I’m sorry for your loss. Please accept my sincerest sympathy",x,y,d);
      break;
      case 4 : text("I’m so sorry to hear this sad news. I’m thinking of you and your family at this time. Please let me know how I can help",x,y,d);
      break;
      case 5 : text("I’m sorry. I know those words are inadequate, but I am truly sorry for what you’re experiencing right now. Please let me know if there’s anything I can do to help",x,y,d);
      break;
      case 6: text("Wishing you peace and strength during this difficult time.",x,y,d);
      break;
      case 7 : text("I cannot take away your pain, but I can listen if you’d like to talk about it",x,y,d);
      break;
      case 8 : text("Although no words can really help to ease your loss, know that you are in my thoughts",x,y,d);
      break;
      case 9 : text("Words, however kind, can’t mend your heartache, but those who care for you share your grief and wish you comfort and peace of mind.",x,y,d);
      break;
      case 10: text("I cannot even begin to imagine what you’re going through and how difficult all this must be for you. Please know that I am always there for you, whether you need to talk or cry or even just sit in silence with someone",x,y,d);
      default:break;
    }
  }
}
function writing2(){
var x1=displayWidth/4
var y1=displayHeight/4
var d1=displayWidth/2;

 emo=sel.value();
 if(emo==="happy feelings"){
   
   if(mousePressedOver(send2)){
    rands= Math.round(random(1,2));
   }
switch(rands){
case 1: text("Oh, that’s nice that you are happy stay like this forever my child!",x1,y1,d1);
break;
case 2: text("Happiness is like a treasure box which only a few people find and you have got that chest of happiness!",x1,y1,d1)
default:break;
}
 }

 //if(emo==="what's special today"){
  //have to give another drop box for selecting month
// }
 if(emo==="random Q&A"){
   if(mousePressedOver(send2)){
    rand11=Math.round((random(1,10)))
   }
   switch(rand11){
     case 1: text("What was the funniest thing that happened today?",x1,y1,d1);
     break;
     case 2: text("What are the three things you want to do this season?",x1,y1,d1);
     break;
     case 3 : text("What do you love doing?",x1,y1,d1);
     break;
     case 4 : text("How are you feeling today?",x1,y1,d1);
     break;
     case 5 : text(". If you could do anything right now, what would you do?",x1,y1,d1);
     break;
     case 6: text(". If you drew everything that came to your head, what would you be drawing right now?",x1,y1,d1);
     break;
     case 7 : text("What’s a memory that makes you happy?",x1,y1,d1);
     break;
     case 8 : text("What would you do if you made the rules at home?",x1,y1,d1);
     break;
     case 9 : text("What bugs you?",x1,y1,d1);
     break;
     case 10: text("what is your	Favourite  emoji?",x1,y1,d1);
     default:break;
 }
}
 if(emo==="sad feelings"){
   if(mousePressedOver(send2)){
     rand22=Math.round((random(1,9)))
    }
 switch(rand22){
case 1:text("In addition to imagining yourself succeeding, you need to do your best. Do not let sadness win the battle, I will be by your side. ",x1,y1,d1);
break;
case 2:text("You have qualities and virtues that make you special, I admire you very much and I don’t like to see you sad. Be positive my friend! ",x1,y1,d1);
break;
case 3: text("You are surrounded by people who love you and who will always give you a hand. There is no reason to be sad!",x1,y1,d1);
break;
case 4: text("Think about how lucky you are to have a family, friends and angels who take care of you always. Trust me; the bad moments will be over soon! ",x1,y1,d1);
break;
case 5:text("	We all go through sad moments, but the good thing is that they pass, do not worry that you are not alone in this, you have my support for everything you need.",x1,y1,d1);
break;
case 6: text("•	I miss seeing you smile and making plans for your future, but I accompany you in this difficult time. Cheer up, all this will be over very soon! ",x1,y1,d1);
break;
case 7:text("I am here with you, my good friend! Everything is going to turn out well, you just have to have a little faith and give all of yourself, you will see that this whole situation will go away soon",x1,y1,d1);
break;
case 8:text("I know how difficult it is to go through such a situation, but remember that you have the support of all your loved ones and also of your friends. We all wish you the best! ",x1,y1,d1);
break;
case 9:text("We won’t achieve our dreams until we fight for them and do everything necessary to make them come true. Get up and cheer up! ",x1,y1,d1)
default:break;
 }
 }
 if(emo==="angry feelings"){
   if(mousePressedOver(send2)){
     rand33=Math.round((random(1,2)))
    }
     switch(rand33){
       case 1:text("I understand why you’d feel like that. Don’t worry I am on your side but listen taking decisions while you are angry is not a good choice… ",x1,y1,d1);
       break;
       case 2: text("Calm down child don’t worry I am on your side. Do some meditation that will seriously help. Let me know if I can help you in any other talks you want me to listen to you. My ears are always open to listen!",x1,y1,d1);
       default:break;
     }
 }
 if(emo==="share an idea"){
   if(mousePressedOver(send2)){
     rand44=Math.round((random(1,10)))
    }      switch(rand44){
       case 1: text("oh, that is a really nice idea",x1,y1,d1);
       break;
       case 2: text("start working on it, it will reach great heights",x1,y1,d1);
       break;
       case 3 : text("oh, that is something really cool",x1,y1,d1);
       break;
       case 4 : text("I am excited to see the output!",x1,y1,d1);
       break;
       case 5 : text("Try setting a target and complete it in that limit and the idea will stand out",x1,y1,d1);
       break;
       case 6: text("It is an outstanding idea",x1,y1,d1);
       break;
       case 7 : text("No words to say that is just perfect!",x1,y1,d1);
       break;
       case 8 : text("Really creative make sure you don’t miss out on anything!",x1,y1,d1);
       break;
       case 9 : text("The idea is great and a bit challenging too but I am sure you will do it easily!",x1,y1,d1);
       break;
       case 10: text("Way to go child! Amazing idea!",x1,y1,d1);
       default:break;
     }
 }
 if(emo==="complain"){
   if(mousePressedOver(send2)){
     rand55=Math.round((random(1,3)))
    }
   switch(rand55){
     case 1: text("Hmm I see that would have been tough… you know complaining is bad but I agree with you on this one",x1,y1,d1);
     break;
     case 2: text("Well maybe the mistake is from both the sides well to say not everyone has the attitude you want them to have, right? ",x1,y1,d1);
     break;
     case 3 : text("Let’s do one thing we will ignore the people we have complaints on maybe that will benefit us child.",x1,y1,d1);
     default:break;
   }
 }
 if(emo==="need motivation"){
   if(mousePressedOver(send2)){
     rand66=Math.round((random(1,9)))
    }    switch(rand66){
     case 1: text("Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude ",x1,y1,d1);
     break;
     case 2: text("You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",x1,y1,d1);
     break;
     case 3 : text("Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before",x1,y1,d1);
     break;
     case 4 : text("You are never too old to set another goal or dream a new dream",x1,y1,d1);
     break;
     case 5 : text("“Every day may not be good... but there’s something good in every day.",x1,y1,d1);
     break;
     case 6: text("Keep your face to the sunshine and you cannot see a shadow.",x1,y1,d1);
     break;
     case 7 : text("“The difference between ordinary and extraordinary is that little extra.",x1,y1,d1);
     break;
     case 8 : text("“Be so happy that, when other people look at you, they become happy too.",x1,y1,d1);
     break;
     case 9 : text("“Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.",x1,y1,d1);
     default:break;
   }
 }
 if(emo==="proud movement"){
   if(mousePressedOver(send2)){
     rand77=Math.round((random(1,5)))
    }    switch(rand77){
     case 1: text("	Nothing makes us happier than seeing your smiling face. You are the most precious thing to us. Stay safe always sweetheart",x1,y1,d1);
     break;
     case 2: text("Right at the moment I first saw you, I knew you god had sent a piece of heaven to our little family. Its always been a blessing having you as our child",x1,y1,d1);
     break;
     case 3 : text("	You are everything that any parents could wish for. You brought the keys to eternal happiness when you arrived in this world. We feel like the luckiest parents ever.",x1,y1,d1);
     break;
     case 4 : text("	People see the sweetness of your face but they don’t often see the sweetness you added to our life. You have given us so many reasons to be thankful to god. We love you!",x1,y1,d1);
     break;
     case 5 : text("	You are the most beautiful rose of all the gardens who just happened to be gifted to us by God Almighty",x1,y1,d1);
     default:break;
 }
}
 if(emo==="scary feelings"){
   if(mousePressedOver(send2)){
     rand88=Math.round((random(1,11)))
    }    switch(rand88){
     case 1: text("Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it",x1,y1,d1);
     break;
     case 2: text("You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do",x1,y1,d1);
     break;
     case 3 : text("Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy",x1,y1,d1);
     break;
     case 4 : text("Fear is the path to the Dark Side. Fear leads to anger, anger leads to hate, hate leads to suffering",x1,y1,d1);
     break;
     case 5 : text("The brave man is not he who does not feel afraid, but he who conquers that fear",x1,y1,d1);
     break;
     case 6: text("Nothing in life is to be feared. It is only to be understood",x1,y1,d1);
     break;
     case 7 : text("Decide that you want it more than you are afraid of it.",x1,y1,d1);
     break;
     case 8 : text("The key to change... is to let go of fear",x1,y1,d1);
     break;
     case 9 : text("We should all start to live before we get too old. Fear is stupid. So are regrets",x1,y1,d1);
     break;
     case 10: text("Don't let the fear of striking out hold you back",x1,y1,d1);
     break;
       case 11: text("One of the greatest discoveries a man makes, one of his great surprises, is to find he can do what he was afraid he couldn't do",x1,y1,d1);
       default:break;
   }
 }
 if(emo==="nervous feelings"){
   if(mousePressedOver(send2)){
     
     rand99=Math.round((random(1,6)))
    }    switch(rand99){
     case 1: text("I don’t know what to do right now to help you, and that’s OK. All I can do is be here for you and I can accept that. I know I can’t make everything go away, but I can hold you while it feels like the world is shattering around us. Your struggle is my struggle, and your fight is mine",x1,y1,d1);
     break;
     case 2: text("Keep writing to me. You are never a bother to me. Stay in the present, you will get through this. You may not believe it, but I do. I have faith in you",x1,y1,d1);
     break;
     case 3 : text("It’s OK to feel this way. I am here for you.",x1,y1,d1);
     break;
     case 4 : text("i don’t know what you’re going through, but I’m here for you if you need me",x1,y1,d1);
     break;
     case 5 : text("Take a deep breath. You got this!",x1,y1,d1);
     break;
     case 6: text("stop thinking what people will think just open your heart and do it!",x1,y1,d1);
     default:break;
 }
}
 if(emo==="need sympathy"){
   if(mousePressedOver(send2)){
     rand1010=Math.round((random(1,10)))
    }    switch(rand1010){
     case 1: text("My deepest sympathies go out to you, my friend. May you find comfort and peace during this difficult time. Know that I’m here for you",x1,y1,d1);
     break;
     case 2: text("I heard the news, my friend. I can’t even begin to understand what you are feeling, but I want you to know that I’m here for you. I’m sending you my prayers and condolences",x1,y1,d1);
     break;
     case 3 : text("I’m sorry for your loss. Please accept my sincerest sympathy",x1,y1,d1);
     break;
     case 4 : text("I’m so sorry to hear this sad news. I’m thinking of you and your family at this time. Please let me know how I can help",x1,y1,d1);
     break;
     case 5 : text("I’m sorry. I know those words are inadequate, but I am truly sorry for what you’re experiencing right now. Please let me know if there’s anything I can do to help",x1,y1,d1);
     break;
     case 6: text("Wishing you peace and strength during this difficult time.",x1,y1,d1);
     break;
     case 7 : text("I cannot take away your pain, but I can listen if you’d like to talk about it",x1,y1,d1);
     break;
     case 8 : text("Although no words can really help to ease your loss, know that you are in my thoughts",x1,y1,d1);
     break;
     case 9 : text("Words, however kind, can’t mend your heartache, but those who care for you share your grief and wish you comfort and peace of mind.",x1,y1,d1);
     break;
     case 10: text("I cannot even begin to imagine what you’re going through and how difficult all this must be for you. Please know that I am always there for you, whether you need to talk or cry or even just sit in silence with someone",x1,y1,d1);
     default:break;
   }
 }
}

