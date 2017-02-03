const Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents
}
// show all events
function showEvents(req, res) {
// get all events


// return a view with data
res.render('pages/events', {events: events });
}

// show a single event
function showSingle(req, res) {
// get a single event
const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.'};
res.render('pages/single', {event: event });
}

// seed our db
function seedEvents(req, res) {
// create some events
const events = [
      { name: 'Basketball', description: 'Throwing into a basket.'},
      { name: 'Swimming', description: 'In a pool'},
      { name: 'Lifting', description: 'Pick up heavy things'},
      { name: 'Kung Fu', description: 'Punching and kicking'}
    ];

// use the Event model to add/save
Event.remove({}, () => {
  for (event of events) {
    var newEvent = new Event(event);
    newEvent.save();
  }
});

// seeded
res.send('Database seeded!');
}
