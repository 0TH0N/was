import BaseWarehouse from '../lib/BaseEntity';


export default class Warehouse extends BaseWarehouse {
  constructor(name, capacity, comment) {
    super(comment);
    this.name = name;
    this.capacity = capacity;
  }
}
