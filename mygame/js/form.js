class Form{
    constructor(){
      
       
       this.sel = createSelect();

    }
    hide1(){
       this.next2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        this.sel.hide();
        this. input1.position(200,200); 
       
      
        this.next.mousePressed(()=>{
            console.log(player.name)
            gameState=1;
         })
    }
    hide2(){
        //this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        
        
            this.next2.mousePressed(()=>{
gameState=2;
             })
          
    }
    hide3(){
        this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
       // this.choose.hide();
        //this. textBox.hide();
        //this.mics.hide();
       // this.bye.hide();
        this.sel.hide();
    }
   
}