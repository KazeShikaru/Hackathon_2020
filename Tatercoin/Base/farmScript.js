module.exports = 
{
	run: farm(element, add =0)
	{
		if( add != 0)
		{
			
		}
		if(growAmount < 10 && element.planted = true)
		{
			element.growAmount += element.growPerTick;
			return NULL;
		}
		else
		{
			element.harvestable = true;
			element.onclick = function()
			{
				element.growAmount = 0;
				element.planted = false;
				return 2;
			}
			return NULL;
		}
	}
};