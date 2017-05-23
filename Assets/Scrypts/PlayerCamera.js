#pragma strict

var distanciaExtraY:int;
var player :GameObject;
var backgroundCercano: GameObject;
var backgroundMedio: GameObject;
var backgroundLejano: GameObject;
var distancia_a_camara_y: float;
var distancia_a_camara_x: float;
var camara_dashX: boolean;
var camara_dashY: boolean;
var fixedCamera: boolean;
var transicion: boolean;
var PuntosCamara = new Array(Vector3(-2.5,-0.5,-5),Vector3(2.5,1,-5));
var PuntoObjetivo: Vector3;

function Start () {
    PuntoObjetivo = PuntosCamara[0];
    PuntoObjetivo.y += distanciaExtraY;
    transform.position.x = PuntoObjetivo.x;
    transform.position.y = PuntoObjetivo.y;
    camara_dashX = false;
    camara_dashY = false;
    fixedCamera = true;

}

function Update () {
    var posicionJugadorX = player.transform.position.x;
    var posicionJugadorY = player.transform.position.y;
    var diferenciaX:float;
    var paralax:float;

//*****************************
//      Punto Objetivo
//*****************************
    if ((player.transform.position.x < 0)&&((player.transform.position.y >= -3))){
        PuntoObjetivo = PuntosCamara[0]; 
        PuntoObjetivo.y += distanciaExtraY;
    }
    else if ((player.transform.position.x >= 0)&&(player.transform.position.x < 3)&&(player.transform.position.y >= 0)){
        PuntoObjetivo = PuntosCamara[1];
        PuntoObjetivo.y += distanciaExtraY;
    }
    else if ((player.transform.position.x >= 3)&&(player.transform.position.y >= 0)){

        PuntoObjetivo.x = player.transform.position.x;
        PuntoObjetivo.y = player.transform.position.y + 0.2;
        PuntoObjetivo.z = -5;
        PuntoObjetivo.y += distanciaExtraY;

    }
    else {
        PuntoObjetivo.x = player.transform.position.x;
        PuntoObjetivo.y = player.transform.position.y;
        PuntoObjetivo.z = -5;
        PuntoObjetivo.y += distanciaExtraY;

    }

//*****************************
//          PARALAX
//*****************************
    backgroundCercano.transform.position.x = (transform.position.x * (-0.05)) - 0.5;
    backgroundMedio.transform.position.x = (transform.position.x * (-0.025));
    backgroundLejano.transform.position.x = (transform.position.x * (-0.0125));

//********************************************************
//                Movimiento Horizontal
//********************************************************
    distancia_a_camara_x = transform.position.x - PuntoObjetivo.x;
    if (((distancia_a_camara_x)>0.5)
      ||((distancia_a_camara_x)<-0.5)){ 
      
        camara_dashX = true;
     
    }
    if (camara_dashX){
        if (distancia_a_camara_x>0.1){
     
            transform.position.x = transform.position.x - 0.1;
     
        }
        else if (distancia_a_camara_x<-0.1){
    
            transform.position.x = transform.position.x + 0.1;
  
        }
        else if ((distancia_a_camara_x >= -0.1)
               ||(distancia_a_camara_x <= 0.1)){
        
            transform.position.x = PuntoObjetivo.x;
            camara_dashX = false;
        
        }
    }
    else {

        transform.position.x = PuntoObjetivo.x;
    }

//********************************************************
//                Movimiento Vertical
//********************************************************
    distancia_a_camara_y = transform.position.y - PuntoObjetivo.y;
    if (((distancia_a_camara_y)>0.5)
      ||((distancia_a_camara_y)<-0.5)){ 
       
        camara_dashY = true;
       
    }
    if (camara_dashY){
        if (distancia_a_camara_y>0.1){
         
            transform.position.y = transform.position.y - 0.1;
      
        }
        else if (distancia_a_camara_y<-0.1){
    
            transform.position.y = transform.position.y + 0.1;
    
        }
        else if ((distancia_a_camara_y >= -0.1)
               ||(distancia_a_camara_y <= 0.1)){
        
            transform.position.y = PuntoObjetivo.y;
            camara_dashY = false;
        
        }
    }
    else {
        transform.position.y = PuntoObjetivo.y;
    }

}
