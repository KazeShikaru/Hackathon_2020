
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
    	setInterval(function(eng) { this.gameloop(eng); }, 32,this);

        ObjectManager.build();

        console.log("init gui");

        eventHandler.init(this.gui);
    }
}

//Every Game Loop: Call objectManager execute, Call GUI update
function gameloop(engine)
{
    ObjectManager.execute();

    engine.tick++;
    
    if(engine.tick%60==0)
    {
        
        
    	engine.gui.draw();
    	
    }
   

}

