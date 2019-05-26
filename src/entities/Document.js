import BaseEntity from '../lib/BaseEntity';

export default class Document extends BaseEntity {
  constructor(name, type, comment) {
    super(comment);
    this.name = name;
    this.type = type;
  }
}
