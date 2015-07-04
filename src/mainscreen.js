var UI          = require('ui'),
    menu        = require('menu'),
    mainscreen  = new UI.Menu({
        backgroundColor: 'white',
        textColor: 'black',
        highlightBackgroundColor: 'white',
        highlightTextColor: 'black',
        sections: [{
            backgroundColor: 'black',
            title: 'Pebble Toronto',
            items: [{
                backgroundColor: 'black',
                title: 'Next meetups',
                subtitle: 'Stay tunned'
            }, {
                backgroundColor: 'black',
                title: 'NOW!',
                subtitle: 'Check what\'s trending!'
            }]
        }]
});

mainscreen.on('select', function(menuItem){ 
    menu[menuItem.itemIndex].init();
});

module.exports = mainscreen;