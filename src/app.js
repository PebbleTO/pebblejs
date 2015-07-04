var splashScreen = require('./splashscreen'),
    mainScreen   = require('./mainscreen');

splashScreen.show();

setTimeout(function() {
    splashScreen.hide();
    mainScreen.show();
}, 400);