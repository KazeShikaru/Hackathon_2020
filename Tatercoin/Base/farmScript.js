var exp = {
	run: farm(element){
		if(element.growAmount < 10 && element.planted = true){ // If planted, grow
			element.growAmount += element.growPerTick;
		}
		else { // If fully grown, set harvestable
			element.harvestable = true;
		}
		return null;
	}

	//Plant a harvest of potatoes
	function plant(seedsToPlant){
		var seeds = getSeeds();
		if(!element.planted){//Make sure not planted already
			if(seedsToPlant <= seeds){//Make sure player has enough seeds
				console.log('Planting ' + seedsToPlant + ' seeds');
				element.planted = true;
				element.plantedSeeds = seedsToPlant;
				setSeeds(seeds - seedsToPlant);
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
		if(element.planted){//Make sure farm is planted
			//TODO Get upgrade modifiers here when they're implemented
			var harvestYield = element.plantedSeeds * math.random();
			store("potatoes", harvestYield);
			element.planted = false;
			element.plantedSeeds = 0;
			console.log('Harvested with yield of '+harvestYield+' kg of raw potatoes');
		}
		else{
			console.log('Farm not planted');
		}
	}
}

module.exports = exp;
