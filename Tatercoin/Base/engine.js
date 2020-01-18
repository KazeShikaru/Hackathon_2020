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
    constructor()
    {
        this.time_constant = 0.0166667;
        this.time = new Timer();
        this.grid = new Array(32);
        this.gui = new GUI();
    }
    
    add_object()
    {

    }

    load()
    {

    }

    save()
    {

    }

    init()
    {
        for(var i=0;i<32;i++)
        {
            this.grid[i] = new Array(18);
            for(var j=0;j<18;j++)
            {
                this.grid[i][j] = new Cell();
            }
        }

        this.gui.init();
    }

    run()
    {
        this.time.restart();
        console.log("run engine");
        while(true)
        {
            
            if(this.time.get_time_millis() > this.time_constant)
            {
                //input

                //logic
                
                //draw


                this.time.restart();
            }

        }
    }

    input()
    {

    }

    update()
    {

    }

    draw()
    {

    }
}


$(document).ready(function()
{
    var game = new Engine();

    console.log("instantiate engine");
    game.load();

    console.log("load engine");
    game.init();

    console.log("init engine");
    game.run();

    
});