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
    	this.wid =  this.canvas.width -320;
    	this.size = (this.wid/16 > this.canvas.height/9)?this.canvas.height/9:this.wid/16;
    	
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
    	this.wid =  this.canvas.width -320;
    	this.size = (this.wid/16 > this.canvas.height/9)?this.canvas.height/9:this.wid/16;
    	var yard = ObjectManager.getYard().grid;
    	//console.log(yard);
    	var imageSrc = ""; 
    	for(var i =0; i<16;i++){
    		for (var j = 0; j<9;j++){
                //console.log(i + " " + j);
                //console.log(yard[0]);
    			var o = yard[i][j][1];

    			switch(o){
    			case 0:
    				imageSrc = "bin/grass.PNG";
    				break;
    			case 1:
                    var prog = ObjectManager.objRet(1).growProgress;
                    if(prog/600 < .25)
                    {
                        imageSrc = "bin/Stage1.png";
                    }
                    else if(prog/600 < .5)
                    {
                        imageSrc = "bin/Stage2.png";
                    }
                    else if(prog/600 < .75)
                    {
                        imageSrc = "bin/Stage3.png";
                    }
                    else
                    {
                        imageSrc = "bin/Stage4.png";
                    }
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
    			
    			this.drawAnImage(this.size,
        				this.size,imageSrc,
                    i*this.size,j*this.size);
    			
    			   			
    		}
    	}
    	
    	
    }
    
    
    //call to draw all things needed to draw
    draw()
    {
    	//this.draw_grid();
    	this.draw_yard();
    }

    
}