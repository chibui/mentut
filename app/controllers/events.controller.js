module.exports = {

  // show all events
  showEvents: (req, res) => {
    // create dummy events
    const events = [
      { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.'},
      { name: 'Swimming', slug: 'swimming', description: 'In a pool'},
      { name: 'Lifting', slug: 'lifting', description: 'Pick up heavy things'},
    ];

    // return a view with data
    res.render('pages/events', {events: events });
  },

  // show a single event
  showSingle: (req, res) => {
    // get a single event
    const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.'};
    res.render('pages/single', {event: event });
  }

};