class Farm extends Object {
  constructor(){
    super(1, "Farm");
    this.growProgress = 0;
    this.growPerTick = 1;
    this.plantedSeeds = 0;
    this.planted = false;
	this.harvestable = false;
	this.clicked = false;
    //Upgrades

  }
}
