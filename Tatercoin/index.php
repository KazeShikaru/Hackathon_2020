<!doctype html>
<meta charset="UTF-8">
<head>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script src ="base/Yard.js"></script>
    <script src="base/EventHandler.js"></script>
    <script src="base/marketScript.js"></script>
    <script src="base/market.js"></script>
    <script src="base/marketScript.js"></script>
    <script src="base/Timer.js"></script>
    <script src="base/gameVariables.js"></script>
    <script src="base/Object.js"></script>
    <script src="base/storage.js"></script>
    <script src="base/farm.js"></script>
    <script src="base/processing.js"></script>
  <!--  <script src="base/Cell.js"></script>-->
    <script src="base/ObjectManager.js"></script>
    <script src="base/GUI.js"></script>
    <script src="base/Engine.js"></script>
    <script src="base/save.js"></script>
    <script src="base/storageScript.js"></script>
    <script src="base/farmScript.js"></script>
    <script src="base/processingScript.js"></script>
    <script src="base/UI.js"></script>

</head>

<body>

    <canvas id='canvas'></canvas>

    <div style="visibility: hidden">
        <!--<img id="test" src="test_cell.png">-->
    </div>

    </div>

    <script>
    var engine;
    $(document).ready(function()
    {
		//Constructs Engine
		engine = new Engine();
    engine.start();
    });

    </script>

    <div id='menu' style='width: 280px; height: 100%; right: 0px;top: 0px;position: absolute; background-color: rgb(139, 139, 139);'>
      <!-- Upper Menu (game variables seeds and tater coins)-->
      <div style="background-color: rgb(197, 197, 197);margin-left: 5px; margin-right: 5px;">
          <p id="money" style="text-align: right ;font-size: 32px; margin-bottom: 5px; margin-right: 5px; margin-top: 10px;"> 100 ₽</p>
          <p id="seeds" style="text-align: right ;font-size: 32px; margin-top: 5px;margin-right: 5px; margin-bottom: 10px;"> 100 seeds</p>
          <p style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 10px; padding-bottom: 5px;">
            <button id="buySeeds">Buy 1 Seed</button>
            <button id="buy10Seeds">Buy 10 Seeds</button>
          </p>
        <p style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 10px; padding-bottom: 5px;">
          <button id="Login" onclick="document.location='Login.php'">Login</button>
          <button onclick="save("+<?php echo $_SESSION['username'].", ".$_SESSION['password'].", "+ObjectManager.getSave() ?>+")">Save File</button>
        </p>
      </div>
      <!-- Lower Menu (changes with building)-->
      <div id='lowerMenu'>
      </div>
    </div>

</body>
