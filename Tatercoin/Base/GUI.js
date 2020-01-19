class GUI
{
    constructor()
    {
    	
        this.canvas = document.getElementById("canvas");
        this.canvas.width = 971;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
        
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(200, 100);
        this.ctx.stroke();
        console.log("hello");
        
        this.drawAnImage(64,64,"bin/test_cell.png",
                64,64);
        console.log(this.cell_size);
      
        
               
    }

    drawAnImage(width, height, color, x, y ) {


        this.image = new Image();
        this.image.src = color;

        this.width = width;
        this.height = height;
        this.ctx.drawImage(this.image,x,y,
                    width, height);

        

    }

 
    clear(){
    	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }




    //gonna remove this later
    draw_grid()
    {

        
        for(var i=0;i<16;i++)
        {
            for(var j =0;j<9;j++)
            {
            		this.drawAnImage(64,
                        64,"bin/test_cell.png",
                        i*64,j*64);
                    
                
            }
        }

    }
    
    draw()
    {
        console.log("111111");
    	this.draw_grid();
    }

    
}