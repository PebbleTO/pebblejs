var UI          = require('ui'),
    menu        = require('menu'),
    mainscreen  = new UI.Menu({
        backgroundColor: 'cyan',
        textColor: 'black',
        highlightBackgroundColor: 'red',
        highlightTextColor: 'white',
        sections: [{
            backgroundColor: 'cyan',
            title: 'Pebble Toronto',
            items: [{
                backgroundColor: 'cyan',
                title: 'Next meetups',
                subtitle: 'Stay tunned'
            }, {
                backgroundColor: 'cyan',
                title: 'NOW!',
                subtitle: 'Check what\'s trending!'
            }]
        }]
});

mainscreen.on('select', function(menuItem){
    menu[menuItem.itemIndex].init();
});

module.exports = mainscreen;
