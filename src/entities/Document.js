import BaseEntity from '../lib/BaseEntity';

export default class BaseDocument extends BaseEntity {
  constructor(name, comment) {
    super(comment);
    this.name = name;
  }
}
