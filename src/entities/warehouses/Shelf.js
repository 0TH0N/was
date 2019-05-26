import BaseWarehouse from './BaseWarehouse';


export default class Shelf extends BaseWarehouse {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, comment, capacity) {
    super(name, comment);
    this.products = [];
    this.capacity = capacity;
  }
}
