function farmS(){
	var element = ObjectManager.arr[1];
	//console.log("Grow progress: " + element.growProgress + ", planted: " + element.planted);
	if(element.planted){
		if(element.growProgress < 10){
			//console.log('growing');
			element.growProgress += element.growPerTick;
			//console.log('Grow amount: ' + element.growProgress);
		}
		else{// If fully grown, set harvestable
			element.harvestable = true;
			//console.log('Now harvestable');
			harvest();

		}
	}
	console.log(element.clicked);

	if(element.clicked)
	{
		console.log("farm clicked, " + element.growProgress + " " + element.harvestable);
		if(element.harvestable)
		{
			harvest();
		}
		else if(!element.planted)
		{
			plant(10);
		}
		element.clicked = false;
	}

	return null;
	//Plant a harvest of potatoes
}

function plant(seedsToPlant){
	var element = ObjectManager.arr[1];
	var seeds = ObjectManager.getSeeds();
	if(!element.planted){//Make sure not planted already
		if(seedsToPlant <= seeds){//Make sure player has enough seeds
			//console.log('Planting ' + seedsToPlant + ' seeds');
			ObjectManager.setPlanted(true);
			ObjectManager.setPlantedSeeds(seedsToPlant);
			ObjectManager.setSeeds(seeds - seedsToPlant);
			seeds = ObjectManager.getSeeds();
			//console.log('User now has '+seeds+' seeds');
		}
		else{
			//console.log('Not enough seeds');
		}
	}
	else{
		//console.log('Already planted');
	}
}

function harvest(){
	var element = ObjectManager.arr[1];
	if(element.planted && element.growProgress == 10){//Make sure farm is planted
		//TODO Get upgrade modifiers here when they're implemented
		var harvestYield = element.plantedSeeds * Math.random();
		ObjectManager.transfer(2, harvestYield);
		ObjectManager.setPlanted(false);
		ObjectManager.setPlantedSeeds(0);
		element.growProgress = 0;
		harvestYield = 0;
		//console.log('Harvested with yield of '+harvestYield +' kg of raw potatoes');
	}
	else{
		//console.log('Farm not planted');
	}
}
