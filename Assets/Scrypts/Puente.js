#pragma strict

var player :GameObject;
var posicionJugadorX: float;
var frag : GameObject;
var fragmento:GameObject;
function Start () {
    player = GameObject.Find("/Personaje/PJ");

}

function Update () {
    posicionJugadorX = player.transform.position.x;
    var spawn_position = Vector3(transform.position.x -3.5f,transform.position.y,1);
    if (posicionJugadorX > 8){
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = 0.1f;
        spawn_position = Vector3(transform.position.x -2.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = -0.2f;
        spawn_position = Vector3(transform.position.x -1.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = 0.2f;
        spawn_position = Vector3(transform.position.x -0.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = -0.1f;
        spawn_position = Vector3(transform.position.x +0.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = 0.3f;
        spawn_position = Vector3(transform.position.x +1.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = -0.1f;
        spawn_position = Vector3(transform.position.x +2.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = 0.1f;
        spawn_position = Vector3(transform.position.x +3.5f,transform.position.y,1);
        frag = Instantiate(fragmento, spawn_position, Quaternion.identity);
        frag.GetComponent(FragmentoPuente).rotation = -0.2f;

        Destroy(gameObject);  
    }    
}
