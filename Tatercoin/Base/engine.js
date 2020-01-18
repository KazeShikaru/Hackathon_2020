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

class cell
{

}

//timer
class Timer
{
    constructor()
    {
        this.curr_time = new Date().getTime();
    }

    get_time_millis()
    {
        return new Date().getTime() - this.curr_time;
    }

    restart()
    {
        this.curr_time = new Date().getTime();
    }
}

//a game object
// the child needs to overwrite the execure function and implement its logic
// 1 execute per tick
class Object
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.level = 0;
    }

    execute();


}

$($document).ready(function()
{
    var game = Engine();

    game.load();

    game.run();
    
});