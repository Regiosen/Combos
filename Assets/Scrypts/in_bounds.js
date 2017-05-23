#pragma strict
var loaded_level : int;
var puerta1Abierta : boolean;
var puerta2Abierta : boolean;
function Start () {
    puerta1Abierta = true;
    puerta2Abierta = true;
}

function Update () {

}

function Check_in_bounds(coordenadas : Vector3){
    loaded_level = Application.loadedLevel;
    if (loaded_level == 0){
        if ((coordenadas.x<0)
           &&(coordenadas.x>-5)
           &&(coordenadas.y<2)
           &&(coordenadas.y>-1.8)){
            if (!((coordenadas.x<-2.5)
            && (coordenadas.x>-3.5)
            && (coordenadas.y<-1.2)
            && (coordenadas.y>-1.4))
            && !((coordenadas.x<-1)
            && (coordenadas.x>-2)
            && (coordenadas.y<-0.4999999)
            && (coordenadas.y>-0.6999999))){
                return true;
            }
        }
        else if ((coordenadas.x<2)
           &&(coordenadas.x>=0)
           &&(coordenadas.y<2)
           &&(coordenadas.y>0)){
            return true;
            }
        else if ((coordenadas.x<10)
           &&(coordenadas.x>=2)
           &&(coordenadas.y<2)
           &&(coordenadas.y>-8)){
            return true;
            }
        else if ((coordenadas.x<14)
           &&(coordenadas.x>=10)
           &&(coordenadas.y<-7)
           &&(coordenadas.y>-8)
           &&(puerta1Abierta)){
            return true;
            }
        else if ((coordenadas.x<14)
           &&(coordenadas.x>=10.2)
           &&(coordenadas.y<-6)
           &&(coordenadas.y>=-7)
           &&(puerta1Abierta)){
            return true;
            }
        else if ((coordenadas.x<18)
           &&(coordenadas.x>=14)
           &&(coordenadas.y<-4)
           &&(coordenadas.y>=-7)
           &&(puerta2Abierta)){
            return true;
            }
        else if ((coordenadas.x<22)
           &&(coordenadas.x>=18)
           &&(coordenadas.y<-2)
           &&(coordenadas.y>=-6)
           &&(puerta2Abierta)){
            return true;
            }
        else if ((coordenadas.x<26)
           &&(coordenadas.x>=22)
           &&(coordenadas.y<2)
           &&(coordenadas.y>=-5)
           &&(puerta2Abierta)){
               if (!((coordenadas.x<25)
               && (coordenadas.x>24)
               && (coordenadas.y<-4.4)
               && (coordenadas.y>-4.6))
               && !((coordenadas.x<24)
               && (coordenadas.x>23)
               && (coordenadas.y<-3.9)
               && (coordenadas.y>-4.1))
               && !((coordenadas.x<25)
               && (coordenadas.x>24)
               && (coordenadas.y<-2.9)
               && (coordenadas.y>-3.1))
               && !((coordenadas.x<26)
               && (coordenadas.x>25)
               && (coordenadas.y<-2.4)
               && (coordenadas.y>-2.6))
               && !((coordenadas.x<25)
               && (coordenadas.x>24)
               && (coordenadas.y<-1.4)
               && (coordenadas.y>-1.6))
               && !((coordenadas.x<24)
               && (coordenadas.x>23)
               && (coordenadas.y<-0.9)
               && (coordenadas.y>-1.1))){
                return true;
            }
           
           
            return true;
        }
        else if ((coordenadas.x<22)
           &&(coordenadas.x>=10.1)
           &&(coordenadas.y<2)
           &&(coordenadas.y>=0)
           &&(puerta2Abierta)){
            return true;
        }

        }
    else if (loaded_level == 1){
        if ((coordenadas.x<3)
           &&(coordenadas.x>-2)
           &&(coordenadas.y<1)
           &&(coordenadas.y>-1)){
            return true;
        }
    }
        
    else{
        return false;   
    }
}
