function farmS(element){
	if(element.growAmount < 10 && element.planted === true){ // If planted, grow
		element.growAmount += element.growPerTick;
	}
	else { // If fully grown, set harvestable
		element.harvestable = true;
	}
	return null;
	//Plant a harvest of potatoes
}

function plant(seedsToPlant){
	var element = ObjectManager.arr[1];
	var seeds = ObjectManager.getSeeds();
	if(!element.planted){//Make sure not planted already
		if(seedsToPlant <= seeds){//Make sure player has enough seeds
			console.log('Planting ' + seedsToPlant + ' seeds');
			element.planted = true;
			element.plantedSeeds = seedsToPlant;
			ObjectManager.setSeeds(seeds - seedsToPlant);
			seeds = ObjectManager.getSeeds();
			console.log('User now has '+seeds+' seeds');
		}
		else{
			console.log('Not enough seeds');
		}
	}
	else{
		console.log('Already planted');
	}
}

function harvest(){
	var element = ObjectManager.arr[1];
	if(element.planted && element.growAmount == 60){//Make sure farm is planted
		//TODO Get upgrade modifiers here when they're implemented
		var harvestYield = element.plantedSeeds * math.random() * upgradeMod;
		ObjectManager.transfer(2, harvestYield);
		element.planted = false;
		element.plantedSeeds = 0;
		console.log('Harvested with yield of '+harvestYield * upgradeMod+' kg of raw potatoes');
	}
	else{
		console.log('Farm not planted');
	}
}
