class object_executor
{

	static constructor()//constructor for new game
	{
		this.arr = ["Road Placeholder", new farm, new storage, new processing, "market Placeholder"];//create new object for each building
		this.gameVariables = new gameVars;//initiates game variables
	}
	static constructor(playerString)
	{
		//implement game loading
	}

	static execute()
	{
		for(element in this.array)//iterate through elements given per game tick
		{
			var ret = object_manager.execute(element);
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

	static execute( element)
	{
		switch(element.id)//execute per tick on passed element
		{
			case 1:
			//Run farm script if farm
				return farm.run(element);
				
			case 2:
			//Run storage script if storage
				return storage.run(element);

			case 3:
			//Run Processing script if storage
				return processing.run(element);

			case 4:
			//Run market script if Market
				return market.run(element);

			case 5:
			//trukk
				return trukk.run(element)
		}
	}

	static transfer(targ, amount)//update store amounts for the objects so they can trade
	{
		this.arr[targ].add= amount;
	}

}