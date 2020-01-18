class GUI
{
    constructor()
    {
        this.width = 800;
        this.height = 600;
        this.proportion = 1.77777778;
        this.cell_w;
        this.cell_h;
        this.canvas;
        this.context;
    }

    //set the canvas size
    //the canvas needs to be initialized first
    set_Size()
    {
        this.width = $(window).width();
        this.height = this.width/this.proportion;

        this.cell_w = this.width/32;
        this.cell_h = this.width/32;

        //resize canvas
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        
        //call something that resizes objects

    }

    init()
    {
        this.canvas =  document.getElementById('canvas');
        this.context = canvas.getContext('2d');

        this.set_Size();
        this.context.fillStyle = 'black';

    }
}