class storageScript
{
	function storageS(element)
	{
		if(add > 0)//checks if any potatoes to add
		{
			element.potatoes += add;// adds potatoes and resets add count
			add = 0;
		}
		/*exportProcess is amount of potatoes to export to the processor
		export Market is amount of potatoes to export to the processor,
		both will be set by the index on click
		*/
		if(exportProcess > 0)//if any potatoes to export to processing
		{
			if(potatoes >= exportProcess)//makes sure enough potatoes are stored to export
			{
				element.potatoes -= exportProcess;//reduce potatoes by export ammount 
				manager.transfer(3, exportProcess);//call transfer to finish transfer, giving it 3(processor) and export number
			}
			else
			{
				return -1;//-1 error not enough potatoes
			}
		}
		if(exportMarket > 0)//if any potatoes to export to market
		{
			if(exportMarket <= potatoes)//if enough potatoes to export
			{
				element.potatoes -= exportProcess;// substract exported
				manager.transfer(4, exportMarket);//call transfer to finish transfer with 4 for market
			}
			else
			{
				return -1;//returnt -1 not enough tatos
			}
		}
		return 0;//return 0 no error.
	}
};