class GUI
{
    constructor()
    {
        this.width = 800;
        this.height = 600;
        this.proportion = 1.77777778;
        this.cell_size;
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
        this.cell_size = this.width/32;

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
        //this.context.fillStyle = 'black';
        //this.context.fillRect(10, 10, 150, 100)

    }

    clear()
    {
        this.context.clearRect(0,0,this.width,this.height);
    }

    draw_grid()
    {
        for(var i=0;i<32;i++)
        {
            for(var j =0;j<18;j++)
            {
                this.context.drawImage(get_cell_info(i,j),
                    i*this.cell_size,j*this.cell_size,
                    this.cell_size,this.cell_size);
            }
        }

    }

    draw_objects()
    {

    }

    get_cell_info( x, y)
    {
        return "/bin/test_cell.png";//new Image("/bin/test_cell.png");
    }
}