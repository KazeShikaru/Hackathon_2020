
$('#buy10Seeds').click()
(
    ObjectManager.buySeeds(10)
);

$('#buySeeds').click()
(
    ObjectManager.buySeeds(1)
);

setInterval(function()
{
    $('#seeds').html(ObjectManager.getSeeds() + " Seeds");
    $('#money').html(ObjectManager.getCoins() + " ₽");
},
33
);


function currentMenu(pos)
{

}