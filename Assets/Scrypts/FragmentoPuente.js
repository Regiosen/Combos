#pragma strict

var rotation :float;
var timer : int;

function Start () {
}
function Update () {
    var tmp = GetComponent(SpriteRenderer).color;
    tmp.a = tmp.a - 0.05;
    GetComponent(SpriteRenderer).color = tmp;
    transform.rotation.z += rotation;
    timer += 1;
    if (timer >= 60){
        Destroy(gameObject);    
    }
}
