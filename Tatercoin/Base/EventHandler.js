class EventHandler
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.gui = null;
        this.cell_size = 69;
    }

    init(gui)
    {
        this.gui = gui;
        this.cell_size = this.gui.returnSquareSize();
        this.canvas.addEventListener('mousedown', e => {this.getGridPos(canvas, e)})
    }

    getGridPos(canvas, event)
    {
        let rect = canvas.getBoundingClientRect(); 
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;

        aux = (Math.floor(x/this.cell_size) + Math.floor(y/this.cell_size) * 16);

        this.gui.clickLocation(aux);
        ObjectManager.clickLocation(aux);
            
    }
    
}

