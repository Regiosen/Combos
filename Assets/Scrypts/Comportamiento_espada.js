#pragma strict

var timer: float = 0.5;
var sword_offset: Vector3;
var fuente: GameObject;
var player :GameObject;
var right: boolean;

function Start () {
     player = GameObject.Find("/Personaje/PJ");
}

function Update () {
    timer -= Time.deltaTime;
    if (timer <= 0){
        Destroy(gameObject);
    }
}
function OnTriggerEnter2D (other : Collider2D) {
    Debug.Log(other.name);
    if (other.tag == "Enemigo"){
        Debug.Log("GOTCHA!");
    }
    if (other.tag == "Boton"){
        other.GetComponent(boton).Activar();
    }
}
