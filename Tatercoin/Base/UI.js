$(document).ready(function()
    {
        document.getElementById("buySeeds").onclick = ()=>{ console.log('yahao');ObjectManager.buySeeds(1);}
        document.getElementById("buy10Seeds").onclick = ()=>{ console.log('yahao');ObjectManager.buySeeds(10);}

        setInterval(function()
        {
            document.getElementById("seeds").innerHTML = ObjectManager.getSeeds() + " Seeds";
            document.getElementById("money").innerHTML = ObjectManager.getCoins() + " ₽";

            $('#seeds').html(ObjectManager.getSeeds() + " Seeds");
            $('#money').html(ObjectManager.getCoins() + " ₽");
        }, 50
        );



    });

    function currentMenu(building)
    {
      /*
      1 = farm
        - Plant button
        - Harvest button
        - Current state
      2 = storage
        - Things stored
      3 = Empty land
        - Nothing
      */
      /*
      var btn = document.createElement("BUTTON");   // Create a <button> element
      btn.innerHTML = "CLICK ME";                   // Insert text
      document.body.appendChild(btn);               // Append <button> to <body>
      */
      var farmEl = document.getElementById('farm');
      var storeEl = document.getElementById('storage');
      switch(building){

        case 1: //Farm
          console.log('Setting lower menu to farm');
          document.getElementById('currentState').innerText = "Planted: " + ObjectManager.objRet(1).planted + ", Progress: " + ObjectManager.objRet(1).growProgress;
          farmEl.style.display = "block";
          break;

        case 2: //Storage
        console.log('Setting lower menu to storage');
        storeEl.style.display = "block";
        break;

      }
    }
