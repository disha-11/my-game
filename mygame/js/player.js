class Player{
constructor(){
    this.name = null;
    this.mom = null;
    
}
getName(){
    var getNameRef = database.ref('Name');
    getNameRef.on("value",(data)=>{
      this.name = data.val();
    })

}
updateName(info){
    database.ref('/').update({
      Name: info
    });
  }
getMom(){
    var getMomRef = database.ref('Mom');
    getMomRef.on("value",(data)=>{
     this.mom = data.val();
    })

}
updateMom(info){
    database.ref('/').update({
      Mom: info
    });
  }
}