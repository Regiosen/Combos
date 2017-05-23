#pragma strict

var frames: int = 20;

function Start () {
}

function Update () {
    frames -= 1;
    var tmp = GetComponent(SpriteRenderer).color;
    tmp.a = tmp.a - 0.05;
    GetComponent(SpriteRenderer).color = tmp;
    if (frames <= 0){
        Destroy(gameObject);
    }
}
