class EventHandler
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.cell_width = 69;
    }

    init()
    {
        this.canvas.addEventListener('mousedown', e => {this.getGridPos(canvas, e)})
    }

    getGridPos(canvas, event)
    {
        let rect = canvas.getBoundingClientRect(); 
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }
    
}

