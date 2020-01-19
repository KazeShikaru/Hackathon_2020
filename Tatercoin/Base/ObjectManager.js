class ObjectManager
{		
	static build()//constructor for new game
	{
		this.arr = ["Road Placeholder", new farm, new storage, new processing, "market Placeholder"];//create new object for each building
		this.gameVariables = new gameVars;//initiates game variables
		for(var i=0;i<32;i++)
        {
            this.grid[i] = new Array(18);
            for(var j=0;j<18;j++)
            {
                this.grid[i][j] = new Cell();
            }
        }
	}
	static build(playerString)
	{
		//implement game loading
	}

	static getSeeds()
	{
		return this.gameVariables.seeds;//returns seed count from gamevariables
	}
	static getCoins()
	{
		return this.gameVariables.tatercoins;// returns coin count from game variables
	}
	static addSeeds(seeds)
	{
		return this.gameVariables.seeds += seeds;// increment seeds by given amount
	}
	static addCoins(coin)
	{
		return this.gameVariables.tatercoins += coin// increment coins by given amount
	}

	static execute()
	{
		console.log("1");
		for(element in this.array)//iterate through elements given per game tick
		{
			console.log(element);
			var ret = this.execute(element);
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

	static execute(element)
	{
		if(element == undefined)
		{
			return 0;
		}
		switch(element.id)//execute per tick on passed element
		{
			case 1:
			//Run farm script if farm
				return farm.farmScript(element);
				
			case 2:
			//Run storage script if storage
				return storage.storageScript(element);

			case 3:
			//Run Processing script if storage
				return processing.processingScript(element);

			case 4:
			//Run market script if Market
				return market.marketS(element);

			case 5:
			//trukk
				return trukk.trukkS(element)
		}
	}

	static transfer(targ, amount)//update store amounts for the objects so they can trade
	{
		this.arr[targ].add= amount;
	}

}