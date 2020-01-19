class EventHandler
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.cell_size = 69;
    }

    init(cell_size)
    {
        this.cell_size = cell_size;
        this.canvas.addEventListener('mousedown', e => {this.getGridPos(canvas, e)})
    }

    getGridPos(canvas, event)
    {
        let rect = canvas.getBoundingClientRect(); 
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }
    
}

