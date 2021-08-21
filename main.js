function reset(){
    ball.x = width/2+100,
    ball.y = height/2+100;
    ball.dx=3;
    ball.dy =3;   
 }
 
 
 //function midline draw a line in center
 function midline(){
     for(i=0;i<480;i+=10) {
     var y = 0;
     fill("white");
     stroke(0);
     rect(width/2,y+i,10,480);
     }
 }
 
 
 //function drawScore show scores
 function drawScore(){
     textAlign(CENTER);
     textSize(20);
     fill("white");
     stroke(250,0,0)
     text("Player:",100,50)
     text(playerscore,140,50);
     text("Computer:",500,50)
     text(pcscore,555,50)
 }
 
 
 //very important function of this game
 function move(){
    fill(50,350,0);
    stroke(255,0,0);
    strokeWeight(0.5);
    ellipse(ball.x,ball.y,ball.r,20)
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    if(ball.x+ball.r>width-ball.r/2){
        ball.dx=-ball.dx-0.5;       
    }
   if (ball.x-2.5*ball.r/2< 0){
   if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
     ball.dx = -ball.dx+0.5; 
     ball_touch_paddel.play();
   }
   else{
     pcscore++;
     missed.play();
     reset();
     navigator.vibrate(100);
   }
 }
 if(pcscore ==4){
     fill("#FFA500");
     stroke(0)
     rect(0,0,width,height-1);
     fill("white");
     stroke("white");
     textSize(25);
     text("Game Over!",width/2,height/2);
     text("Press Restart button to play again!",width/2,height/2+30)
     noLoop();
     pcscore = 0;
 }
    if(ball.y+ball.r > height || ball.y-ball.r <0){
        ball.dy =- ball.dy;
    }   
 }
 
 
 //width height of canvas speed of ball 
 function models(){
     textSize(18);
     fill(255);
     noStroke();
     text("Width:"+width,135,15);
     text("Speed:"+abs(ball.dx),50,15);
     text("Height:"+height,235,15)
 }
 
 
 //this function help to not go te paddle out of canvas
 function paddleInCanvas(){
   if(mouseY+paddle1Height > height){
     mouseY=height-paddle1Height;
   }
   if(mouseY < 0){
     mouseY =0;
   }
  
   
 }
 
 function restart()
 {
   pcscore = 0;
   loop();
 }
 