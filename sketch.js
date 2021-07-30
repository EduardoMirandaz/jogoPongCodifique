var altura = 300, largura = 300, posXbolinha = 100, posYbolinha = 100, diam =30; velocidadeBolinha = 3; velocidadeYbol = 5;velocidadeYplat = 5, posYretEsq = 225, posYretDir = 225, pontosEsq = 0, pontosDir = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  background(63, 143, 143);

}

function draw() {
  
  background(63, 143, 143);
  fill(255,255,255);
  rect(155,20,200,25)
  fill('#F2B138');
  rect(168,22,175,20)
  fill(255, 255, 255);
  text('Placar', 220, 40);
  textFont('century-gothic');
  textSize(width / 22);
  fill(255,255,255);
  text(' = ' + 'x' + ' = ', 227,71)
  let plataformaEsq = rect(20, posYretEsq, 20, 100);
  let plataformaDir = rect(460, posYretDir, 20, 100);
  //movimentação plataforma da direita!
  if(keyIsDown(40)){
    posYretDir+= velocidadeYplat;
  }
  else if(keyIsDown(38)){
    posYretDir = posYretDir - velocidadeYplat;
  }
  //movimentação plataforma da esquerda!
  if(keyIsDown(83)){
    posYretEsq+= velocidadeYplat;
  }
  else if(keyIsDown(87)){
    posYretEsq = posYretEsq - velocidadeYplat;
  }
  
  
                              //bolinha
                              
                              fill(255,255,255, 150)
                              circle(posXbolinha, posYbolinha, diam);
                                
                                if(posXbolinha >= width-diam/2){
                                velocidadeBolinha = -                                                velocidadeBolinha;
                                }
                              

                                if(posXbolinha <= diam/2){
                                velocidadeBolinha = -                                                velocidadeBolinha;
                              } 
                              posXbolinha = posXbolinha +                                          velocidadeBolinha;

                              if(posYbolinha + diam/2 >= 500){
                                velocidadeYbol = -velocidadeYbol;
                              }
                              if(posYbolinha - diam/2 <= 0){
                                velocidadeYbol = -velocidadeYbol;
                              }
  //velocidadeYbol+= 0.3
  //velocidadeBolinha += 0.15
  posXbolinha +=velocidadeBolinha;
  posYbolinha += velocidadeYbol;
    //colisão bolinha x plataforma esquerda;
    if((posXbolinha <= 55) && ((posYbolinha >= posYretEsq) && (posYbolinha <= (posYretEsq + 100))))
       {
       velocidadeBolinha = -velocidadeBolinha;
       }

    //colisão bolinha x plataforma direita;

  if((posXbolinha >= 445) && ((posYbolinha > posYretDir) && (posYbolinha < (posYretDir + 100))))
       {
       velocidadeBolinha = -velocidadeBolinha;
       }
  
  //pontuação jogador da esquerda
  if(posXbolinha >= 485){
    pontosEsq+= 1;
  }
  //pontuação jogador da direita
  if(posXbolinha <= 15){
    pontosDir+= 1;
  }
  fill(255,255,255)
  text(pontosEsq, 200, 70)
  text(pontosDir, 300, 70)
  
  //colisao plat x teto x chao
  if(posYretEsq <= 0){
    posYretEsq = 0;
  }
  if(posYretEsq+100 >= height ){
    posYretEsq = height-100;
  }
  if(posYretDir <= 0){
    posYretDir = 0;
  }
  if(posYretDir+100 >= height ){
    posYretDir = height-100;
  }

  
}