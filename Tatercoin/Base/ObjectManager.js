class ObjectManager
{
	static build()//constructor for new game
	{
		this.arr = ["Road Placeholder", new Farm(), new Storage(), new Processing(), "market Placeholder"];//create new object for each building
		this.gameVariables = new gameVars();//initiates game variables
		this.grid = new Array(16);

		for(var i=0;i<16;i++)
        {
            this.grid[i] = new Array(9);
            for(var j=0;j<9;j++)
            {
                this.grid[i][j] = new Cell();
            }
		}
	}
	/*static build(playerString)
	{
		//implement game loading
	}*/

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
		return this.gameVariables.seeds = seeds;// increment seeds by given amount
	}
	static addCoins(coin)
	{
		return this.gameVariables.tatercoins += coin// increment coins by given amount
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
			console.log(element);
			return 0;
		}
		switch(element.id)//execute per tick on passed element
		{
			case 1:
			console.log('case 1');
			//Run farm script if farm
				return this.arr[1].farmS(element);

			case 2:
			//Run Storage script if Storage
				return Storage.StorageS(element);

			case 3:
			//Run Processing script if Storage
				return Processing.ProcessingS(element);

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
