import BaseProduct from './BaseProduct';


export default class PhysicalProduct extends BaseProduct {
  constructor(article, name, weight, length, width, heigth, comingCost, receiptDate, comment) {
    super(comment);
    this.article = article;
    this.name = name;
    this.weight = weight;
    this.length = length;
    this.width = width;
    this.heigth = heigth;
    this.volume = length * width * heigth;
    this.comingCost = comingCost;
    this.receiptDate = receiptDate || new Date();
    this.shippingDate = null;
  }
}
