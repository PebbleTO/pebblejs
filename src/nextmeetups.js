var ajax  = require('ajax'),
    UI    = require('ui'),
    Event = require('./event');

function NextMeetups() {
    this.endpoint    = "http://pebbleto.kinncj.com.br/public/api/events/future";
    this.currentCard = 0;
    this.cards       = [];
}

NextMeetups.prototype.fetch = function() {
    ajax(
        {
            url: this.endpoint,
            type: 'json'
        },
        this.onSuccess.bind(this),
        this.onError.bind(this)
    );
};

NextMeetups.prototype.onSuccess = function(data, status, request) {

    data.forEach(function(event){
        var card = new UI.Card();
        
        card.event = event;

        card.action("up",     "images/sq_br_previous.png");
        card.action("down",   "images/sq_br_next.png");
        card.action("select", "images/sq_br_select.png");
        card.style("small");
        card.subtitle(card.event.name);
        card.body(card.event.created + "\n" + card.event.status);
        card.on('show', function() {
            console.log('card is shown!');
        });
        card.on('click', this.bindDown.bind(this));
        card.on('click', this.bindUp.bind(this));
        card.on('click', this.bindSelect.bind(this));
        this.cards.push(card);
    }.bind(this));
    
    this.cards[this.currentCard].show();
};

NextMeetups.prototype.onError = function(error, status, request) {
    console.log('The ajax request failed: ' + error);
};

NextMeetups.prototype.bindDown = function(event){ 
    if(event.button !== 'down') {
        return;
    }

    var card = this.cards[this.currentCard + 1];

    if (card) {
        this.currentCard = this.currentCard + 1;

        card.show();
    }
};
    
NextMeetups.prototype.bindUp = function(event){ 
    if(event.button !== 'up') {
        return;
    }

    var card = this.cards[this.currentCard - 1];

    if (card) {
        this.currentCard = this.currentCard - 1;

        card.show();
    }
};
    
NextMeetups.prototype.bindSelect = function(event){
    if(event.button !== 'select') {
        return;
    }

    var card = this.cards[this.currentCard];

    if (card) {
        var e = new Event(card.event);

        e.init();
    }
};

NextMeetups.prototype.init = function() {
    this.fetch();
};

module.exports = new NextMeetups;