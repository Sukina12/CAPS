'use strict';

require('dotenv').config();
const events = require('./events');

const faker = require('faker');
const store = process.env.STORE;

class Order {
  constructor(store) {
    this.storeName = store;
    this.orderId = faker.datatype.uuid();
    this.customer = faker.name.findName();
    this.address = faker.address.cityName();
  }
}

setInterval(() => {
  let fakeOrder = new Order(store);
  events.emit('pickUp', fakeOrder);
}, 5000);

events.on('delivered', (payload) => {
  console.log(`Thank You deliver ${payload.orderId}`);
});

module.exports = Order;
