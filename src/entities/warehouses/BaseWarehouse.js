import BaseEntity from '../../lib/BaseEntity';

export default class BaseWarehouse extends BaseEntity {
  constructor(name, comment) {
    super(comment);
    this.name = name;
    this.occupancy = 0;
  }
}
