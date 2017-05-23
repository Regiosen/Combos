#pragma strict

function Start () {

}

function Update () {
if ((transform.position.x>10)
    &&(transform.position.x<11)
    &&(transform.position.y<1)
    &&(transform.position.y>0)){
        Application.LoadLevel(1);
        
    }
}