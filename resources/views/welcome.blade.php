<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Simone Pozzobon</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <canvas class="scene scene--full" id="scene"></canvas>
        <div id="app" class="container-fluid content">
            <div class="content__inner">
                <div id="anim" ref="anim"></div>
            </div>
            <div id="mail">
                info@simonepozzobon.com
            </div>
        </div>
        <script src="js/app.js"></script>
    </body>
</html>
