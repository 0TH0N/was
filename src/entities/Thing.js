import BaseEntity from '../lib/BaseEntity';


export default class Thing extends BaseEntity {
  constructor(product, comingCost, receiptDate, document, comment) {
    super(comment);
    this.product = product;
    this.comingCost = comingCost;
    this.receiptDate = receiptDate || new Date();
    this.shippingDate = null;
    this.document = document;
  }
}
