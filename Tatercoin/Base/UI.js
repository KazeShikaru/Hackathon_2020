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
      switch(building){

        case 1: //Farm
          var plantbtn = document.createElement('BUTTON');
          plantbtn.onclick = ObjectManager.arr[1].plant(10);
          plantbtn.innerHTML = "Plant 10 seeds";
          document.body.appendChild(plantbtn);

          var harvestbtn = document.createElement('BUTTON');
          plantbtn.onclick = ObjectManager.arr[1].harvest();
          harvestbtn.innerHTML = "harvest";
          document.body.appendChild(harbestbtn);

          var currentState = document.createElement('p');
          currentState.innerText = "Planted: " + ObjectManager.arr[1].planted + ", harvestable: " + ObjectManager.arr[1].harvestable;
          document.body.appendChild(currentState);
          break;
      }
    }
