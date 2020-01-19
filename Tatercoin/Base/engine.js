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

        console.log("init gui");
        this.gui.init();
    }

    input()
    {

    }

    update()
    {

    }

    draw()
    {
        this.gui.clear();
        this.gui.draw_grid();
    } 
}

function run(game)
{
    console.log('run');

    

    game.draw();
}


