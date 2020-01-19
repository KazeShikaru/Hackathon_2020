module.exports = {
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
		if(!_farm.planted){//Make sure not planted already
			if(seedsToPlant <= seeds){//Make sure player has enough seeds
				console.log('Planting ' + seedsToPlant + ' seeds');
				_farm.planted = true;
				_farm.plantedSeeds = seedsToPlant;
				seeds-= seedsToPlant;
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
		if(_farm.planted){//Make sure farm is planted
			//TODO Get upgrade modifiers here when they're implemented
			var harvestYield = _farm.plantedSeeds * math.random();
			store("potatoes", harvestYield);
		}
		else{
			console.log('Farm not planted');
		}
	}
};
