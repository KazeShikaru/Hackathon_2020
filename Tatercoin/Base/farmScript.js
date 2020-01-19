module.exports = {
	run: farm(element){
		if(growAmount < 10 && element.planted = true){ // If planted, grow
			element.growAmount += element.growPerTick;
		}
		else { // If fully grown, set harvestable
			element.harvestable = true;
		}
		return null;
	}
};
