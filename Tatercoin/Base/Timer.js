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