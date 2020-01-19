function marketS()
{
	var element = ObjectManager.arr[4];
	if(element.add > 0)
	{
		ObjectManager.addCoins(element.add);
		element.add = 0;
		console.log(ObjectManager.getCoins());
	}
}
