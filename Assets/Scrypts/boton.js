#pragma strict

var Puerta: GameObject;
var TipoDeBoton: String ;
var timer: int;
var destruir: boolean;

function Start () {

}

function Update () {
    if (destruir){
        timer -= 1;
        var tmp = GetComponent(SpriteRenderer).color;
        tmp.a = tmp.a - 0.05;
        GetComponent(SpriteRenderer).color = tmp;
        if (timer <= 0){
            Destroy(gameObject);
            Destroy(Puerta);
        }
    }
}
function Activar() {
    GetComponent(Animator).SetBool("Explotado", true);
    if (TipoDeBoton == "AbrePuerta"){
        destruir = true;
        timer = 10;

    }
}
