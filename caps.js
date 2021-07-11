'use strict';

const events = require('./events');

require('./vendor');
require('./driver');

events.on('pickUp', pickUp);
events.on('in-transit', inTransit);
events.on('delivered', delivered);


function pickUp(payload) {
  let result = {
    event : 'pickup',
    time: new Date().toLocaleString(),
    payload : payload,
  };
  console.log('Event', result);
}

function inTransit(payload) {
  let result = {
    event : 'inTransit',
    time: new Date().toLocaleString(),
    payload : payload,
  };
  console.log('Event', result);
}

function delivered(payload) {
  let result = {
    event : 'delivered',
    time: new Date().toLocaleString(),
    payload : payload,
  };
  console.log('Event', result);
}

module.exports = {
  pickUp,
  inTransit,
  delivered,
};


