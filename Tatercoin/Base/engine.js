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
        this.objects = [];
        this.grid = new Cell[32][18];
        this
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

    }

    run()
    {
        this.time.restart();

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


$($document).ready(function()
{
    var game = Engine();

    game.load();

    game.run();
    
});