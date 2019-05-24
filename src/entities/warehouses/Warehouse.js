import BaseWarehouse from './BaseWarehouse';


export default class Warehouse extends BaseWarehouse {
  constructor(name, comment) {
    super(name, comment);
    this.racks = [];
  }
}
