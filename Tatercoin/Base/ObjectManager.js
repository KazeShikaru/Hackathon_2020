class ObjectManager
{
	static build()//constructor for new game
	{
		this.arr = ["Road Placeholder", new Farm(), new Storage(), new Processing(), new Market()];//create new object for each building
		this.gameVariables = new gameVars();//initiates game variables
		this.landPos = [0,0];
		this.yard = new Yard();

	}
	/*static build(playerString)
	{
		//implement game loading
	}*/

	static getYard(){
		return this.yard;//return yard
	}
	static getSeeds()
	{
		return this.gameVariables.seeds;//returns seed count from gamevariables
	}
	static getCoins()
	{
		return this.gameVariables.tatercoins;// returns coin count from game variables
	}
	static setSeeds(seeds)
	{
		this.gameVariables.seeds = seeds;// increment seeds by given amount
	}
	static addCoins(coin)
	{
		return this.gameVariables.tatercoins += coin// increment coins by given amount
	}

	static buySeeds(amount)
	{
		if(amount <= this.getCoins())
		{
			this.gameVariables.tatercoins -= amount;
			this.gameVariables.seeds += amount * 20;
		}
	}



	//Fuck it
	static setPlanted(p)
	{
		this.arr[1].planted = p;
	}
	static setPlantedSeeds(s)
	{
		this.arr[1].plantedSeeds = s;
	}

	static upgradeField()
	{
		if(this.getCoins >=50)
		{
			this.gameVariables.tatercoins -= 50;
			this.arr[1].harvMod +=.5;
		}
	}

	static upgradeStorage()
	{
		if(this.getCoins >=500 && this.arr[2].autoSell == false)
		{
			this.gameVariables.tatercoins -=500;
			this.arr[2].autoSell = true;
		}
	}

	static execute()
	{
		for(var element in this.arr)//iterate through elements given per game tick
		{
			//console.log(element);
			var ret = this.run(element);
			if(ret != 0)
			{
				if(ret == -1)
				{
					//popup for not enough potatoes to transfer
				}
				else if(ret == -2)
				{
					//popup for incorrect infastructure to perform the action
				}
			}
		}
	}

	static objRet(value)//return object at index array
	{
		return this.arr[value];// return object
	}

	//rename this function
	static run(element)
	{
		if(element == undefined)
		{
			//console.log(element);
			return 0;
		}
		switch(element)//execute per tick on passed element
		{
			case "1":
			//Run farm script if farm
				return farmS();

			case "2":
			//Run Storage script if Storage
				return StorageS();

			case "3":
			//Run Processing script if Storage
				return ProcessingS();

			case "4":
			//Run market script if Market
				return marketS();
			/*
			case "5":
			//trukk
				return trukk.trukkS(element)
				*/
		}
	}

	static transfer(targ, amount)//update store amounts for the objects so they can trade
	{
		this.arr[targ].add += Math.floor(amount);
		//console.log(this.arr[targ].potatoes);
	}


	static buyLand()
	{
		if(this.getCoins >= 1000)
		{
			this.yard.grid[this.landPos[0]][this.landPos[1]][0] = 1;
			this.gameVariables.tatercoins -= 1000;
			this.objRet(1).plantsPer += 5;
		}
	}

	//receives a click
    static clickLocation(pos)
    {
        let x = pos%16;
		let y = Math.floor(pos/16);
		//console.log(x + " " + y );
        switch(this.yard.getBuilding(x,y)[0])
        {
        	case 0:
        		//call ricks thing for ui
        		currentMenu(3);
        		this.landPos = [x,y];
        		return;
        	case 1:
        		this.farmClicked();
        		return;
        	case 2:
        		this.storageClicked();
        		return;
        	default:
        		return;
        }
    }

    static farmClicked()
    {	
    	currentMenu(1);
    	this.objRet(1).clicked = true;
    	//console.log("farm clicked");
    }
    static storageClicked()
    {
    	currentMenu(2);
    	this.objRet(2).clicked = true;
    	console.log("storage clicked");
    }
    
    static getSave(){
    	
    }
}
