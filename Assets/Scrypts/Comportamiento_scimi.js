#pragma strict

var timer: int = 30;
var sword_offset: Vector3;
var fuente: GameObject;
var player :GameObject;
var right: boolean;

function Start () {
     player = GameObject.Find("/Personaje/PJ");
}

function Update () {
    timer = timer - 1;
    var tmp = GetComponent(SpriteRenderer).color;
    tmp.a = tmp.a - 0.05;
    GetComponent(SpriteRenderer).color = tmp;
    if (timer <= 0){
        Destroy(gameObject);
    }
}
