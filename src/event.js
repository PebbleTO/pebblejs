var UI      = require('ui'),
    Vector2 = require('vector2');

function Event (event) {
    this.name        = event.name;
    this.description = event.description;
    this.rsvps       = event.rsvps;
    this.currentRsvp = 0;
}

Event.prototype.init = function() {
        var card = new UI.Card({action: {
                select: 'images/icon-walk.png'
            }}),
            windowSize = new Vector2(144, 168);

        card.style("small");
        card.subtitle(this.name);
        card.scrollable(true);
        card.body(this.description);
        card.on('click', function(){
            var window = new UI.Window({
                    fullscreen: true,
                    backgroundColor: 'black',
                }),
                image  = new UI.Image(),
                text   = new UI.Text({
                    position: new Vector2(0, 134),
                    size: new Vector2(windowSize.x, 20),
                    font: 'gothic-18-bold',
                    color: 'white',
                  });

            // image.position(new Vector2((windowSize.x - 25) / 2, 90));
            image.size(new Vector2(144, 168));
            image.compositing('set');
            image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+this.rsvps[this.currentRsvp].avatar);
            text.text(this.rsvps[this.currentRsvp].name);
            window.on('click', function(event){
                if(this.currentRsvp < 0) {
                    this.currentRsvp = 1;
                }

                if(this.currentRsvp > this.rsvps.length) {
                    this.currentRsvp = this.rsvps.lentgh - 2;
                }

                if(event.button === "up") {
                    var currentRsvp = this.rsvps[this.currentRsvp - 1];

                    if (currentRsvp) {
                        this.currentRsvp = this.currentRsvp - 1;
                        text.text(currentRsvp.name);
                        image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+currentRsvp.avatar);
                    }
                } else {
                     var currentRsvp = this.rsvps[this.currentRsvp + 1];

                    if (currentRsvp) {
                        this.currentRsvp = this.currentRsvp + 1;
                        text.text(currentRsvp.name);
                        image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+currentRsvp.avatar);
                    }
                }
            }.bind(this));

            window.add(image);
            window.add(text);
            window.show();
        }.bind(this));

        card.show();
    };

module.exports = Event;
