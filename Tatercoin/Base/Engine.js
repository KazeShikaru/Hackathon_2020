/*
    load        - loads game data from server
    save        - save game data to server
    init        - set game based on data from the server
    add_objects - init existing objects
    run         - run game loop
    input()     - get player input
    update()    -  update game logic
    draw()      - draw info on canvas
*/
class Engine
{
	//Basic Constructor for Engine
    constructor()
    {
    	this.tick =0;
        this.time = new Timer();
        this.grid = new Array(32);
        
    }
    
    //Initiates Engine
    start()
    {
    	setInterval(function() { engine.gameloop(); }, 32);
    	for(var i=0;i<32;i++)
        {
            this.grid[i] = new Array(18);
            for(var j=0;j<18;j++)
            {
                this.grid[i][j] = new Cell();
            }
        }

        console.log("init gui");
        this.gui.init();

    }

    //Every Game Loop: Call objectManager execute, Call GUI update
    gameloop()
    {
    	objectManager.execute();        
        this.tick++;
        if(tick%10)
        {
        	this.gui.clear();
            this.gui.draw_grid();
        }
    	
    }



}




