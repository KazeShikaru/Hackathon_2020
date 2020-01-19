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
    function Engine()
    {
    	this.tick =0;
        this.time = new Timer();
        
        
    }
    
    //Initiates Engine
    function start()
    {
    	setInterval(function() { engine.gameloop(); }, 32);
    	

        console.log("init gui");
        this.gui.init();

    }

    //Every Game Loop: Call objectManager execute, Call GUI update
    function gameloop(){
    	objectManager.execute();        
        this.tick++;
        if(tick%10){
        	this.gui.clear();
            this.gui.draw();
        }
    	
    }



}




