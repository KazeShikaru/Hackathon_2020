module.exports = {
	run: farm(element){
		if(growAmount < 10 && element.planted = true){ // If planted, grow
			element.growAmount += element.growPerTick;
			return null;
		}
		else { // If fully grown, set harvestable
			element.harvestable = true;
			//Harvest
			element.onclick = function() {
				element.growAmount = 0;
				element.planted = false;
				return 2;
			}
			return null;
		}
	}
};
