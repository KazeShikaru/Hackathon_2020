class Yard
{
	
	constructor(){
		
		this.grid = new Array(16);
		for(var i=0;i<16;i++)
        {
            this.grid[i] = new Array(9);
            for(var j=0;j<9;j++)
            {
                this.grid[i][j] = new Cell();
            }
		}
		
	}










}