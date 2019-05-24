import BaseWarehouse from './BaseWarehouse';


export default class Rack extends BaseWarehouse {
  constructor(name, comment) {
    super(name, comment);
    this.shelfs = [];
  }
}
