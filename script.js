// hier komt je code
let knop=document.querySelector(".fig3 h2");

let teller=1
function tellen(){
    if(teller==5){
        teller=1
    }
    else{
        knop.innerHTML=[teller]
        teller++
    }
}

knop.onclick=tellen;