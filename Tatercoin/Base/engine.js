class Engine
{
    constructor()
    {
        this.time_constant = 0.0166667;
        this.time = new Timer();
        this.objects = [];
        this.grid = new Cell[32][18];
    }
    
    add_object()
    {

    }

    load()
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