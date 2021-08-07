class Food {
    constructor(){
        this.stock = 0;
        this.image = loadImage('Images/Milk.png');
    }

    UpdateFood(stock){
        this.stock = stock;
    }

    DetectFood(){
        this.stock = this.stock - 1;
    }

    GetFood(){
        return this.stock;
    }

    display(){
        var x = 55;
        var y = 110;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
      
        if(this.stock!=0){
            for(var i=0;i<this.stock;i++){
                if(i%10==0){
                    x=55;
                    y=y+50;
                }
            image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}