class GUI
{
	//Constructor using default canvas from html
    constructor()
    {
    	this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        
        this.wid;
        this.size;

        console.log(this.cell_size);
    }
    
    //call after on-resize to reset size of playing field
    resetScreenSize(){
    	 this.canvas.width = window.innerWidth;
         this.canvas.height = window.innerHeight;
    }

    //draws image onto canvas
    drawAnImage(width, height, color, x, y ) {


        this.image = new Image();
        this.image.src = color;

        this.width = width;
        this.height = height;
        this.ctx.drawImage(this.image,x,y,
                    width, height);
     }

    //empty canvas before redrawing
    clear(){
    	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //get the current size of each tile
    returnSquareSize()
    {
        if(this.wid == undefined) return -1;
        else
        {
            return (this.wid/16 > this.canvas.height/9)?this.canvas.height/9:this.wid/16;
        }
    	
    }
    
    //receives a click
    clickLocation(pos)
    {
        let x = pos%16;
        let y = Math.floor(pos/16); 
    }

    // Prints grid
    draw_grid()
    {
    	wid =  this.canvas.width -320;
    	size = (wid/16 > this.canvas.height/9)?this.canvas.height/9:wid/16;
    	
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
    
    draw_yard(){
    	wid =  this.canvas.width -320;
    	size = (wid/16 > this.canvas.height/9)?this.canvas.height/9:wid/16;
    	var yard = ObjectManager.getYard();
    	console.log(yard);
    	var imageSrc = "";
    	for(var i =0; i<16;i++){
    		for (var j = 0; j<9;j++){
    			var o = yard[i][j][1];
    			
    			switch(o){
    			case 0:
    				imageSrc = "bin/Test1.PNG";
    				break;
    			case 1:
    				imageSrc = "bin/Test2.PNG";
    				break;
    			case 2:
    				imageSrc = "bin/Test3.PNG";
    				break;
    			case 3:
    				imageSrc = "bin/Test4.PNG";
    				break;
    			case 4:
    				imageSrc = "bin/Test5.PNG";
    				break;
    			
    			
    			
    			}
    			
    			this.drawAnImage(size,
        				size,imageSrc,
                    i*size,j*size);
    			
    			   			
    		}
    	}
    	
    	
    }
    
    
    //call to draw all things needed to draw
    draw()
    {
        console.log("111111");
    	//this.draw_grid();
    	this.draw_yard();
    }

    
}