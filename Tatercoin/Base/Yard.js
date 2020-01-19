class Yard
{
	//Basic constructor
	constructor(){
		
		this.grid = new Array(16);
		for(var i=0;i<16;i++)
        {
            this.grid[i] = new Array(9);
            for(var j=0;j<9;j++)
            {
            	//[0]building type//[1]sprite stage//[2]growthstage//[3]Unique
                this.grid[i][j] = new Array(4);
                this.grid[i][j] = [0,0,0,0];
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