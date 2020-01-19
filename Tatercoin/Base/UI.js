
$('#buy10Seeds').click(
    ()=>{console.log('yahao');ObjectManager.buySeeds(10);}
);

$('#buySeeds').click(
    ()=>{ console.log('yahao');ObjectManager.buySeeds(1);}
);

setInterval(function()
{
    document.getElementById("seeds").innerHTML = ObjectManager.getSeeds() + " Seeds";
    document.getElementById("money").innerHTML = ObjectManager.getCoins() + " ₽";

    $('#seeds').html(ObjectManager.getSeeds() + " Seeds");
    $('#money').html(ObjectManager.getCoins() + " ₽");
}, 50
);


function currentMenu(pos)
{

}