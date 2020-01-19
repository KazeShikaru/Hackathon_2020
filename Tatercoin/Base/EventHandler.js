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
        this.cell_size = this.gui.returnSquareSize();
        let rect = canvas.getBoundingClientRect(); 
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let aux = (Math.floor(x/this.cell_size) + Math.floor(y/this.cell_size) * 16);

        this.gui.clickLocation(aux);
        ObjectManager.clickLocation(aux);
            
    }
    
}

