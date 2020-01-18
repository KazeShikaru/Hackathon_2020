class Engine
{
    constructor()
    {
        this.time_constant = 0.0166667;
    }
    
    load()

    run()

}

class cell
{

}

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