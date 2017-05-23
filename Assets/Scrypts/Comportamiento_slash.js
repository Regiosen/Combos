#pragma strict

var timer: float = 0.2;
var sword_offset: Vector3;
var fuente: GameObject;
var right: boolean;
var veloc : float;       //en 2 esta bien

function Start () {

    var fuente = GameObject.Find("PJ");
    right = fuente.GetComponent(movimientoPJ).facing_right;
    if (!right){
        transform.localScale.x = (transform.localScale.x)*(-1);
    }
}

function Update () {

      //por algun motivo esto se dice dentro
                                         //de la funcion en la que se quiere usar 
    timer -= Time.deltaTime;
        if (timer <= 0){
        fuente.GetComponent(Animator).SetBool("SlashHaciaAbajo", true);
        Destroy(gameObject);
    }
    if (right){
        GetComponent.<Rigidbody2D>().velocity.x = veloc;
    }
    else if (!right){
        GetComponent.<Rigidbody2D>().velocity.x = -veloc;
    }
}

function OnTriggerEnter2D (other : Collider2D) {
    if (other.tag == "Walls"){
        Destroy(gameObject);
    }
    if (other.tag == "Enemigo"){
        Debug.Log("GOTCHA!");
    }
    if (other.tag == "Boton"){
        other.GetComponent(boton).Activar();
    }
}
