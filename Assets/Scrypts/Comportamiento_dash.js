#pragma strict

var timer: float = 0.5;
var sword_offset: Vector3;
var fuente: GameObject;
var right: boolean;

function Start () {

    var fuente = GameObject.Find("PJ");
    right = fuente.GetComponent(movimientoPJ).facing_right;
    if (!right){
        transform.localScale.x = (transform.localScale.x)*(-1);
    }

}

function Update () {
    timer -= Time.deltaTime;
    var tmp = GetComponent(SpriteRenderer).color;
    tmp.a = tmp.a - 0.05;
    GetComponent(SpriteRenderer).color = tmp;
    if (timer <= 0){
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
