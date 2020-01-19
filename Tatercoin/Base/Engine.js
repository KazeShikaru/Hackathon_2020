
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


    }
}

//Every Game Loop: Call objectManager execute, Call GUI update
function gameloop(engine)
{
    ObjectManager.execute();

    engine.tick++;
    
    if(engine.tick%10==0)
    {
        engine
        
    	engine.gui.draw();
    	
    }
   

}

