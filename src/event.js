var UI = require('ui');

function Event (event) {
    this.name        = event.name;
    this.description = event.description;
    this.rsvps       = event.rsvps;
    this.currentRsvp = 0;
}

Event.prototype.init = function() {
        var card = new UI.Card({action: {
            select: 'images/icon-walk.png'
        }});

        card.style("small");
        card.subtitle(this.name);
        card.scrollable(true);
        card.body(this.description);
        card.on('click', function(){
            var window = new UI.Window(),
                image  = new UI.Image();

            image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+this.rsvps[this.currentRsvp].avatar);
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
                        image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+currentRsvp.avatar);
                    }
                } else {
                     var currentRsvp = this.rsvps[this.currentRsvp + 1];

                    if (currentRsvp) {
                        this.currentRsvp = this.currentRsvp + 1;
                        image.image("http://pebbleto.kinncj.com.br/avatar/index.php/?p="+currentRsvp.avatar);
                    }
                }
            }.bind(this));

            window.add(image);
            window.show(); 
        }.bind(this));

        card.show();
    };

module.exports = Event;