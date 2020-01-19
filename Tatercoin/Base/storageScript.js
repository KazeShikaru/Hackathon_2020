function StorageS(element){
	var element = ObjectManager.arr[2];
	if(element.add > 0)//checks if any potatoes to add
	{
		element.potatoes += element.add;// adds potatoes and resets add count
		element.add = 0;
	}

	if(element.clicked || element.autoSell)
	{
		element.exportMarket = element.potatoes;
		element.clicked = false;
	}
	/*exportProcess is amount of potatoes to export to the processor
	export Market is amount of potatoes to export to the processor,s
	both will be set by the index on click
	*/
	if(element.exportProcess > 0)//if any potatoes to export to Processing
	{
		if(element.potatoes >= element.exportProcess)//makes sure enough potatoes are stored to export
		{
			element.potatoes -= element.exportProcess;//reduce potatoes by export ammount
			ObjectManager.transfer(3, element.exportProcess);//call transfer to finish transfer, giving it 3(processor) and export number
			element.exportProcess = 0;
		}
		else
		{
			return -1;//-1 error not enough potatoes
		}
	}
	if(element.exportMarket > 0)//if any potatoes to export to market
	{
		console.log(element.exportMarket);
		if(element.exportMarket <= element.potatoes)//if enough potatoes to export
		{
			console.log("exporting potatoes to the market");
			element.potatoes -= element.exportMarket;// substract exported
			ObjectManager.transfer(4, element.exportMarket);//call transfer to finish transfer with 4 for market
			element.exportMarket = 0;
		}
		else
		{
			return -1;//returnt -1 not enough tatos
		}
	}
	return 0;//return 0 no error.
}
