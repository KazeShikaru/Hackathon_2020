class object_manager
{
	static transfer( origin,  targ, amount)//update store amounts for the objects so they can trade
	{
		origin.storeRemove(amount);
		targ.storeAdd(amount);
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
}
class object_executor
{

	constructor(arr)
	{
		this.array = arr;
	}
	execute()
	{
		for(element in array)//iterate through elements given per game tick
		{
			var ret = object_manager.execute(element);
			if(ret != NULL)
			{

			}
		}
	}
}