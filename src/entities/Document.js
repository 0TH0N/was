import BaseEntity from '../lib/BaseEntity';

export default class Document extends BaseEntity {
  constructor(number, type, warehouse, comment) {
    super(comment);
    this.name = number;
    this.type = type;
    this.warehouse = warehouse;
  }
}
