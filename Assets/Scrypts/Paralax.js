#pragma strict

function scroll(vel:float) {

    var positionAnterior = transform.position.x;
    transform.position.x = positionAnterior + vel;

}
