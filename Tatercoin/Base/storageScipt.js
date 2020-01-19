module.exports = 
{
	run: storage(element, add = 0)
	{
		if(add > 0)
		{
			element.potatoes += add;
		}
		if(exportProcess > 0)
		{
			if(potatoes >= exportProcess)
			{
				element.potatoes -= exportProcess;
			}
			else
			{
				return -1;
			}
		}
		if(exportMarket > 0)
		{
			if(exportMarket > 0)
			{
				element.potatoes -= exportProcess;
			}
			else
			{
				return -1;
			}
		}
	}
};