class Yard
{
	//Basic constructor
	constructor(){
		
		this.grid = new Array(16);
		for(var i=0;i<16;i++)
        {//console.log(this.grid)
            this.grid[i] = new Array(9);
            for(var j=0;j<9;j++)
            {
            	if(j<4 && i < 4)
            	{
            		this.grid[i][j] = new Array(4);
               		this.grid[i][j] = [1,0,0,0];
            	}
            	else if(j>4 && i < 4)
            	{
            		this.grid[i][j] = new Array(4);
                	this.grid[i][j] = [2,2,0,0];
            	}
            	else
            	{
            		this.grid[i][j] = new Array(4);
                	this.grid[i][j] = [0,1,0,0];
            	}
				//[0]building type//[1]sprite stage//[2]growthstage//[3]Unique
				//console.log(this.grid)
            }
		}
		
	}
	
	//add a new building
	addBuilding(x,y,a,b,c,d){
				
		this.grid[x][y] = [a,b,c,d];
		
	}
	
	
	getBuilding(x,y){
		
		
		return this.grid[x][y];
		
	}







}