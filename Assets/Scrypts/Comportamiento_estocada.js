#pragma strict

var timer: float = 0.5;
var frames: int;
var sword_offset: Vector3;
var player :GameObject;
var right: boolean;

function Start () {
     player = GameObject.Find("/Personaje/PJ");
     right = player.GetComponent(movimientoPJ).facing_right;
     frames = 0;

}

function Update () {
    timer -= Time.deltaTime;
    frames = frames + 1;
    var posActualx = transform.position.x;
    var posActualy = transform.position.y;

    if (right){
        if (frames == 10){
            transform.position.x = posActualx + 0.05;
            transform.position.y = posActualy + 0.02;

        }
        else if (frames == 20){
            posActualx = transform.position.x;
            posActualy = transform.position.y;
            transform.position.x = posActualx - 0.05;
            transform.position.y = posActualy - 0.02;
        }
    }
    else if (!right){
        if (frames == 10){
            transform.position.x = posActualx - 0.05;
            transform.position.y = posActualy + 0.02;
        }
        else if (frames == 20){
            posActualx = transform.position.x;
            posActualy = transform.position.y;
            transform.position.x = posActualx + 0.05;
            transform.position.y = posActualy - 0.02;
        }
    }

    if (timer <= 0){
        player.GetComponent(Animator).SetBool("AtaqueBasico", false);
        Destroy(gameObject);
    }
}
function OnTriggerEnter2D (other : Collider2D) {
    if (other.tag == "Enemigo"){
        Debug.Log("GOTCHA!");
    }
    if (other.tag == "Boton"){
        other.GetComponent(boton).Activar();
    }
}
