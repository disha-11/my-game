class Game{
    constructor(){

    }
getState(){
    var stateref=database.ref("gameState").on("value",(data)=>{
 gameState=data.val();
    })
}
updateState(data){
    database.ref("/").update({
        gameState:data
    })
}
start(){
    if(gameState===0){
        
        player=new Player();
       
    }
}
choose(){
    if(gameState===1){
    }
}
chat(){

}

end(){

}

}