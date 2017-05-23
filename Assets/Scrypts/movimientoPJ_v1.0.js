#pragma strict

var anim : Animator;
function Start (){
    anim = GetComponent(Animator);
    fin_jump = true;
    en_piso = false;
    facing_right = true;
}
//************************************
// variables de desplazamiento lateral
//************************************

var movimientoDer : KeyCode;
var movimientoIzq : KeyCode;
var facing_right: boolean;
var veloc : float;       //en 2 esta bien

//******************
//variables de salto
//******************

var col : Collision2D;
var Salto : KeyCode;
var en_piso : boolean;
var fin_jump: boolean;
var timer: float = 0;
var tiemp_salto: float;   //en 0.5 esta bien


//*******************
//variables de ataque
//*******************

var sword_offset: Vector3; //distancia de la espada a el pj
var esp: GameObject;
var espada: GameObject;
var paredes: GameObject;
var ataques: boolean;
var spawn_position: Vector3;

function Update () {

    //******************
    //Movimiento lateral
    //******************
    
    if (Input.GetKey(movimientoDer)){
        anim.SetBool("Mov_lateral", true);
        GetComponent.<Rigidbody2D>().velocity.x = veloc;
        if (transform.localScale.x<0){
            transform.localScale.x = Mathf.Abs(transform.localScale.x);
            facing_right = true;            
        }
        
    }
    else if (Input.GetKey(movimientoIzq)){
        anim.SetBool("Mov_lateral", true);
        GetComponent.<Rigidbody2D>().velocity.x = veloc*(-1);
        if (transform.localScale.x>0){
            transform.localScale.x = (transform.localScale.x)*(-1);
            facing_right = false;
        }
    }
    else {
        anim.SetBool("Mov_lateral", false);
        GetComponent.<Rigidbody2D>().velocity.x = 0;
    }
    
    //*****
    //Salto
    //*****
    
    if ((Input.GetButtonDown("Jump"))&&(en_piso)){
        timer = 0;        
        GetComponent.<Rigidbody2D>().velocity.y = 3;
        en_piso = false;
        fin_jump = false;
        Debug.LogError("Se Salto");
    } 
    
    //Durante salto
    
    if ((!en_piso)&&(!fin_jump)){
        timer += Time.deltaTime;
        
        if (Input.GetButtonUp("Jump")){
            GetComponent.<Rigidbody2D>().velocity.y = 0;
            fin_jump = true;
        }
        
        else if (timer<0.25){
            GetComponent.<Rigidbody2D>().velocity.y = 3;
        }
        
        else if (timer>=0.25) {
            GetComponent.<Rigidbody2D>().velocity.y = 0;
            fin_jump = true;    
        }
    }    

    //******    
    //Ataque
    //******
    
    //ataque espada basica
    
    if (Input.GetButtonDown("AtaqueBasico")){
         
        basicSword();
    } 
    
    //ataque espada movimiento
    
    if (Input.GetButtonDown("AtaqueDeMovimiento")){
         
        dashSword();
    } 
    
}
    function basicSword(){
        if (facing_right){
            sword_offset = Vector3(0.29, -0.05,0);
            spawn_position = transform.position;
            spawn_position = spawn_position + sword_offset;
            Destroy(esp);
            esp = Instantiate(espada, spawn_position, Quaternion.identity);
            esp.transform.parent = transform;
        }
        else if (!(facing_right)){
            sword_offset = Vector3(-0.29, -0.05,0);
            spawn_position = transform.position;
            spawn_position = spawn_position + sword_offset;
            Destroy(esp);
            esp = Instantiate(espada, spawn_position, Quaternion.identity);
            esp.transform.parent = transform;
            esp.transform.localScale.x = (transform.localScale.x)*(-1);
        }
    }
    
    function dashSword(){
        if (facing_right){
            transform.position = transform.position + Vector3(1, 0,0);
            sword_offset = Vector3(-1, -0.05,0);
            spawn_position = transform.position;
            spawn_position = spawn_position + sword_offset;
            Destroy(esp);
            esp = Instantiate(espada, spawn_position, Quaternion.identity);
            esp.transform.parent = transform;
        }
        else if (!(facing_right)){
            transform.position = transform.position - Vector3(1, 0,0);
            sword_offset = Vector3(1, -0.05,0);
            spawn_position = transform.position;
            spawn_position = spawn_position + sword_offset;
            Destroy(esp);
            esp = Instantiate(espada, spawn_position, Quaternion.identity);
            esp.transform.parent = transform;
            esp.transform.localScale.x = (transform.localScale.x)*(-1);
        }
    }

    function OnCollisionEnter2D(col: Collision2D) {
    if (col.transform.tag == "Ground"){
        en_piso = true;
        fin_jump = false;        
        }
    }  

