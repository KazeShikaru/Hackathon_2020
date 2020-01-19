class GUI
{
    constructor()
    {
    	
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        

        console.log(this.cell_size);
      
        
               
    }
    
    resetScreenSize(){
    	 this.canvas.width = window.innerWidth;
         this.canvas.height = window.innerHeight;
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

    
    returnSquareSize(){
    	
    	return (wid/16 > this.canvas.height/9)?this.canvas.height/9:wid/16;
    }
    
    //Prints grid
    draw_grid()
    {
    	var wid =  this.canvas.width -320;
    	var size = (wid/16 > this.canvas.height/9)?this.canvas.height/9:wid/16;
    	
        for(var i=0;i<16;i++)
        {
            for(var j =0;j<9;j++)
            {
            		this.drawAnImage(size,
            				size,"bin/test_cell.png",
                        i*size,j*size);
                    
                
            }
        }

    }
    
    
    
    draw()
    {
        console.log("111111");
    	this.draw_grid();
    }

    
}