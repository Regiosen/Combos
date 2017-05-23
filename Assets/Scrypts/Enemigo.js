#pragma strict
public var hablando: boolean;
var jugador: GameObject;
var pag_dialogo: int;
var dialogo = ["nuuuuu D:", "baiiiiii O_o"];


function Start () {
    hablando = false;
    pag_dialogo = 0;
}

function Update () {

    if (jugador.transform.position.x < transform.position.x - 1){
        transform.position.x = transform.position.x - 0.01;

    }
    else if (jugador.transform.position.x > transform.position.x + 1){
        transform.position.x = transform.position.x + 0.01;     
    }

}
function OnGUI () {
    if (((jugador.transform.position.x < transform.position.x + 0.5)
    &&(jugador.transform.position.x > transform.position.x - 0.5))
    &&(hablando)){
        if (pag_dialogo>1){            
            hablando = false						;
            jugador.GetComponent(movimientoPJ).hablando = false;
            pag_dialogo = 0;
        }
        else{
            GUI.Box(Rect((Screen.width/2)-50,Screen.height-50,100,25), dialogo[pag_dialogo]);
        }
    }
    else{
        hablando = false;
        if(jugador.GetComponent(movimientoPJ).NPC == this){
            jugador.GetComponent(movimientoPJ).hablando = false;
        }
    }


}