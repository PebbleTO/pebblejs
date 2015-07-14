var ajax  = require('ajax'),
    Event = require('./event');

function TodayMeetup() {
    this.endpoint    = "http://pebbleto.kinncj.com.br/public/api/events/today";
    this.currentCard = 0;
    this.cards       = [];
}

TodayMeetup.prototype.fetch = function() {
    ajax(
        {
            url: this.endpoint,
            type: 'json'
        },
        this.onSuccess.bind(this),
        this.onError.bind(this)
    );
};

TodayMeetup.prototype.onSuccess = function(data, status, request) {
    if (!data) {
        return;
    }
    var card = new Event(data);

    card.init();
};

TodayMeetup.prototype.onError = function(error, status, request) {
    console.log('The ajax request failed: ' + error);
};

TodayMeetup.prototype.init = function() {
    this.fetch();
};

module.exports = new TodayMeetup;
