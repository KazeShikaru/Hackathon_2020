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
    set_size()
    {
        console.log('set size');
        this.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        this.height = this.width/this.proportion;
        this.cell_w = this.width/32;
        this.cell_h = this.width/32;

        //resize canvas
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        
        //call something that resizes objects
        console.log('set size done  ');
    }

    init()
    {

        this.canvas =   document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        console.log(this.canvas);
        console.log(this.context);

        console.log("init canvas size");
        this.set_size();
        this.context.fillStyle = 'black';
        this.context.fillRect(10, 10, 150, 100)

    }
}