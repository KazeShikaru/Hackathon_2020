
class Engine
{
	//Basic Constructor for Engine
    constructor()
    {
    	this.tick =0;
        this.time = new Timer();
        this.gui = new GUI();
    }

    //Initiates Engine
    start()
    {
    	setInterval(function() { engine.gameloop(); }, 32);

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
            this.gui.draw();
        }

    }



}
