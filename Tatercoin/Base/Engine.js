
class Engine
{
	//Basic Constructor for Engine
    constructor()
    {
    	this.tick = 0;
        this.time = new Timer();
        this.gui = new GUI();
    }

    //Initiates Engine
    start()
    {
    	setInterval(function() { gameloop(this); }, 32);

        ObjectManager.build();

        console.log("init gui");
        
        this.gui.init();

    }
}

//Every Game Loop: Call objectManager execute, Call GUI update
function gameloop(engine)
{
    ObjectManager.execute();

    this.tick++;
    if(this.tick%10==0)
    {
        this.gui.clear();
        this.gui.draw();
    }

}

