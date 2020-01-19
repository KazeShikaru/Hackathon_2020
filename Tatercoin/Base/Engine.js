
class Engine
{
	//Basic Constructor for Engine
    constructor()
    {
    	this.tick = 0;
        this.time = new Timer();
        this.gui = new GUI();
        this.eventHandler =  new EventHandler();
    }

    //Initiates Engine
    start()
    {
    	setInterval(function(eng) { this.gameloop(eng); }, 33,this);

        ObjectManager.build();

        this.eventHandler.init(this.gui);
        engine.gui.draw();
    }
}

//Every Game Loop: Call objectManager execute, Call GUI update
function gameloop(engine)
{
    ObjectManager.execute();

    engine.tick++;
    
    if(engine.tick%30==0)
    {
    	engine.gui.draw();
    	
    }
   

}

